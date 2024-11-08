"use client";

import { useToast } from "@/hooks/use-toast";
import { ActionFunction } from "@/utils/types/action-function";
import { ActionResult } from "@/utils/types/action-result";
import React, { ReactNode, useActionState, useEffect } from "react";

const initialState: ActionResult = {
  title: "",
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: ActionFunction;
  children: ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message, title: state.title });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
