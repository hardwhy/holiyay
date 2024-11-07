import { ActionResult } from "./action-result";

export type ActionFunction = (
  prevState: any,
  data: FormData
) => Promise<ActionResult>;
