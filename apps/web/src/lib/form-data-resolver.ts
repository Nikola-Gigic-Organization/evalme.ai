import { z, ZodSchema } from "zod";

const formDataResolver = <T extends ZodSchema>(
  formData: FormData,
  schema: T,
): (z.infer<T> & { errors: Array<{ message: string }> }) | null => {
  const data = Object.fromEntries(formData.entries());

  try {
    const res = schema.parse(data);

    return res;
  } catch (error: any) {
    const errors = error?.issues?.map((err: z.ZodError) => ({
      message: err.message,
    }));
    return {
      errors,
    };
  }
};

export default formDataResolver;
