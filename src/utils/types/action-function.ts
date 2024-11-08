import { ActionResult } from "./action-result";

export type ActionFunction = SubmitFormAction | FetchAction;

type FetchAction = () => Promise<ActionResult>;

type SubmitFormAction = (
  prevState: any,
  data: FormData
) => Promise<ActionResult>;
