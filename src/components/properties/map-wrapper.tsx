"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const Map = dynamic(
  () =>
    import("@/components/properties/property-map").then((mod) => ({
      default: mod.PropertyMap,
    })),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

interface Props {
  countryCode: string;
}

export function MapClientWrapper({ countryCode }: Props) {
  return <Map countryCode={countryCode} />;
}
