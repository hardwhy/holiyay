import { FaStar } from "react-icons/fa";

// todo: change it with real data
const rating = 4.9;
const fromAll = 100;

type PropertyRatingProps = {
  propertyId: string;
  inPage: boolean;
};

function PropertyRating({ inPage }: PropertyRatingProps) {
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
