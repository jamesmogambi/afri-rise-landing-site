import React from "react";
import Image from "next/image";

interface CoverImageProps {
  imageSrc: string;
  altText: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute"
      />
    </div>
  );
};

export default CoverImage;
