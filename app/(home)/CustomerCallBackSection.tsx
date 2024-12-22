import CallBackForm from "@/components/CallBackForm";
import Image from "next/image";
import React from "react";

const CustomerCallBackSection = () => {
  return (
    <div className="pt-[110px] pb-[120px]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row ">
        <div className="basis-full md:basis-1/2  border-red-600">
          <CallBackForm />
        </div>

        <div className="md:flex-1 md:flex relative h-[600px] w-full md:h-auto md:w-auto  ">
          <Image
            alt=""
            src={"/images/Afri-Customer-Service.jpg"}
            priority
            fill
            className="object-cover "
            // height={700}
            // width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerCallBackSection;
