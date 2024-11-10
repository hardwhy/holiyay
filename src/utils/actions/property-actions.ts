"use server";

import { ImageSchema } from "../schemas/image-schema";
import { PropertySchema } from "../schemas/property-schema";
import { validateWithZodSchema } from "../schemas/validator";
import { SupabaseStorage } from "../storage/supabase_storage";
import { ActionFunction } from "../types/action-function";
import { getAuthUser } from "./common-action";
import { handleError } from "./helper";
import db from "@/utils/db/client";

export const createPropertyAction: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  try {
    const user = await getAuthUser();
    const file = data.get("image") as File;
    const raw = Object.fromEntries(data);
    const validatedFields = validateWithZodSchema(PropertySchema, raw);
    const validatedFile = validateWithZodSchema(ImageSchema, { image: file });
    const fullPath = await SupabaseStorage.uploadImage(validatedFile.image, { prefix: 'property-' });
    console.log("validatedFields:", validatedFields);
    console.log("fullPath:", fullPath);
    console.log("user.id:", user.id);

    await db.property.create({
      data: { ...validatedFields, image: fullPath, profileId: user.id },
    });

    return { title: "Success", message: "The property has been created" };
  } catch (error) {    
    return handleError({
      error,
      caller: "createPropertyAction",
      title: "Something went wrong while creating property",
    });
  }
};
