"use server";

import { clerkClient, currentUser, User } from "@clerk/nextjs/server";
import { ProfileSchema } from "../schemas/profile-schema";
import { ActionFunction } from "../types/action-function";
import db from "../db/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ActionResult } from "../types/action-result";

const handleError = ({
  error,
  caller,
  title,
}: {
  error: unknown;
  caller: string;
  title: string;
}): ActionResult => {
  console.log("error from", caller, ": ", error);

  let message: string = "";
  if (error instanceof Error) message = error.message;
  return { title, message };
};

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
    return handleError({
      error,
      caller: "createProfileAction",
      title: "Something went wrong while creating profile",
    });
  }
  redirect("/");
};

export const checkUserHasProfile = async (): Promise<boolean> => {
  try {
    const user = await getUser();
    const hasProfile = user.privateMetadata?.hasProfile;
    return !!hasProfile;
  } catch (error) {
    console.log("checkUserHasProfile error:", error);
    return false;
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

export const updateUserProfile: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  try {
    const user = await getUser();

    const raw = Object.fromEntries(data);

    const validatedFields = ProfileSchema.parse(raw);

    await db.profile.update({
      where: { clerkId: user.id },
      data: validatedFields,
    });

    revalidatePath("/profile");
    return { title: "Success", message: "Profile has been updated" };
  } catch (error) {
   return handleError({
     error,
     caller: "updateUserProfile",
     title: "Something went wrong while updating profile",
   });
  }
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
