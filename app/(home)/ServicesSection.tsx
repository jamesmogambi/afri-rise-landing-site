import { homePage } from "@/constants/data";
import React from "react";
import HighlightCard from "./HighlightCard";
import AboutServices from "./AboutServices";

const ServicesSection = () => {
  return (
    <div className="min-h-screen w-full lg:-mt-[80px] bg-[#f8f8f8]    ">
      {/* hightlights */}
      <div className="max-w-7xl  mx-auto flex flex-col md:flex-row bg-light-gray">
        {homePage.highlights.map((highlight, k) => (
          <HighlightCard
            className={`${
              k !== 3 && "border-r"
            } bg-white basis-full md:basis-1/3 z-50  `}
            highlight={highlight}
            key={highlight.id}
          />
        ))}
      </div>

      {/* about-services */}
      <AboutServices />
    </div>
  );
};

export default ServicesSection;
