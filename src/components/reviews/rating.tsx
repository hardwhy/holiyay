import React from "react";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
type Props = {
  rating: number;
};

export const Rating = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < rating;
    return (
      <FaStar
        key={index}
        className={cn("w-4 h-4", isFilled ? "text-yellow-500" : "text-gray-300")}
      />
    );
  });
    
  return <div className="flex items-center">{stars}</div>;
};
