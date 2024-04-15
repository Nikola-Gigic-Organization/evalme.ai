"use client";

import { FC, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Topic } from "@/gql/graphql";
import { match } from "ts-pattern";
import InterviewAnswer from "./interview-answer";
import { submitQuestion } from "../actions";
import { QuestionFormProps } from "../types";
import ErrorsComponent from "./errors-component";

interface QuestionsFormProps {
  topic?: DeepPartial<Topic> | null;
}

const QuestionsForm: FC<QuestionsFormProps> = ({ topic }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { register, reset } = useForm<QuestionFormProps>({
    defaultValues: {
      userAnswer: "",
    },
  });

  const [userAnswerValue, setUserAnswerValue] = useState("");
  const [topicActiveQuestionIndex, setTopicActiveQuestionIndex] = useState(0);
  const [errors, setErrors] = useState<Array<{ message: string }>>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState("");
  const topicQuestionsLength = topic?.questions?.length || 0;
  const topicActiveQuestion = topic?.questions?.at(topicActiveQuestionIndex);

  const onSubmit = async (data: FormData) => {
    if (showAnswer) {
      setTopicActiveQuestionIndex((prev) => prev + 1);
      setShowAnswer(false);
      return;
    }

    if (topicActiveQuestion?.id) {
      data.append("questionId", topicActiveQuestion.id.toString());
    }

    const res = await submitQuestion(data);
    if (res.errors.length === 0) {
      setActiveAnswer(res.openAIAnswer);
      setShowAnswer(true);
      setUserAnswerValue("");
      setErrors([]);
      reset();
    } else {
      setErrors(res.errors);
    }
  };

  return (
    <form className="w-md flex flex-col space-y-8" action={onSubmit}>
      <div className="relative aspect-square w-full">
        <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col flex-col justify-between space-y-2 overflow-scroll border border-black bg-white p-4">
          {match(showAnswer)
            .with(true, () => <InterviewAnswer answer={activeAnswer} />)
            .otherwise(() => (
              <>
                <div>
                  <h2 className="text-xl font-bold">
                    {topicActiveQuestion?.title}
                  </h2>
                  <p className="text-lg font-medium">
                    {topicActiveQuestion?.text}
                  </p>
                </div>
                <div className="flex w-full flex-col space-y-2">
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
          <div className="group relative h-11 w-20">
            <button className="absolute bottom-1 left-1 z-10 h-full w-full border border-black bg-white p-2 transition-all duration-300 active:bg-gray-300 group-hover:bottom-2 group-hover:left-2">
              {showAnswer ? "Next" : "Submit"}
            </button>
            <div className="absolute right-1 top-1 h-full w-full bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
          </div>
        </div>
      )}
    </form>
  );
};

export default QuestionsForm;
