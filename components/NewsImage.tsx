import React from "react";
import Image from "next/image";

interface NewsImageProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
  category: string;
}

const NewsImage: React.FC<NewsImageProps> = ({ imageSrc, altText, title, date, category }) => {
  return (
    <div className="relative w-full max-w-6x1 mx-auto bg-white rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-90 h-80">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="text-sm text-gray-500 flex items-center mb-4">
          <span className="mr-2">📅</span>
          <span>{date}</span>
          <span className="mx-2">|</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsImage;