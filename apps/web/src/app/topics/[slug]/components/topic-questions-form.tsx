"use client";

import { FC, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Topic } from "@/gql/graphql";
import { match } from "ts-pattern";
import InterviewAnswer from "./interview-answer";
import { submitQuestion } from "../actions";
import { QuestionFormProps, QuestionFormState } from "../types";
import ErrorsComponent from "./errors-component";

interface QuestionsFormProps {
  topic?: DeepPartial<Topic> | null;
}

const QuestionsForm: FC<QuestionsFormProps> = ({ topic }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { register, reset } = useForm<QuestionFormProps>({
    defaultValues: {
      userAnswer: "",
    },
  });

  const [userAnswerValue, setUserAnswerValue] = useState("");
  const [topicActiveQuestionIndex, setTopicActiveQuestionIndex] = useState(
    () => {
      if (!topic?.viewerAnsweredQuestionsCount) {
        return 0;
      }

      return Math.min(
        Math.max(topic.viewerAnsweredQuestionsCount, 0),
        (topic.questions?.length ?? 1) - 1,
      );
    },
  );
  const [errors, setErrors] = useState<Array<{ message: string }>>([]);
  const [activeAnswer, setActiveAnswer] = useState("");
  const [questionFormState, setQuestionFormState] = useState<QuestionFormState>(
    () => {
      if (topic?.viewerAnsweredQuestionsCount === topic?.questions?.length) {
        return QuestionFormState.Finished;
      }

      return QuestionFormState.PendingAnswer;
    },
  );
  const topicQuestionsLength = topic?.questions?.length || 0;
  const topicActiveQuestion = topic?.questions?.at(topicActiveQuestionIndex);
  const isLastQuestion = topicActiveQuestionIndex === topicQuestionsLength - 1;

  const onSubmit = async (data: FormData) => {
    if (questionFormState === QuestionFormState.Finished) {
      router.push(`/topics/${topic?.slug}/overview`);
      return;
    }

    if (questionFormState === QuestionFormState.Answered) {
      setTopicActiveQuestionIndex((prev) => prev + 1);
      setQuestionFormState(QuestionFormState.PendingAnswer);
      return;
    }

    if (topicActiveQuestion?.id) {
      data.append("questionId", topicActiveQuestion.id.toString());
    }

    const res = await submitQuestion(data);
    if (res.errors.length === 0) {
      setActiveAnswer(res.openAIAnswer);
      setQuestionFormState(QuestionFormState.Answered);
      setUserAnswerValue("");
      setErrors([]);
      reset();

      if (isLastQuestion) {
        setQuestionFormState(QuestionFormState.Finished);
        return;
      }
    } else {
      setErrors(res.errors);
    }
  };

  const viewerAnswers = topic?.questions?.map((question) => {
    const data = {
      ...question?.viewerAnswer,
      question: {
        title: question?.title ?? "",
      },
    };
    return data;
  });

  return (
    <form className="w-lg flex h-full flex-col space-y-8" action={onSubmit}>
      <div className="relative h-full w-full">
        <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col flex-col justify-between space-y-2 overflow-scroll border border-black bg-white">
          {match(questionFormState)
            .with(
              QuestionFormState.Answered,
              QuestionFormState.Finished,
              () => (
                <InterviewAnswer
                  answer={
                    topicActiveQuestion?.viewerAnswer?.openAIAnswer ??
                    activeAnswer
                  }
                />
              ),
            )
            .otherwise(() => (
              <>
                <div className="p-4">
                  <h2 className="text-xl font-bold">
                    {topicActiveQuestion?.title}
                  </h2>
                  <p className="text-lg font-medium">
                    {topicActiveQuestion?.text}
                  </p>
                </div>
                <div className="flex w-full flex-col space-y-2 p-4">
                  <textarea
                    {...register("userAnswer")}
                    ref={inputRef}
                    className={clsx([
                      "resize-none border px-3 py-2 outline-0 ring-0 transition-all placeholder:font-extralight hover:border-black hover:placeholder:text-black focus:border-black focus:placeholder:text-black",
                      {
                        "border-zinc-400": userAnswerValue.length > 0,
                        "border-zinc-300": userAnswerValue.length === 0,
                      },
                    ])}
                    rows={7}
                    placeholder="Type your answer here..."
                    value={userAnswerValue}
                    onChange={(e) => {
                      setUserAnswerValue(e.target.value);
                    }}
                  />
                </div>
              </>
            ))}
        </div>
        <div className="absolute right-2 top-2 h-full w-full bg-black" />
      </div>
      {errors.length > 0 ? (
        <ErrorsComponent errors={errors} clearErrors={() => setErrors([])} />
      ) : (
        <div className="flex h-24 w-full justify-between">
          <div className="relative h-11 w-14">
            <div className="absolute bottom-1 left-1 z-10 flex w-full justify-center border border-black bg-white p-2 hover:cursor-default">
              {topicActiveQuestionIndex + 1} / {topicQuestionsLength}
            </div>
            <div className="absolute right-1 top-1 h-full w-full bg-black" />
          </div>
          <div className="group relative h-11 w-24">
            <button className="absolute bottom-1 left-1 z-10 h-full w-full border border-black bg-white p-2 transition-all duration-300 active:bg-gray-300 group-hover:bottom-2 group-hover:left-2">
              {match({ questionFormState })
                .with(
                  { questionFormState: QuestionFormState.PendingAnswer },
                  () => "Submit",
                )
                .with(
                  { questionFormState: QuestionFormState.Answered },
                  () => "Next",
                )
                .with(
                  { questionFormState: QuestionFormState.Finished },
                  () => "Overview",
                )
                .run()}
            </button>
            <div className="absolute right-1 top-1 h-full w-full bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
          </div>
        </div>
      )}
    </form>
  );
};

export default QuestionsForm;
