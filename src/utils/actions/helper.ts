import { ActionResult } from "../types/action-result";

export const handleError = ({
  error,
  caller,
  title,
}: {
  error: unknown;
  caller: string;
  title: string;
}): ActionResult => {
  console.log("error from", caller, ": ", error);

  let message: string = "";
  if (error instanceof Error) message = error.message;
  return { title, message };
};
