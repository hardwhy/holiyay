"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  comment: string;
};

export const Comment = ({ comment }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const longComment = comment.length > 100;
  const displayedComment =
    !showMore && longComment ? `${comment.slice(0, 100)}...` : comment;
  return (
    <div>
      <p className="text-sm text-gray-500">{displayedComment}</p>
      {longComment && (
        <Button
          className="pl-0 text-muted-foreground"
          variant={"link"}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};
