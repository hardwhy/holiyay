"use client";
import { amenities, Amenity } from "@/utils/types/amenities";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
type AmanityInputProps = {
  defaultValues?: Amenity[];
};
function AmanityInput({ defaultValues }: AmanityInputProps) {
  const name = "amenities";
  const [selectedAmenities, setSelectedAmenities] = useState(
    defaultValues || amenities
  );
  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) return { ...a, selected: !a.selected };
        return a;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((a) => {
          return (
            <div key={a.name} className="flex items-center space-x-2">
              <Checkbox
                id={a.name}
                checked={a.selected}
                onCheckedChange={() => handleChange(a)}
              />
              <label
                htmlFor={a.name}
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
              >
                {a.name} <a.icon className="w-4 h-4" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AmanityInput;
