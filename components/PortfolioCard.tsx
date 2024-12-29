"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import this if using Next.js routing

interface PortfolioCardProps {
  number: string;
  category: string;
  title: string;
  imageSrc: string;
  link: string; // Add a `link` prop for navigation
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  number,
  category,
  title,
  imageSrc,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[300px] w-full bg-cover bg-center transition-transform duration-300"
      style={{ backgroundImage: `url(${imageSrc})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isHovered ? "bg-black/50" : "bg-black/30"
        }`}
      ></div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end items-start p-4 text-white transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-90"
        }`}
      >
        <p className="text-5xl font-bold">{number}</p>
        <p className="text-sm font-light">{category}</p>
        <h3
          className={`mt-2 text-xl font-semibold ${
            isHovered ? "block" : "hidden"
          }`}
        >
          {title}
        </h3>
        {isHovered && (
          <Link
            href={link} // Navigation link
            passHref
          >
            <button className="mt-2 px-4 py-2 bg-blue-700 text-sm font-medium rounded hover:bg-blue-800">
              + Read More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
