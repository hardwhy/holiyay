"use client";

import { ActionFunction } from "@/utils/types/action-function";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../ui/button";
import FormContainer from "./form-container";
import { ImageInput } from "./image-input";
import { SubmitButton } from "./button";

type ImageInputContainerProps = {
  image?: string;
  name?: string;
  text: string;
  action: ActionFunction;
  children?: ReactNode;
};

export function ImageInputContainer({
  image,
  name = "",
  text,
  action,
  children,
}: ImageInputContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => {
          setIsOpen((v) => !v);
        }}
      >
        {text}
      </Button>
      {isOpen && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {children}

            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
