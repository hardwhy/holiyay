"use server";

import { Property } from "@prisma/client";
import { ImageSchema } from "../schemas/image-schema";
import { PropertySchema } from "../schemas/property-schema";
import { validateWithZodSchema } from "../schemas/validator";
import { SupabaseStorage } from "../storage/supabase_storage";
import { ActionFunction } from "../types/action-function";
import { Property as PropertyCard } from "../types/property";
import { GetByIdRequest } from "../types/request/get-by-id-request";
import { GetListRequest } from "../types/request/get-list-request";
import { getAuthUser } from "./common-action";
import { handleError } from "./helper";
import db from "@/utils/db/client";

export const createProperty: ActionFunction = async (
  prevState: any,
  data: FormData
) => {
  try {
    const user = await getAuthUser();
    const file = data.get("image") as File;
    const raw = Object.fromEntries(data);
    const validatedFields = validateWithZodSchema(PropertySchema, raw);
    const validatedFile = validateWithZodSchema(ImageSchema, { image: file });
    const fullPath = await SupabaseStorage.uploadImage(validatedFile.image, {
      prefix: "property-",
    });

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

export const getProperties = async ({
  search = "",
  category,
}: GetListRequest): Promise<PropertyCard[]> => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { tagline: { contains: search, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      country: true,
      price: true,
      image: true,
      currency: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return properties;
};

export const getPropertyById = async ({
  id,
}: GetByIdRequest): Promise<Property | null> => {
  console.log("id", id);

  const properties = await db.property.findUnique({
    where: {
      id,
    },
  });

  return properties as Property | null;
};
