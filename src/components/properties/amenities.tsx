import { Amenity } from "@/utils/types/amenities";
import React from "react";
import { Title } from "./typography";
import { LuFolderCheck } from "react-icons/lu";

type Props = {
  amenities: string;
};

export const Amenities = ({ amenities }: Props) => {
  const amenitiesList: Amenity[] = JSON.parse(amenities);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);
  if (noAmenities) return;
  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity, index) => {
          if (!amenity.selected) return;
          return (
            <div
              key={amenity.name + index}
              className="mb-2 flex items-center gap-x-4"
            >
              <LuFolderCheck className="h-6 w-6 text-primary" />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
