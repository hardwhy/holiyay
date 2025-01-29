import FavoriteToggleButton from "@/components/card/favorite-toggle-button";
import Breadcrumbs from "@/components/properties/breadcrumbs";
import ShareButton from "@/components/properties/share-button";
import { getPropertyById } from "@/utils/actions/property-actions";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  id: string;
};

async function PropertyDetailPage({ params: { id } }: { params: Props }) {
  const property = await getPropertyById({ id });
  if (!property) redirect("/");
  const { bathrooms, bedrooms, beds, guests, name, tagline } = property;
  const details = { bathrooms, bedrooms, beds, guests };

  return (
    <section>
      <Breadcrumbs name={name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">{tagline}</h1>

        <div className="flex items-center gap-x-4">
          <ShareButton data={property} />
          <FavoriteToggleButton propertyId={id} />
        </div>
      </header>
    </section>
  );
}

export default PropertyDetailPage;
