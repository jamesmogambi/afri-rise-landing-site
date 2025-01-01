import TitleWidget from "@/components/Footer/TitleWidget";
import { homePage } from "@/constants/data";
import Image from "next/image";
import React from "react";

const AboutServices = () => {
  return (
    <div className="relative    w-full h-screen mt-10 ">
      {/* <!-- Bottom Layer --> */}
      <div className="absolute inset-0  z-0 overflow-hidden">
        <div className=" h-[250px] w-[250px] hidden md:block absolute bottom-0 left-4">
          <div className="pattern-dots  transform -skew-x-12 rotate-12 "></div>
        </div>
      </div>

      {/* <!-- Top Layer --> */}
      <div className="absolute inset-0 px-5  z-10 flex items-center justify-center max-w-7xl   mx-auto">
        {/* <p className="text-white text-2xl">Top Layer</p> */}

        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          {/* section 1 */}

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center gap-4 mb-[12px]">
              <h4 className="text-[#1d1668] font-semibold text-[20px]">
                About Afririse Prospertity Investment Limited
              </h4>
              <TitleWidget />
            </div>
            <h2 className="mb-[10px] text-[36px] leading-tight  lg:w-2/3">
              {homePage.about.title}
            </h2>

            <div className="space-y-9 mt-8 ">
              {homePage.about.services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-row items-center gap-8"
                >
                  <Image
                    src={service.image}
                    alt="service-icon"
                    height={56}
                    width={50}
                    priority
                  />
                  <h3 className="text-[24px] font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* section 2 */}
          <div className="w-full md:w-1/2">
            <Image
              src={homePage.about.cover}
              alt="banner-image"
              //   fill
              height={500}
              width={500}
              priority
              quality={98}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
