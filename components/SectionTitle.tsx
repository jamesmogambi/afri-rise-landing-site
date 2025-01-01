import React from "react";
import TitleWidget from "./Footer/TitleWidget";
import { cn } from "@/lib/utils";

interface Prop {
  className?: string;
  name: string;
}
const SectionTitle = ({ className = "", name = "" }: Prop) => {
  return (
    <div
      className={cn("flex flex-row items-center gap-4 mb-[12px]", className)}
    >
      <h4 className="text-[#1d1668] font-semibold text-[20px]">{name}</h4>
      <TitleWidget />
    </div>
  );
};

export default SectionTitle;
