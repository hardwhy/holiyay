"use client";
import { useState } from "react";
import { RatingInput } from "../form";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import FormContainer from "../form/form-container";
import TextAreaInput from "../form/text-area-input";
import { submitReview } from "@/utils/actions/review-actions";

type Props = { propertyId: string };
export const SubmitReview = ({ propertyId }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-8">
      <Button onClick={() => setVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {visible && (
        <Card className="p-8 mt-8">
          <FormContainer action={submitReview}>
            <input type="hidden" name="propertyId" value={propertyId}></input>
            <RatingInput name="rating" label="Rating" />
            <TextAreaInput
              name="comment"
              label="Your thoughts on this property"
              placeholder="A great place to go!"
            />
            <Button type="submit" className="mt-4">Submit</Button>
          </FormContainer>
        </Card>
      )}
    </div>
  );
};
