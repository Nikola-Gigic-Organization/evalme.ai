import { z } from "zod";

const MIN_ANSWER_LENGTH = 2;

export type QuestionFormProps = {
  questionId: string;
  userAnswer: string;
};

export const questionFormSchema = z.object({
  questionId: z.string().min(1),
  userAnswer: z
    .string()
    .min(
      MIN_ANSWER_LENGTH,
      `Answer must be at least ${MIN_ANSWER_LENGTH} characters long.`,
    ),
});

export enum QuestionFormState {
  PendingAnswer,
  Answered,
  Finished,
}
