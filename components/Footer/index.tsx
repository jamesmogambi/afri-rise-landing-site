import { footer } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-screen border  relative">
      <div className="">
        <div className="hidden lg:inline-block absolute top-0 right-0">
          <Image
            src={"/images/figure2.png"}
            alt="image"
            className=""
            height={189}
            width={310}
          />
        </div>

        <div className="hidden lg:inline-block absolute bottom-0 left-0">
          <Image
            src={"/images/figure1.png"}
            alt="image"
            className=""
            height={189}
            width={310}
          />
        </div>
      </div>

      <div className="h-full w-full pt-[120px] pb-[75px] border border-red-800   bg-transparent">
        <div className="flex flex-col lg:flex-row">
          {/* section 1 */}
          <div className="basis-full pl-[15px]  pr-[45px] md:basis-1/2 lg:basis-1/3 border-r ">
            <Image
              src={"/images/company-logo.png"}
              alt="company-logo"
              height={169}
              width={300}
            />

            <div className="pb-[28px] text-[#444444]">{footer.about}</div>

            <div className="flex flex-row flex-wrap"></div>
          </div>

          {/* section 2 */}

          {/* section-3 */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
