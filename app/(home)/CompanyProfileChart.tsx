import LinkButton from "@/components/LinkButton";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const CompanyProfileChart = () => {
  return (
    <div className="pt-[110px] px-4 md:px-0 h-fit pb-[120px] overflow-hidden relative max-w-7xl mx-auto">
      <div className="md:flex hidden justify-between absolute -top-5   w-full">
        <Image alt="" src={"/images/figure15.png"} height={500} width={200} />
        <Image alt="" src={"/images/figure14.png"} height={500} width={200} />
      </div>

      <div className="flex flex-col  md:flex-row ">
        <div className="basis-full md:basis-1/2 ">
          <SectionTitle name="Company Profit Chart" />

          <h2 className="mb-[15px] text-[36px] leading-tight  lg:w-2/3">
            Afri-Rise Equity Offers the Best Business Solutions
          </h2>

          <p className="pr-6 text-lg mb-[30px] ">
            Once you know how much startup funding you’ll need, it’s time to
            figure out how you’ll get it.
          </p>

          <LinkButton
            name="Get Survey Today"
            className="shadow-lg border-none mb-8 "
          />
        </div>
        <Image
          src={"/images/figure13.png"}
          alt=""
          height={283}
          width={586}
          priority
          quality={99}
        />
      </div>
    </div>
  );
};

export default CompanyProfileChart;
