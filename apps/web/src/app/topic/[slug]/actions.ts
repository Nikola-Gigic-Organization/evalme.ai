"use server";

import { formDataResolver } from "@/lib";

import { questionFormSchema } from "./types";

export const submitQuestion = async (
  formData: FormData,
): Promise<{ errors: Array<{ message: string }> }> => {
  const data = await formDataResolver(formData, questionFormSchema);

  const errors = data?.errors || [];

  return {
    errors,
  };
};
