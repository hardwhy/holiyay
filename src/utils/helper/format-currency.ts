import { Currency } from "../types/currency";

export const formatCurrency = (amount: number | null, currency?: Currency | string) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
