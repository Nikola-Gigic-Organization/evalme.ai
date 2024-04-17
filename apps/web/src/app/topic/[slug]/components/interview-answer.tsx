import { FC, useState, useEffect } from "react";
import { Markup } from "interweave";

const InterviewAnswer: FC<{ answer: string }> = ({ answer }) => {
  const [animatedAnswer, setAnimatedAnswer] = useState<string>("");
  const extractSubstringToFirstGreaterThanSign = (
    input: string,
    startIndex: number,
  ): string => {
    // Extract the substring from the starting index to ensure the regex searches only the relevant part
    const substringFromIndex = input.substring(startIndex);
    // Use a regex to match everything up to the first '>'
    // The pattern .*? matches any character (.) any number of times (*), as few times as possible to reach the first '>'
    const match = substringFromIndex.match(/(.*?)>/);

    // If a match is found, return the matched substring; otherwise, return an empty string
    return match ? match[1] : "";
  };

  useEffect(() => {
    if (animatedAnswer === answer) {
      return;
    }

    const interval = setInterval(() => {
      if (answer.slice(animatedAnswer.length).startsWith("<")) {
        const substring = extractSubstringToFirstGreaterThanSign(
          answer,
          animatedAnswer.length,
        );
        setAnimatedAnswer((prev) => prev + substring);
        return;
      }

      setAnimatedAnswer((prev) => {
        if (prev.length === answer.length) {
          return "";
        }
        return answer.slice(0, prev.length + 1);
      });
    }, 1);

    return () => clearInterval(interval);
  }, [answer, animatedAnswer]);
  return (
    <div>
      <Markup
        content={animatedAnswer}
        className="block whitespace-pre-line p-4"
      />
    </div>
  );
};

export default InterviewAnswer;
