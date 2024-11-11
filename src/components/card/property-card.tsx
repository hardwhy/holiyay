import { formatCurrency } from "@/utils/helper/format-currency";
import { Property } from "@/utils/types/property";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropertyRating from "./property-rating";
import FavoriteToggeButton from "./favorite-toggle-button";
import CountryFlagAndCode from "./country-flag-and-name";

type PropertyCardProps = {
  property: Property;
};

function PropertyCard({
  property: { country, id: propertyId, image, name, price, tagline, currency },
}: PropertyCardProps) {
  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          <PropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="text-muted-foreground text-sm mt-1">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">
              {formatCurrency(price, currency)}
            </span>{" "}
            / night
          </p>
          <CountryFlagAndCode countryCode={country} />
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5">
        <FavoriteToggeButton propertyId={propertyId} />
      </div>
    </article>
  );
}

export default PropertyCard;
