import CategoriesList from "@/components/home/categories-list";
import PropertiesContainer from "@/components/home/properties-container";
import { GetListRequest } from "@/utils/types/request/get_list_request";
import React from "react";

type HomePageProps = { searchParams: GetListRequest };

async function HomePage({ searchParams }: HomePageProps) {
  console.log("search params", typeof searchParams, searchParams);

  return (
    <section>
      <CategoriesList {...searchParams} />
      <PropertiesContainer {...searchParams} />
    </section>
  );
}

export default HomePage;
