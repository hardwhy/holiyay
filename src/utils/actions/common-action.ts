"use server"
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getUser = async (): Promise<User> => {
  const user = await currentUser();
  if (!user) throw Error("Please login before accessing this menu");
  return user;
};

export const getAuthUser = async (): Promise<User> => {
  const user = await getUser();
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};
