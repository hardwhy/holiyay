import { GetListRequest } from "@/utils/types/request/get-list-request";
import React from "react";
import EmptyList from "./empty-list";
import { Property } from "@/utils/types/property";
import { getProperties } from "@/utils/actions/property-actions";
import PropertiesList from "./properties-list";

async function PropertiesContainer(props: GetListRequest) {
  const properties: Property[] = await getProperties(props);
  if (!properties.length) return <EmptyList btnText="clear search" />;
  return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
