import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutVideo = () => {
  return (
    <div className="md:h-screen h-[600px]  relative">
      {/* <!-- Bottom Layer --> */}
      <div className="absolute inset-0 hover:bg-black/50   z-0 overflow-hidden">
        <div className="h-full w-full ">
          <Image
            src={"/images/Afri-Deal-Breaker.jpg"}
            fill
            alt=""
            className="object-cover filter grayscale"
            priority
            quality={100}
          />
        </div>
      </div>
      {/* <!-- Top Layer --> */}
      <div className="absolute inset-0  flex justify-center items-center   bg-black/50  z-10  ">
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-[22px] text-center leading-tight max-w-2xl text-[36px] font-semibold">
            We Provide High-Quality Finance & Business Solutions
          </h3>
          <Button className="flex hover:bg-orange-600/90 py-8 rounded-full items-center h-8  text-lg bg-orange-600 text-white flex-row gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clipRule="evenodd"
              />
            </svg>

            <div>Afri-Rise Equity</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
