import TitleWidget from "@/components/Footer/TitleWidget";
import { homePage } from "@/constants/data";
import React from "react";
import WhatWeDoItem from "./WhatWeDoItem";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen h-fit  border-2 border-red-600 w-full relative mb-6">
      {/* <!-- Bottom Layer --> */}
      <div className="absolute inset-0   z-0 overflow-hidden">
        <div className=" h-[250px] w-[250px] hidden md:block absolute bottom-0 left-4">
          <div className="pattern-dots  transform -skew-x-12 rotate-12 "></div>
        </div>
      </div>

      {/* <!-- Top Layer --> */}
      <div className="absolute inset-0 px-5  pt-[110px]  z-10  max-w-7xl   mx-auto">
        <div className="px-4 w-full md:max-w-7xl mx-auto relative">
          <div className="flex flex-row items-center gap-4 mb-[12px]">
            <h4 className="text-[#1d1668] font-semibold text-[20px]">
              What We Do
            </h4>
            <TitleWidget />
          </div>
          <h2 className="mb-[10px] text-[36px] leading-tight  lg:w-2/3">
            Fund African Companies
          </h2>
          {/* services */}
          <div className="">
            <div className="flex w-full flex-col md:flex-row flex-wrap">
              {homePage.whatWeDo.map((service) => (
                <WhatWeDoItem key={service.id} item={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
