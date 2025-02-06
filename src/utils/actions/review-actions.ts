"use server";
import { reviewSchema } from "../schemas/review-schema";
import { validateWithZodSchema } from "../schemas/validator";
import { ActionFunction } from "../types/action-function";
import { getAuthUser } from "./common-action";
import db from "@/utils/db/client";
import { handleError } from "./helper";
import { revalidatePath } from "next/cache";

export const submitReview: ActionFunction = async (
  prev: any,
  formData: FormData
) => {
  const user = await getAuthUser();
  try {
    const raw = Object.fromEntries(formData);

    const validatedFields = validateWithZodSchema(reviewSchema, raw);
    await db.review.create({
      data: {
        ...validatedFields,
        profileId: user.id,
      },
    });
    revalidatePath(`/properties/${validatedFields.propertyId}`);
    return {
      success: true,
      message: "Review submitted successfully",
      title: "Success",
    };
  } catch (error) {
    return handleError({
      error,
      caller: "submitReview",
      title: "Error submitting review",
    });
  }
};
