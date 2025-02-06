import React from "react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

type Props = {
  name: string;
  label?: string;
};

export const RatingInput = ({ name, label }: Props) => {
  const ratingNumber = Array.from({ length: 5 }, (_, i) =>
    (i + 1).toString()
  ).reverse();
  return (
    <div className="mb-2 max-w-xs">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={ratingNumber[0]} name={name} required>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ratingNumber.map((rating) => (
            <SelectItem key={rating} value={rating}>
              {rating}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
