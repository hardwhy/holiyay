import { Profile, Review } from "@prisma/client";

export type ReviewWithProfile = Review & {
  profile: Profile;
};

