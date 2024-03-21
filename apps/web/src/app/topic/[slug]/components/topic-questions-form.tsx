"use client";

import { FC, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Topic } from "@/gql/graphql";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { submitQuestion } from "../actions";
import { QuestionForm } from "../types";

interface QuestionFormProps {
  topic?: Partial<Topic> | null;
}

const QuestionForm: FC<QuestionFormProps> = ({ topic }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { register, reset } = useForm<QuestionForm>({
    defaultValues: {
      answer: "",
    },
  });

  const [value, setValue] = useState("");
  const [topicActiveQuestionIndex, setTopicActiveQuestionIndex] = useState(0);
  const [errors, setErrors] = useState<Array<{ message: string }>>([]);
  const [activeErrorIndex, setActiveErrorIndex] = useState(0);
  const topicQuestionsLength = topic?.questions?.length || 0;
  const topicActiveQuestion = topic?.questions?.at(topicActiveQuestionIndex);
  const activeError = errors?.at(activeErrorIndex);

  const onSubmit = async (data: FormData) => {
    const res = await submitQuestion(data);

    if (res.errors.length === 0) {
      setTopicActiveQuestionIndex((prev) => prev + 1);
      setValue("");
      reset();
      setErrors([]);
      inputRef.current?.focus();
    } else {
      setErrors(res.errors);
    }
  };

  return (
    <div className="w-sm flex flex-col space-y-8">
      <div className="relative aspect-square w-full">
        <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col flex-col justify-between space-y-2 border border-black bg-white p-4">
          <p className="text-lg font-medium">{topicActiveQuestion?.text}</p>
          <form className="flex w-full flex-col space-y-2" action={onSubmit}>
            <textarea
              {...register("answer")}
              ref={inputRef}
              className={clsx([
                "resize-none border px-3 py-2 outline-0 ring-0 transition-all placeholder:font-extralight hover:border-black hover:placeholder:text-black focus:border-black focus:placeholder:text-black",
                {
                  "border-zinc-400": value.length > 0,
                  "border-zinc-300": value.length === 0,
                },
              ])}
              rows={7}
              placeholder="Type your answer here..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="flex w-full items-center justify-between">
              <span>
                {topicActiveQuestionIndex + 1} / {topicQuestionsLength}
              </span>
              {topicActiveQuestionIndex !== topicQuestionsLength - 1 ? (
                <button className="bg-black px-3 py-2 text-white transition-colors hover:bg-zinc-700">
                  Submit
                </button>
              ) : (
                <button className="bg-black px-3 py-2 text-white transition-colors hover:bg-zinc-700">
                  Review
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="absolute right-2 top-2 h-full w-full bg-black" />
      </div>
      {errors.length > 0 ? (
        <div className="relative h-24 w-full">
          <div className="absolute bottom-2 left-2 z-10 flex h-full w-full justify-between overflow-hidden border border-black bg-white px-4 py-2">
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-rose-500">Error: </span>
              <span>{activeError?.message}</span>
            </div>
            {errors.length > 1 && (
              <div className="flex space-x-2">
                <button
                  disabled={activeErrorIndex === 0}
                  className="text-black disabled:text-gray-300"
                  onClick={() => {
                    setActiveErrorIndex((prev) => prev - 1);
                  }}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  disabled={activeErrorIndex === errors.length - 1}
                  className="text-black disabled:text-gray-300"
                  onClick={() => {
                    setActiveErrorIndex((prev) => prev + 1);
                  }}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
          <div className="absolute right-2 top-2 h-full w-full bg-black" />
        </div>
      ) : (
        <div className="h-24 w-full" />
      )}
    </div>
  );
};

export default QuestionForm;
