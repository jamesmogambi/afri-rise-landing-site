"use client";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Prop {
  highlight: {
    id: number;
    title: string;
    description: string;
    image: string;
    path: string;
  };
  className?: string;
}
const HighlightCard = ({ highlight, className }: Prop) => {
  const { title, description, image, path } = highlight;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${cn(className)} py-8 lg:py-14 pl-12 px-5 shadow-xl group `}
      // style={{
      //   boxShadow: "0 0px 6px rgba(0, 0, 0, 0.1)", // Bottom shadow only
      // }}
    >
      <div>
        <div className="relative  border-green-700 h-[82px] w-[82px]">
          {/* Bottom Layer */}
          <div className="absolute inset-0  z-0">
            <Image
              src={
                isHovered
                  ? "/images/circle_active.svg"
                  : "/images/circle_inactive.svg"
              }
              alt=""
              fill
            />
          </div>

          {/* Top Layer */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Image src={image} height={46} width={48} alt="" priority />
          </div>
        </div>
      </div>

      <h3 className="text-[24px] font-semibold font-sans3 mt-[25px] mb-[20px] ">
        {title}
      </h3>
      <p className="mb-[30px]">{description}</p>

      <Link
        href={path}
        className="bg-[#bfbfbf] w-fit  group-hover:bg-primary hover:text-white flex gap-3 items-center  text-white p-3 rounded-full "
      >
        <Plus className="" />

        <span className="text-lg font-medium hidden group-hover:block">
          Read More
        </span>
      </Link>

      {/* {id === 2 && <div className="h-20 border"></div>} */}
    </div>
  );
};

export default HighlightCard;
