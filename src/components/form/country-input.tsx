import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formattedCountries } from "@/utils/types/country";

type CountryInputProps = {
  defaultValue?: string;
};

function CountryInput({ defaultValue }: CountryInputProps) {
  const name = "country";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        required
        name={name}
      >
        <SelectTrigger id={name}>
          <SelectValue />
          <SelectContent>
            {formattedCountries.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                <span className="flex items-center gap-2">
                  {c.flag} {c.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}

export default CountryInput;
