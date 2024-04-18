"use client";
import { Markup } from "interweave";
import { usePDF } from "react-to-pdf";
import { UserAnswer } from "@/gql/graphql";

type OverviewResultsProps = {
  topicTitle?: string | null;
  viewerAnswers?: DeepPartial<UserAnswer | null>[] | null;
};

const OverviewResults = ({
  topicTitle,
  viewerAnswers,
}: OverviewResultsProps) => {
  const { toPDF, targetRef } = usePDF({
    filename: topicTitle
      ? `EvalMe-${topicTitle}-interview-results.pdf`
      : "EvalMe-interview-results.pdf",
  });

  const onSavePDF = () => {
    toPDF();
  };

  return (
    <div className="w-lg flex h-full flex-col space-y-8">
      <div className="relative h-full w-full">
        <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col flex-col justify-between space-y-2 overflow-scroll border border-black bg-white">
          <div ref={targetRef} className="flex flex-col gap-y-8 p-4">
            {viewerAnswers?.map((answer) => {
              return (
                <div
                  key={answer?.id}
                  className="flex flex-col space-y-2 border-b-2 border-dashed border-black pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-bold">Question:</div>
                    <div>{answer?.question?.title}</div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-bold">Your Answer:</div>
                    <div>{answer?.userAnswer}</div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-2xl font-bold">OpenAI Answer:</div>
                    <Markup
                      content={answer?.openAIAnswer}
                      className="block whitespace-pre-line"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute right-2 top-2 h-full w-full bg-black" />
      </div>
      <div className="flex h-24 w-full justify-end">
        <div className="group relative h-11 w-24">
          <button
            onClick={onSavePDF}
            className="absolute bottom-1 left-1 z-10 h-full w-full border border-black bg-white p-2 transition-all duration-300 active:bg-gray-300 group-hover:bottom-2 group-hover:left-2"
          >
            Save PDF
          </button>
          <div className="absolute right-1 top-1 h-full w-full bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
        </div>
      </div>
    </div>
  );
};

export default OverviewResults;
