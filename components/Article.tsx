import React from "react";
import Link from "next/link";

type ArticleCardProps = {
  imageSrc: string;
  date: string;
  category: string;
  readingTime: string;
  title: string;
  description: string;
  readMoreLink: string; 
  className:string;// New prop for the link
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  date,
  category,
  readingTime,
  title,
  description,
  readMoreLink,
  className
}) => {
  return (
    <div
    className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
  >
      {/* Image Section */}
      <div className="h-90 bg-gray-200">
        <img
          src={imageSrc}
          alt="Article Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <div className="flex items-center space-x-1">
            <svg
              className="h-4 w-4 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M9 17H8a2 2 0 01-2-2v-5.5A2.5 2.5 0 018.5 7H9m5 10h1a2 2 0 002-2v-5.5A2.5 2.5 0 0015.5 7H15"
              ></path>
            </svg>
            <span>{date}</span>
          </div>
          <span>·</span>
          <span>{category}</span>
          <span>·</span>
          <span>{readingTime}</span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl font-bold text-gray-800 hover:underline">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600">{description}</p>

        {/* Read More Button with Link */}
        <Link href={readMoreLink}>
        <button className="mt-4 inline-flex items-center px-6 py-3 text-black border border-gray-300 rounded-full shadow transition duration-300 hover:bg-[#120E43] hover:text-white">
          Read more
          <span className="ml-2 flex items-center justify-center w-6 h-6 rounded-full border border-current text-[#120E43] hover:text-white transition duration-300">
            →
          </span>
        </button>

        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;

