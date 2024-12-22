"use client";
import { homePage } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";
import useScreenHeight from "@/hooks/useScreenHeight";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const HomeCaurosel = () => {
  const slides = homePage.carousel;
  const [currentIndex, setCurrentIndex] = useState(0);

  const { height } = useScreenHeight();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("port height: " + height);

  return (
    <div className="relative w-full h-2/3-screen z-10  lg:h-screen overflow-hidden ">
      {/* Slides */}

      <div
        className="flex transition-transform duration-500"
        // style={{
        //   transform: `translateX(-${currentIndex * 100}%)`,
        // }}
      >
        <div
          //   key={slide.id}
          className={`min-w-full relative  h-screen  text-2xl font-bold `}
        >
          {/* {slide.title} */}
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover "
            quality={100}
          />
        </div>
      </div>

      <div className="absolute inset-0 flex bg-black/50 items-center justify-center text-white z-10">
        <div className="mx-4 ld:mx-0 w-full lg:max-w-7xl border-white  flex justify-between items-center">
          <div className="">
            <h4 className="text-xl mb-4 font-semibold">
              {slides[currentIndex].title}
            </h4>

            <p className="md:border-l-8  mb-9 text-4xl lg:text-5xl uppercase border-primary   md:pl-6 text-white font-medium lg:max-w-4xl">
              {slides[currentIndex].subTitle}
            </p>

            <Link
              href={slides[currentIndex].path}
              className="rounded-l-full rounded-r-full w-1/2 md:w-[180px] flex flex-row items-center gap-5 p-4 bg-white hover:bg-primary   group"
            >
              <div className="uppercase text-black font-medium text-base group-hover:text-white">
                Apply Now
              </div>

              <CircleArrowRight className="text-primary group-hover:text-white" />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div
              onClick={handleNext}
              className="bg-white flex cursor-pointer text-gray-2  hover:bg-primary hover:text-white rounded-full p-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left rotate-90 "
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
            <div
              onClick={handlePrev}
              className="bg-white flex cursor-pointer text-gray-2  hover:bg-primary hover:text-white rounded-full p-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left -rotate-90 "
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCaurosel;
