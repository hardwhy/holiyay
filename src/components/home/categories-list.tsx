import { GetListRequest } from "@/utils/types/request/get_list_request";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { categories } from "@/utils/types/category";
import Link from "next/link";

function CategoriesList({ search, category }: GetListRequest) {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <section>
      <ScrollArea className="py-6">
        <div className="gap-x-4 flex">
          {categories.map((c) => {
            const isActive = c.label === category;
            return (
              <Link key={c.label} href={`/?category=${c.label}${searchTerm}`}>
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  <c.icon className="w-8 h-8" />
                  <p className="capitalize text-sm mt-1">{c.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default CategoriesList;
