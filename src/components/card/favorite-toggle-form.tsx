"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FormContainer from "../form/form-container";
import { CardSubmitButton } from "../form/button";
import { toggleFavorite } from "@/utils/actions/favorite-actions";
type Props = {
  favoriteId?: string;
  propertyId: string;
};
function FavoriteToggleForm(props: Props) {
  const pathname = usePathname();
  const { favoriteId } = props;
  const toggleAction = toggleFavorite.bind(null, { ...props, pathname });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
