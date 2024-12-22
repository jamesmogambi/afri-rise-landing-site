"use client";
import { homeLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const MobileNav = ({ className }: { className?: string }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [width, setWidth] = useState(window.innerWidth);

  const pathName = usePathname();

  // Update the width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const router = useRouter();

  const onNavigate = (path: string) => {
    setShowDropdown(false);

    router.push(path);
  };
  return (
    <div className={`${cn(className)} `}>
      <DropdownMenu
        // open={showDropdown}
        onOpenChange={(val) => setShowDropdown(val)}
      >
        <DropdownMenuTrigger>
          {showDropdown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          //   onCloseAutoFocus={(e) => e.preventDefault()}
          //   onInteractOutside={(e: any) => e.preventDefault()}
          style={{ width: `${width}px` }}
          className=" "
        >
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}

          {homeLinks.map((link) => (
            <DropdownMenuItem
              className={`${
                pathName === link.href && "text-primary"
              } font-bold mb-2 text-lg`}
              key={link.name}
              onClick={() => onNavigate(link.href)}
            >
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
const Header = () => {
  return (
    <div className="flex px-5 items-center justify-between  lg:justify-around lg:shadow-xl ">
      <Image
        src={"/images/company-logo.png"}
        height={90}
        width={170}
        alt="company-logo"
        priority
        quality={99}
      />
      <div className=" hidden lg:flex  mr-[250px] flex-row">
        {homeLinks.map((link) => (
          <Link
            className="text-[20px] font-sans py-[30px] px-[13px] "
            key={link.href}
            href={link.href}
          >
            <span className="font-extralight">{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="block lg:hidden cursor-pointer"></div>

      <MobileNav className="flex lg:hidden" />
    </div>
  );
};

export default Header;
