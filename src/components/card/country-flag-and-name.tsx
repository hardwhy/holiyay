import { findCountryByCode } from "@/utils/types/country";
import React from "react";

type CountryFlagAndCodeProps = {
  countryCode: string;
};

function CountryFlagAndCode({ countryCode }: CountryFlagAndCodeProps) {
  const validCountry = findCountryByCode(countryCode)!;

  const countryName = validCountry.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm max-w-[100px]">
      {validCountry.flag}{" "}
      <span className="truncate">{countryName}</span>
    </span>
  );
}

export default CountryFlagAndCode;
