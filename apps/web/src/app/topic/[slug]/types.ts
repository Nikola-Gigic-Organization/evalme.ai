import { z } from "zod";

const MIN_ANSWER_LENGTH = 2;

export type QuestionFormProps = {
  answerId: string;
  answer: string;
};

export const questionFormSchema = z.object({
  answerId: z.string().min(1),
  answer: z
    .string()
    .min(
      MIN_ANSWER_LENGTH,
      `Answer must be at least ${MIN_ANSWER_LENGTH} characters long.`,
    ),
});
