import { Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  profile: Profile;
};

export function UserInfo({ profile: { profileImage, firstName } }: Props) {  

  return (
    <article className="grid grid-cols-[auto,1fr] gap-4 mt-4">
      <Image
        src={profileImage}
        alt={firstName}
        height={50}
        width={50}
        className="rounded w-12 h-12 object-cover"
      />
      <div>
        <p>
          Hosted by <span className="font-bold">{firstName}</span>
        </p>
        <p className="text-muted-foreground font-light">
          Superhost &middot; 2 years hosting
        </p>
      </div>
    </article>
  );
}
