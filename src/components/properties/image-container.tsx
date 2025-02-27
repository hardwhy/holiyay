import Image from "next/image";
import React from "react";

type Props = {
  mainImage: string;
  name: string;
};

export function ImageContainer({ mainImage, name }: Props) {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        className="object-cover rounded"
        priority
      />
    </section>
  );
}