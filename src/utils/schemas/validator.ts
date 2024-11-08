import { ZodSchema } from "zod";

export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown
) => {
  const result = schema.safeParse(data);

  if (result.error) {
    const errors = result.error.errors.map((e) => e.message);
    throw Error(errors.join(", \n"));
  }
  return result.data;
};
