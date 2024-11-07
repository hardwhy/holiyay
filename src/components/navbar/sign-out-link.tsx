"use client";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function SignOutLink() {
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({ description: "You have been signed out" });
  };
  return (
    <SignOutButton>
      <button className="w-full text-left" onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
