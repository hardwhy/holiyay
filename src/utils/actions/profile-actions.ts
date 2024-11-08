"use server";

import { clerkClient, currentUser, User } from "@clerk/nextjs/server";
import { ProfileSchema } from "../schemas/profile-schema";
import { ActionFunction } from "../types/action-function";
import db from "../db/client";
import { redirect } from "next/navigation";

export const createProfileAction: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  try {
    const user = await getUser();

    const raw = Object.fromEntries(data);

    const validatedFields = ProfileSchema.parse(raw);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl,
        ...validatedFields,
      },
    });

    (await clerkClient()).users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    return { title: "Success", message: "Profile has been created" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return {
      title: "Something went wrong while creating profile",
      message: message,
    };
  }
  redirect("/");
};

export const checkUserHasProfile = async (): Promise<void> => {
  try {
    const user = await getUser();
    const hasProfile = user.privateMetadata?.hasProfile;
    if (!!hasProfile) redirect("/");
  } catch (error) {
    console.log("checkUserHasProfile error:", error);
  }
};

export const getProfileImage = async () => {
  try {
    const user = await getUser();
    const profile = await db.profile.findUnique({
      where: { clerkId: user.id },
      select: { profileImage: true },
    });

    return profile?.profileImage;
  } catch (error) {
    console.log("getProfileImage err:", error);
    return null;
  }
};

export const getUserProfile = async () => {
  const user = await getAuthUser();
  const profile = db.profile.findUnique({ where: { clerkId: user.id } });
  if (!profile) redirect("/profile/create");
  return profile;
};

export const updateUserProfile: ActionFunction = async () => {
  return { title: "Success", message: "Profile has been updated!" };
};

const getUser = async (): Promise<User> => {
  const user = await currentUser();
  if (!user) throw Error("Please login before accessing this menu");
  return user;
};

const getAuthUser = async (): Promise<User> => {
  const user = await getUser();
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};
