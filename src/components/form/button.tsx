"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuPen, LuTrash2 } from "react-icons/lu";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: ButtonSize;
};

type ButtonSize = "default" | "lg" | "sm";

export function SubmitButton({
  className = "",
  text = "submit",
  size = "default",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size={"icon"}
        variant={"outline"}
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite?: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"outline"}
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

type ActionType = "edit" | "delete";

export const IconButton = ({ type }: { type: ActionType }) => {
  const { pending } = useFormStatus();
  const Icon = (() => {
    switch (type) {
      case "edit":
        return <LuPen />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = type;
        throw new Error(`Invalid action type: ${never}`);
    }
  })();
  return (
    <Button
      type={"submit"}
      variant={"link"}
      size={"icon"}
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className="animate-spin" /> : Icon}
    </Button>
  );
};
