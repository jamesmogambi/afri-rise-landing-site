"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  imageSrc: string;
  title: string;
}

const PortSection002: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      imageSrc: "/images/Port-Greenfield.jpg",
      title: "GreenField",
    },
    {
      id: 2,
      imageSrc: "/images/Port-ICT-AFRI.png",
      title: "ICT",
    },
    {
      id: 3,
      imageSrc: "/images/Port-Commercial.jpg",
      title: "Commercial-Infrastructure",
    },
    {
      id: 4,
      imageSrc: "/images/Port-Agriculture.jpg",
      title: "Agriculture",
    },
    {
      id: 5,
      imageSrc: "/images/Port-Insu.jpg",
      title: "Insurance",
    },
    {
      id: 6,
      imageSrc: "/images/Port-Energy.jpg",
      title: "Energy",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Related Portfolio</h2>
        <div className="flex space-x-2">
          <button
            className="bg-white shadow-lg rounded-full p-2 text-gray-800 hover:bg-gray-200"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="bg-white shadow-lg rounded-full p-2 text-gray-800 hover:bg-gray-200"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative flex items-center">
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              width: `${(portfolioItems.length / visibleItems) * 100}%`,
            }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="w-1/3 flex-shrink-0 flex flex-col items-center px-2"
              >
                <div className="relative w-full h-64 group">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-white text-lg font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
                {/* <p className="text-center text-gray-700 mt-2">{item.title}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortSection002;
