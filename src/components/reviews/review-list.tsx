import { getReviews } from "@/utils/actions/review-actions";
import { Title } from "../properties";
import { ReviewCard } from "./review-card";

type Props = {
  propertyId: string;
};

export const ReviewsList = async ({ propertyId }: Props) => {
  const reviews = await getReviews(propertyId);
  if (!Array.isArray(reviews) || !reviews.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <Title text="Reviews" />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
