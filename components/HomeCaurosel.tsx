import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homePage } from "@/constants/data";
import Image from "next/image";

const HomeCaurosel = () => {
  return (
    <div className=" h-[800px]">
      <Carousel className="flex-1 relative">
        <CarouselContent className="flex-1">
          {homePage.carousel.map((item, index) => (
            <CarouselItem key={index} className="relative flex-1">
              {/* <div>
                <Image
                  src={item.image} // Path to your image
                  alt={item.title}
                  layout="fill" // Makes the image cover the parent container
                  objectFit="cover" // Ensures the image covers the container without distortion
                  priority // Loads the image quickly
                />
              </div> */}
              {/* <Image
                src={item.image} // Path to your image
                alt={item.title}
                layout="fill" // Makes the image cover the parent container
                objectFit="cover" // Ensures the image covers the container without distortion
                priority // Loads the image quickly
              /> */}
              <h2 className="text-3xl">{item.title}</h2>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeCaurosel;
