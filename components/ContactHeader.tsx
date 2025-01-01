"use client";

import { homeLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactHeader = () => {
  return (
    <div className="w-full">
      {/* Top Layer: Logo and Office Hours */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        {/* Logo Section */}
        <div className="flex items-center justify-center flex-1">
          <Link href="/">
            <Image
              src={"/images/logo001.png"}
              height={100}
              width={200}
              alt="company-logo"
              priority
              quality={99}
            />
          </Link>
        </div>

        {/* Office Hours Section */}
        <div className="flex items-center justify-center flex-1 border-x border-gray-300">
          <span className="text-gray-700 text-lg font-light">
            MON-THUR: 8AM-4PM
          </span>
        </div>

        {/* Empty Space for Alignment */}
        <div className="flex-1"></div>
      </div>

      {/* Bottom Layer: Navigation Links */}
      <div className="w-full border-t border-gray-300">
        <nav className="flex justify-center space-x-6 py-4">
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-light text-gray-700 hover:text-purple-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ContactHeader;
