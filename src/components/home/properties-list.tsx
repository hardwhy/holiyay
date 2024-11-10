import { Property } from "@/utils/types/property";
import React from "react";
import PropertyCard from "../card/property-card";

function PropertiesList({ properties }: { properties: Property[] }) {
    return <section className="mt-4 gap-8 sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((p)=> <PropertyCard key={p.id} property={p}/>)}
  </section>;
}

export default PropertiesList;
