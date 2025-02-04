type Props = {
  property: Property;
};

import { formatQuantity } from "@/utils/helper/format";
import { Property } from "@prisma/client";
import React from "react";

export function PropertyFeatures({
  property: { bedrooms, beds, guests, bathrooms },
}: Props) {
  return (
    <p className="text-md font-light">
      <span>{formatQuantity(bedrooms, "bedrooms")} &middot; </span>
      <span>{formatQuantity(beds, "beds")} &middot; </span>
      <span>{formatQuantity(guests, "guests")} &middot; </span>
      <span>{formatQuantity(bathrooms, "bathrooms")} </span>
    </p>
  );
}