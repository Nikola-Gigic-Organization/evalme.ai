import { FC, useState, useEffect } from "react";
import { Markup } from "interweave";

const InterviewAnswer: FC<{ answer: string }> = ({ answer }) => {
  return (
    <div>
      <Markup content={answer} noWrap />
    </div>
  );
};

export default InterviewAnswer;
