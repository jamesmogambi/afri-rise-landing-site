"use client";
import React, { useState } from "react";

type ServiceCardProps = {
  icon: string; // Icon source
  title: string;
  description: string;
  link: string;
  backgroundImage: string; // Background image for hover
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  backgroundImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: isHovered ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for hover effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "bg-black/50 opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Icon */}
      <div
        className={`relative z-10 flex justify-center items-center mb-4 transition-opacity duration-300 ${
          isHovered ? "text-white translate-y-[-10px]" : "opacity-100"
        }`}
      >
        <img
          src={icon}
          alt={`${title} Icon`}
          className="h-12 w-12 transition-opacity duration-300"
        />
      </div>

      {/* Title */}
      <h3
        className={`relative z-10 text-lg font-semibold mb-2 transition-transform duration-300 ${
          isHovered ? "text-white translate-y-[-10px]" : ""
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`relative z-10 text-gray-600 mb-4 transition-opacity duration-300 ${
          isHovered ? "text-white translate-y-[-10px]" : "opacity-100"
        }`}
      >
        {description}
      </p>

      {/* Read More Button */}
      <a
        href={link}
        className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
          isHovered
            ? "bg-white text-purple-600 shadow-lg opacity-100"
            : "opacity-0"
        }`}
      >
        Read More
      </a>
    </div>
  );
};

export default ServiceCard;
