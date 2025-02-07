import { getPropertyRating } from "@/utils/actions/property-actions";
import { FaStar } from "react-icons/fa";

type PropertyRatingProps = {
  propertyId: string;
  inPage: boolean;
};

async function PropertyRating({ inPage, propertyId }: PropertyRatingProps) {
  const { count: fromAll, rating } = await getPropertyRating(propertyId);

  if (!fromAll) return;
  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-sm"}`;
  const countText = fromAll > 1 ? "reviews" : "review";
  const countValue = `(${fromAll}) ${inPage ? countText : ""}`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
