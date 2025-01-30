"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = { text: string };

export const Title = ({ text }: Props) => {
  return <h3 className="text-lg font-bold mb-2">{text}</h3>;
};

const maxLength = 100;

export const Description = ({ text }: Props) => {
  const [shorten, setShorten] = useState(false);
  const words = text.split(" ");
  const longText = words.length > maxLength;

  const toggleText = () => {
    setShorten((value: boolean) => !value);
  };

  const displayedText =
    shorten && longText ? text : `${words.slice(0, maxLength).join(' ')}...`;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedText}
      </p>
      {longText && (
        <Button variant={"link"} className="pl-0" onClick={toggleText}>
          Show {shorten ? "less" : "more"}
        </Button>
      )}
    </article>
  );
};
