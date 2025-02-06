import { z } from "zod";

export const reviewSchema = z
  .object({
    rating: z.coerce.number().min(1).max(5),
    comment: z.string().min(10).max(500),
    propertyId: z.string(),
  });

export type ReviewSchema = z.infer<typeof reviewSchema>;
