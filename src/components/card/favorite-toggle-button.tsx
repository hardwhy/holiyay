import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/button";

type FavoriteToggeButtonProps = { propertyId: string };

async function FavoriteToggleButton({ propertyId }: FavoriteToggeButtonProps) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
