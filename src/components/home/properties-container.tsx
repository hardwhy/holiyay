import { GetListRequest } from "@/utils/types/request/get_list_request";
import React from "react";
import EmptyList from "./empty-list";
import { Property } from "@/utils/types/property";
import { getPropertiesAction } from "@/utils/actions/property-actions";
import PropertiesList from "./properties-list";

async function PropertiesContainer(props: GetListRequest) {
  const properties: Property[] = await getPropertiesAction(props);
  if (!properties.length) return <EmptyList btnText="clear search" />;
  return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
