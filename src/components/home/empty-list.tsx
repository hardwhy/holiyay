import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type EmptyListProps = {
  heading?: string;
  message?: string;
  btnText?: string;
};

function EmptyList({
  heading = "Nothing to see here!",
  message = "Don't worry, you still can look around!",
  btnText = "Go Home",
}: EmptyListProps) {
  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 capitalize" size={"lg"}>
        <Link href={"/"}>{btnText}</Link>
      </Button>
    </div>
  );
}

export default EmptyList;
