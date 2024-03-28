import { z } from "zod";

const MIN_ANSWER_LENGTH = 2;

export type QuestionFormProps = {
  answer: string;
};

export const questionFormSchema = z.object({
  answer: z
    .string()
    .min(
      MIN_ANSWER_LENGTH,
      `Answer must be at least ${MIN_ANSWER_LENGTH} characters long.`,
    ),
});
