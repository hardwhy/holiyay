import LoadingCards from "@/components/card/loading-cards";
import CategoriesList from "@/components/home/categories-list";
import PropertiesContainer from "@/components/home/properties-container";
import { GetListRequest } from "@/utils/types/request/get-list-request";
import React, { Suspense } from "react";

type HomePageProps = { searchParams: GetListRequest };

async function HomePage({ searchParams }: HomePageProps) {
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
