"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
      <ReviewCardSkeleton />
    </section>
  );
}

const ReviewCardSkeleton = () => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[100px] h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-[100px]" />
      </CardContent>
      <div className="absolute top-3 right-3">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </Card>
  );
};
