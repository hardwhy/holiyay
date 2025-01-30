import LoadingCards from "@/components/card/loading-cards";
import CategoriesList from "@/components/home/categories-list";
import PropertiesContainer from "@/components/home/properties-container";
import { GetListRequest } from "@/utils/types/request/get-list-request";
import React, { Suspense } from "react";

type HomePageProps = { searchParams: any };

async function HomePage({ searchParams }: HomePageProps) {
  const parsedParams: GetListRequest = await searchParams;
  return (
    <section>
      <CategoriesList {...parsedParams} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer {...parsedParams} />
      </Suspense>
    </section>
  );
}

export default HomePage;
