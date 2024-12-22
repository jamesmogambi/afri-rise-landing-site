import { cn } from "@/lib/utils";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Prop {
  className?: string;
  name: string;
  path?: string;
}
const LinkButton = ({ className, name, path = "" }: Prop) => {
  return (
    <Link
      href={path}
      className={cn(
        "rounded-full flex text-gray-2 flex-row items-center  gap-3 group px-5 hover:bg-primary  hover:text-white  py-3 border w-fit",
        className
      )}
    >
      <div className="font-medium text-lg  ">{name}</div>

      <CircleArrowRight className="text-blue-title group-hover:text-white" />
    </Link>
  );
};

export default LinkButton;
