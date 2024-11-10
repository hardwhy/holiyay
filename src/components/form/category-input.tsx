import React from "react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { categories } from "@/utils/types/category";
import { SelectValue } from "@radix-ui/react-select";

function CatagoryInput({ defaultValue }: { defaultValue?: string }) {
  const name = "category";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Categories
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c.label} value={c.label}>
                <span className="flex items-center gap-2">
                  <c.icon /> {c.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}

export default CatagoryInput;
