import React from "react";
import { Skeleton } from "../ui/skeleton";
import { List } from "@/utils/helper/list-helper";

function LoadingCards() {
  return (
    <div className="mt-4 gap-8 sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4">
      {...List.generate(4, (index) => <SkeletonCard key={index} />)}
    </div>
  );
}

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md" />
      <Skeleton className="h-4 mt-2 w-3/4" />
      <Skeleton className="h-4 mt-2 w-1/2" />
    </div>
  );
};

export default LoadingCards;
