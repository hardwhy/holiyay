import { ReviewWithProfile } from "@/domain/model";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Rating } from "./rating";
import { Comment } from "./comment";

type Props = {
  review: ReviewWithProfile;
  children?: React.ReactNode;
};

export const ReviewCard = ({ review, children }: Props) => {
  const { rating, comment, profile } = review;
  const { firstName, lastName, profileImage } = profile;
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImage}
            alt={`${firstName} ${lastName}`}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-bold">
              {firstName} {lastName}
            </h3>
            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
};
