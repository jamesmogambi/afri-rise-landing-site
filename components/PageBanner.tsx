import Image from "next/image";
import React from "react";

interface Prop {
  title: string;
  className?: string;
  imgPath?: string;
}
const PageBanner = ({
  title = "",
  className,
  imgPath = "/images/smiling-banner.jpg",
}: Prop) => {
  return (
    <div className="h-[400px] relative ">
      {/* first layer */}
      <div className="absolute h-full w-full z-0 top-0 left-0">
        <Image
          src={imgPath}
          alt={title}
          fill
          className="object-cover grayscale shadow-2xl"
          priority
          quality={98}
        />
      </div>

      {/* second layer */}
      <div className="h-full w-full    absolute z-50 top-0 left-0 bg-black/60">
        <Image
          alt=""
          src={"/images/figure79.png"}
          height={150}
          width={250}
          className="absolute bottom-0 left-5 hidden lg:block"
          priority
        />

        <Image
          alt=""
          src={"/images/figure78.png"}
          height={100}
          width={200}
          className="absolute top-0 right-0 hidden lg:block"
          priority
        />

        <div className="bg-transparent flex border border-red-700 items-center  h-full w-full">
          <div className="lg:max-w-7xl mx-auto pl-4 w-full ">
            <h1 className="text-[42px] text-white font-medium">{title}</h1>
            <div className="mt-6">
              <span className="text-[#ebebeb]  cursor-pointer hover:text-golden ">
                Afririse Prosperity Investment Limited
              </span>
              <span className="text-white"> - </span>
              <span className="text-golden cursor-pointer">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
