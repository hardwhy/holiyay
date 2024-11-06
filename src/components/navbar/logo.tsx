import React from "react";
import { Button } from "../ui/button";
import { LuTent } from "react-icons/lu";
import Link from "next/link";

function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href={"/"}>
        <LuTent className="w-6 h-6"></LuTent>
      </Link>
    </Button>
  );
}

export default Logo;
