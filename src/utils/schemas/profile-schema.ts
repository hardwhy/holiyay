import { z, ZodSchema } from "zod";

export const ProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
});


