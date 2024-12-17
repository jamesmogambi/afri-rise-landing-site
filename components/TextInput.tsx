import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Prop {
  label?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
}
const TextInput = ({
  label,
  placeholder = "",
  value,
  onChange,
  className = "",
  ...rest
}: Prop) => {
  return (
    <div
      className={` grid w-full max-w-sm items-center gap-1.5 ${cn(className)} `}
    >
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}

      <Input
        id={""}
        placeholder={placeholder}
        {...rest}
        className="bg-[#3b3b3b]  outline-none  text-white text-lg h-14"
      />
    </div>
  );
};

export default TextInput;
