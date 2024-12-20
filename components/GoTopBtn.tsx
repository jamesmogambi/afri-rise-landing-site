"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUp } from "lucide-react";

const GoTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-sm justify-center p-3 hover:bg-white hover:text-primary  fixed bottom-5 right-7 z-50  text-white rounded-full  shadow-lg flex flex-col items-center "
        >
          <ChevronsUp className="h-4 w-5" />
          <span className="text-sm">TOP</span>
        </button>
      )}
    </>
  );
};

export default GoTopBtn;
