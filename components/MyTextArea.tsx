import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Rows } from "lucide-react";
import { Label } from "@radix-ui/react-label";

interface Prop {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  label?: string;
  rows?: number;
}
const MyTextArea = ({
  className = "",
  label,
  rows = 6,
  onChange,
  placeholder = "Message",
  value,
}: Prop) => {
  return (
    <div>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}

      <Textarea
        className={cn(
          "bg-[#3b3b3b] w-full text-white text-lg border-none rounded-lg",
          className
        )}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
      />
    </div>
  );
};

export default MyTextArea;
