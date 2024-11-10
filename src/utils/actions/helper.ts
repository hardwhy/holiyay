import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ActionResult } from "../types/action-result";

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

export const handleError = ({
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