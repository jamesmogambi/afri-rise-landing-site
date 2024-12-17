"use client";
import React from "react";
import TextInput from "../TextInput";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SubscriptionForm = ({ className }: { className?: string }) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    // TODO: Send the form data to your server
  };
  return (
    <form className={`mt-9 ${cn(className)} w-full`} onSubmit={onSubmit}>
      <p className="text-gray-2">Sign up for our latest updates!</p>

      <div className="mt-10 space-y-4">
        <TextInput placeholder="Email Address" />

        <Button
          variant={"outline"}
          size={"lg"}
          className="bg-primary max-w-sm w-full rounded-md text-white text-lg py-3 hover:bg-transparent border-none  hover:border-solid hover:border-primary hover:text-primary"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
