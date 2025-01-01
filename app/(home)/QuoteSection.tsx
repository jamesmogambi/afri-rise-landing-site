import { CircleArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="relative flex flex-col pt-8 mb-4">
      <div className="w-full flex gap-5 flex-col justify-center items-center">
        <div className="relative w-40">
          <span className="text-[60px] font-bold">100</span>
          <div className="bg-primary w-fit p-1 absolute -top-5 right-2  rounded-md text-white">
            <Plus />
          </div>
        </div>

        <div className="text-[40px] text-center leading-tight text-[#ff0026] font-bold mt-[9px]">
          Billion Dollars Investments
        </div>

        <div className="border-2 border-primary py-1 px-4 rounded-md mb-[20px">
          <h4 className="uppercase text-blue-title font-semibold">
            &quot;&quot; Quote
          </h4>
        </div>

        <h2 className="text-[36px] text-center font-medium my-10">
          &ldquo;Debt is more cost effective than equity&rdquo;
        </h2>

        <Link
          href=""
          className="shadow-lg group  rounded-full px-4 py-3 flex flex-row items-center gap-6 bg-white hover:bg-primary  hover:text-white "
        >
          <span className="uppercase group-hover:text-white text-lg text-gray-2 font-[600]">
            Apply Today
          </span>
          <CircleArrowRight className="text-primary group-hover:text-white h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default QuoteSection;
