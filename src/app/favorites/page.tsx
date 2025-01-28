import EmptyList from "@/components/home/empty-list";
import PropertiesList from "@/components/home/properties-list";
import { fetchFavorites } from "@/utils/actions/favorite-actions";
import React from "react";

async function FavoritesPage() {
  const favorites = await fetchFavorites();
  if (!favorites.length) return <EmptyList />;
  return <PropertiesList properties={favorites}/>;
}

export default FavoritesPage;
