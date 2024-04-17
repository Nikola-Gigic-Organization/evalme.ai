import { forwardRef } from "react";
import { Markup } from "interweave";
import { UserAnswer } from "@/gql/graphql";

type PreviewResultsProps = {
  innerRef?: React.Ref<HTMLDivElement> | undefined;
  viewerAnswers?: DeepPartial<UserAnswer>[] | undefined;
};

const PreviewResults = ({ innerRef, viewerAnswers }: PreviewResultsProps) => {
  return (
    <div ref={innerRef} className="flex flex-col gap-y-8 p-4">
      {viewerAnswers?.map((answer) => {
        return (
          <div
            key={answer.id}
            className="flex flex-col space-y-2 border-b-2 border-dashed border-black pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col space-y-2">
              <div className="font-bold">Question:</div>
              <div>{answer.question?.title}</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-bold">Your Answer:</div>
              <div>{answer.userAnswer}</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-bold">OpenAI Answer:</div>
              <Markup
                content={answer.openAIAnswer}
                className="block whitespace-pre-line"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewResults;
