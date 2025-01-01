import LinkButton from "@/components/LinkButton";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface Prop {
  item: {
    id: number;
    name: string;
    path: string;
    image: string;
    cover: string;
  };
}
const WhatWeDoItem = ({ item }: Prop) => {
  const { name, image, cover } = item;

  return (
    <div className=" group h-fit lg:h-[198px] relative  basis-full md:basis-1/2 border-purple-500 ">
      {/* <!-- Bottom Layer --> */}
      <div className="absolute inset-0 hover:bg-black/50   z-0 overflow-hidden">
        <div className="h-full w-full hidden group-hover:flex">
          <Image src={cover} fill alt="" className="object-cover" />
        </div>
      </div>

      {/* <!-- Top Layer --> */}
      <div className="absolute inset-0 px-8 py-10 group bg-white  hover:bg-black/50  z-10  ">
        <div className="flex flex-row items-center gap-6">
          <Image
            src={image}
            alt={name}
            className="text-black"
            height={75}
            width={75}
          />
          <div className="space-y-6">
            <h4 className="text-[24px] font-semibold group-hover:text-white ">
              {name}
            </h4>

            <LinkButton
              name="Read More"
              path=""
              className="group-hover:bg-primary text-black group-hover:text-white group-hover:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoItem;
