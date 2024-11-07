"use server";

import { ProfileSchema } from "../schemas/profile-schema";
import { ActionFunction } from "../types/action-function";

export const createProfileAction: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  //   "use server";
  //   const firstName = data.get("firstName") as string;
  //   console.log("data", data);
  //   console.log("firstName", firstName);
  //   return {
  //     message: "dummy message",
  //   };

  try {
    console.log("data", data);

    const raw = Object.fromEntries(data);
    console.log("Raw data", raw);

    const validatedFields = ProfileSchema.parse(raw);
    console.log(validatedFields);

    return { message: "Profile created successfully" };
  } catch (error) {
    console.log("Profile creation error:", error);
    return { message: "Something went wrong while creating profile" };
  }
};
