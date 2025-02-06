"use server";
import { reviewSchema } from "../schemas/review-schema";
import { validateWithZodSchema } from "../schemas/validator";
import { ActionFunction } from "../types/action-function";
import { getAuthUser } from "./common-action";
import db from "@/utils/db/client";
import { handleError } from "./helper";
import { revalidatePath } from "next/cache";
import { Profile, Review } from "@prisma/client";
import { ActionResult } from "../types/action-result";

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

export const getReviews = async (
  propertyId: string
): Promise<(Review & { profile: Profile })[] | ActionResult> => {
  try {
    const reviews = await db.review.findMany({
      where: { propertyId },
      select: {
        rating: true,
        comment: true,
        createdAt: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
            profileImage: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reviews as (Review & { profile: Profile })[];
  } catch (error) {
    return handleError({
      error,
      caller: "getReviews",
      title: "Error getting reviews",
    });
  }
};
