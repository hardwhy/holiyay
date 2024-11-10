import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "../ui/select";

type PriceInputProps = {
  defaultCurrency?: string;
  defaultValue?: number;
};

const currencies = ["IDR", "USD", "MYR", "AUD"];

function PriceInput({ defaultValue, defaultCurrency }: PriceInputProps) {
  const price = "price";
  const currency = "currency";
  return (
    <div className="mb-2 flex flex-row gap-2">
      <div className="w-[120px]">
        <Label htmlFor={currency} className="capitalize">
          Currency
        </Label>
        <Select
          defaultValue={defaultCurrency || currencies[0]}
          name={currency}
          required
        >
          <SelectTrigger id={currency}>
            <SelectValue />
            <SelectContent>
              {currencies.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
      <div className="flex-auto">
        <Label htmlFor={price} className="capitalize">
          Price
        </Label>
        <Input
          id={price}
          name={price}
          type="number"
          required
          min={0}
          defaultValue={defaultValue || 100}
        />
      </div>
    </div>
  );
}

export default PriceInput;
