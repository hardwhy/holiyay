import React from "react";
import { deleteReview, getReviewsByUser } from "@/utils/actions/review-actions";
import { Title } from "@/components/properties";
import { ReviewCard } from "@/components/reviews";
import { IconButton } from "@/components/form/button";
import FormContainer from "@/components/form/form-container";
import EmptyList from "@/components/home/empty-list";

export const dynamic = "force-dynamic";

async function ReviewPage() {
  const reviews = await getReviewsByUser();
  if (!Array.isArray(reviews) || !reviews.length) return <EmptyList />;
  return (
    <>
      <Title text="Your reviews" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}>
            <DeleteReview reviewId={review.id} />
          </ReviewCard>
        ))}
      </div>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const action = deleteReview.bind(null, reviewId);
  return (
    <FormContainer action={action}>
      <IconButton type="delete" />
    </FormContainer>
  );
};

export default ReviewPage;
