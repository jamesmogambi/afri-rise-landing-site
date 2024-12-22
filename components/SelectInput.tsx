"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

interface Prop {
  className?: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  placeholder?: string;
}
const SelectInput = ({
  className = "",
  options,
  onChange,
  value,
  label,
  placeholder = "-Select-",
}: Prop) => {
  const [selectedVal, setValue] = useState("");
  return (
    <Select>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}

      <SelectTrigger
        className={cn(
          "w-full h-14 border-0 rounded-lg bg-[#3b3b3b] text-white",
          className
        )}
      >
        <SelectValue className="text-lg " placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#3b3b3b] border-gray-300 text-white">
        {options.map(({ label, value }) => (
          <SelectItem
            className=" text-lg focus:bg-blue-500 focus:text-white"
            key={value}
            value={value}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
