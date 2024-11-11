import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
type FavoriteToggeButtonProps = { propertyId: string };
function FavoriteToggleButton({}: FavoriteToggeButtonProps) {
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
