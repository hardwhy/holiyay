"use server";
import { reviewSchema } from "../schemas/review-schema";
import { validateWithZodSchema } from "../schemas/validator";
import { ActionFunction } from "../types/action-function";
import { getAuthUser } from "./common-action";
import db from "@/utils/db/client";
import { handleError } from "./helper";
import { revalidatePath } from "next/cache";
import { Review } from "@prisma/client";
import { ActionResult } from "../types/action-result";
import { ReviewWithProfile } from "@/domain/model";
import { auth } from "@clerk/nextjs/server";

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
): Promise<ReviewWithProfile[] | ActionResult> => {
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
    return reviews as ReviewWithProfile[];
  } catch (error) {
    return handleError({
      error,
      caller: "getReviews",
      title: "Error getting reviews",
    });
  }
};

export const getReviewsByUser = async (): Promise<
  ReviewWithProfile[] | ActionResult
> => {
  const user = await getAuthUser();
  try {
    const review = await db.review.findMany({
      where: { profileId: user.id },
      select: {
        id: true,
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
    });
    return review as ReviewWithProfile[];
  } catch (error) {
    return handleError({
      error,
      caller: "getReviewsByUser",
      title: "Error getting reviews by user",
    });
  }
};

export const deleteReview = async (reviewId: string): Promise<ActionResult> => {
  const user = await getAuthUser();
  try {
    await db.review.delete({
      where: { id: reviewId, profileId: user.id },
    });
    revalidatePath("/reviews");
    return {
      message: "Review deleted successfully",
      title: "Success",
    };
  } catch (error) {
    return handleError({
      error,
      caller: "deleteReview",
      title: "Error deleting review",
    });
  }
};

export const getExistingReview = async (
  propertyId: string
): Promise<Review | null> => {
  const { userId } = await auth();
  if (!userId) return null;
  try {
    const review = await db.review.findFirst({
      where: { propertyId, profileId: userId },
    });
    return review as Review;
  } catch {
    return null;
  }
};
