"use client";
import React from "react";
import TitleWidget from "./Footer/TitleWidget";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import MyTextArea from "./MyTextArea";
import { Button } from "./ui/button";

const services = [
  {
    label: "Fund Management",
    value: "Fund Management",
  },
  {
    label: "Project Management",
    value: "Project Management",
  },
  {
    label: "Strategic Palnning",
    value: "Strategic Palnning",
  },
  {
    label: "Investment Advisory",
    value: "Investment Advisory",
  },
];
const CallBackForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="w-full bg-[#1a1a1a] px-[50px]  pt-12  pb-16 md:max-w-[550px]">
      <form
        className="border p-2 rounded-md border-blue-title"
        onSubmit={handleSubmit}
      >
        <h3 className="text-white text-[30px] font-semibold pb-[25px] mb-[30px]">
          Request a Call Back
        </h3>
        <TitleWidget />

        <div className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-2">
            <TextInput
              className="basis-full  md:basis-1/2"
              placeholder="Name"
            />
            <TextInput
              className="basis-full md:basis-1/2"
              placeholder="Last Name"
            />
          </div>
          <TextInput className="w-full" placeholder="Email" />
          <SelectInput options={services} />
          <MyTextArea />
        </div>

        <Button className="text-white mb-5  mt-8 bg-primary rounded-3xl p-6 py-8 font-semibold text-lg hover:bg-white hover:text-primary">
          Submit Now
        </Button>
      </form>
    </div>
  );
};

export default CallBackForm;
