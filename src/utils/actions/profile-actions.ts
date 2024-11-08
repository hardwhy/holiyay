"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { ProfileSchema } from "../schemas/profile-schema";
import { ActionFunction } from "../types/action-function";
import db from "../db/client";
import { redirect } from "next/navigation";

export const createProfileAction: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  try {
    const user = await currentUser();
    console.log("clerk user", user);
    if (!user) throw Error("Please login to create a profile");

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
      }
    })

    return { title: "Success", message: "Profile has been created" };
  } catch (error) {
    const message = error instanceof Error? error.message : '';
    return {
      title: "Something went wrong while creating profile",
      message: message,
    };
  }
  redirect('/');
};
