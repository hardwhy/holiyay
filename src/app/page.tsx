import LoadingCards from "@/components/card/loading-cards";
import CategoriesList from "@/components/home/categories-list";
import PropertiesContainer from "@/components/home/properties-container";
import { GetListRequest } from "@/utils/types/request/get_list_request";
import React, { Suspense } from "react";

type HomePageProps = { searchParams: GetListRequest };

async function HomePage({ searchParams }: HomePageProps) {
  console.log("search params", typeof searchParams, searchParams);

  return (
    <section>
      <CategoriesList {...searchParams} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer {...searchParams} />
      </Suspense>
    </section>
  );
}

export default HomePage;
