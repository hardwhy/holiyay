import React from "react";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/button";
import FavoriteToggleForm from "./favorite-toggle-form";
import { fetchFavoriteIdByPropertyId } from "@/utils/actions/favorite-actions";

type FavoriteToggeButtonProps = { propertyId: string };

async function FavoriteToggleButton({ propertyId }: FavoriteToggeButtonProps) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteIdByPropertyId({ id: propertyId });
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
}

export default FavoriteToggleButton;
