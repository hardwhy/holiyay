import { auth } from "@clerk/nextjs/server";
import { Profile, Property, Review } from "@prisma/client";
import Logger from "./logger";

const validToReview = async (
  existingReview: Review | null,
  profile: Profile
) => {
  const { userId } = await auth();
  const isNotOwner = profile.clerkId !== userId;
  const isNotReviewed = existingReview === null;
  const isValid = isNotOwner && isNotReviewed && userId;
  return isValid;
};

export { validToReview };
