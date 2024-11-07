"use client"

import { ActionFunction } from "@/domain/types/action-function";
import { useToast } from "@/hooks/use-toast";
import React, { ReactNode, useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: ActionFunction;
  children: ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
