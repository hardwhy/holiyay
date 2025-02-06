import { ActionFunction } from "../types/action-function";

export const submitReview: ActionFunction = async (formData: FormData) => {
  return {
    success: true,
    message: "Review submitted successfully",
    title: "Success",
  };
};
