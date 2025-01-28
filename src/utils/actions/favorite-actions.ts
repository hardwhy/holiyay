"use server";
import { ActionFunction } from "../types/action-function";
import { GetByIdRequest } from "../types/request/get-by-id-request";
import { ToggleFavoriteRequest } from "../types/request/toggle-favorite-request";
import { getAuthUser } from "./common-action";
import db from "@/utils/db/client";
import { handleError } from "./helper";
import { revalidatePath } from "next/cache";
import { Property } from "@prisma/client";

export const toggleFavorite: ActionFunction = async ({
  propertyId,
  favoriteId,
  pathname,
}: ToggleFavoriteRequest) => {
  const user = await getAuthUser();
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id,
        },
      });
    }

    revalidatePath(pathname);

    return {
      message: `${!favoriteId ? "Added to" : "Removed from"} favorite`,
      title: "Success",
    };
  } catch (error) {
    return handleError({
      error,
      caller: "toggleFavoriteActions",
      title: "Error adding to favorite",
    });
  }
};

export const fetchFavoriteIdByPropertyId = async ({
  id: propertyId,
}: GetByIdRequest): Promise<string | undefined> => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      propertyId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return favorite?.id;
};

export const fetchFavorites = async (): Promise<Property[]> => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      property: {
        select: {
          id: true,
          name: true,
          tagline: true,
          country: true,
          price: true,
          image: true,
          currency: true,
        },
      },
    },
  });

  return favorites.map((fav) => (fav.property as Property));
};
