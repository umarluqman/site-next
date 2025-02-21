import React from "react";
import NextImage from "next/image";
import { Bleed } from "components/Bleed";

type ImageProps = {
  src: string;
  alt: string;
};

export const Image: any = ({ src, alt }: ImageProps) => {
  return (
    <Bleed display="flex" justifyContent="center" p={8}>
      <NextImage src={src} alt={alt} width={800} height={600} />
    </Bleed>
  );
};
