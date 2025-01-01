import { footer } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TitleWidget from "./TitleWidget";
import SubscriptionForm from "./SubscriptionForm";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="h-screen border  relative pb-10">
      <div className="absolute h-full w-full z-0 top-0 left-0">
        <div className="hidden lg:inline-block absolute top-0 right-0">
          <Image
            src={"/images/figure2.png"}
            alt="image"
            className=""
            height={189}
            width={310}
          />
        </div>

        <div className="hidden lg:inline-block absolute bottom-0 left-0">
          <Image
            src={"/images/figure1.png"}
            alt="image"
            className=""
            height={189}
            width={310}
          />
        </div>
      </div>

      <div className="h-full w-full pt-[120px] pb-[75px] px-[10px] lg:px-[50px]  border-red-800   bg-transparent absolute z-50 top-0 left-0">
        <div className="flex flex-col lg:flex-row">
          {/* section 1 */}
          <div className="basis-full pl-[15px]  pr-[45px] md:basis-1/2 lg:basis-1/3 border-r ">
            <Image
              src={"/images/logo001.png"}
              alt="company-logo"
              height={180}
              width={400}
            />

            <div className="pb-[28px] text-[#444444]">{footer.about}</div>

            <div className="flex flex-row flex-wrap gap-3">
              <Link
                href=""
                className="rounded-md group bg-[#efefef] hover:bg-primary cursor-pointer p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  //   fill=""
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook group-hover:fill-white group-hover:stroke-white fill-stone-500 stroke-stone-500 "
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>

              <Link
                href=""
                className="rounded-md group bg-[#efefef] hover:bg-primary cursor-pointer p-3 group-hover:fill-white group-hover:stroke-white fill-stone-500 stroke-stone-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  //   fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter stroke-stone-500 fill-stone-500 group-hover:fill-white group-hover:stroke-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>

              <Link
                href=""
                className="rounded-md group bg-[#efefef] hover:bg-primary cursor-pointer p-3 group-hover:fill-white group-hover:stroke-white fill-stone-500 stroke-stone-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin stroke-stone-500 fill-stone-500 group-hover:fill-white group-hover:stroke-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>

              <Link
                href=""
                className="rounded-md group bg-[#efefef] hover:bg-primary cursor-pointer p-3 group-hover:fill-white group-hover:stroke-white fill-stone-500 stroke-stone-500"
              >
                <svg
                  //   fill="#000000"
                  width="24px"
                  height="24px"
                  viewBox="0 0 256 256"
                  id="Flat"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" stroke-stone-500 fill-stone-500 group-hover:fill-white group-hover:stroke-white"
                >
                  <path d="M220,112c0,23.60645-8.293,45.22949-23.35059,60.88672C182.522,187.57522,163.332,196,144,196c-15.45068,0-26.78271-4.17627-34.89453-9.30566l-9.42481,40.05371a11.99957,11.99957,0,1,1-23.36132-5.4961l32-136a11.99957,11.99957,0,1,1,23.36132,5.4961l-16.45361,69.92969C118.72412,164.86135,127.1582,172,144,172c25.56055,0,52-22.44336,52-60A68,68,0,1,0,71.50586,149.86233,12.0002,12.0002,0,0,1,51.583,163.24514,92.00368,92.00368,0,1,1,220,112Z"></path>
                </svg>
              </Link>

              <Link
                href=""
                className="rounded-md group bg-[#efefef] hover:bg-primary cursor-pointer p-3 group-hover:fill-white group-hover:stroke-white fill-stone-500 stroke-stone-500"
              >
                <svg
                  fill="#000000"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" stroke-stone-500 fill-stone-500 group-hover:fill-white group-hover:stroke-white"
                >
                  <path d="M11.857 17.417c-2.947 0-4.294-1.524-4.294-2.641 0-.266.108-.521.298-.705a.946.946 0 0 1 .71-.264c1.261 0 .931 1.92 3.286 1.92 1.203 0 1.91-.736 1.91-1.425 0-.415-.234-.889-1.028-1.079l-2.629-.673c-2.111-.545-2.479-1.737-2.479-2.842 0-2.293 2.068-3.124 4.036-3.124 1.814 0 3.97 1.016 3.97 2.391 0 .592-.488.91-1.055.91-1.078 0-.897-1.536-3.063-1.536-1.077 0-1.645.513-1.645 1.23s.839.96 1.574 1.123l1.941.445c2.126.486 2.691 1.751 2.691 2.963 0 1.865-1.423 3.305-4.226 3.305m8.139-3.942c.086-.49.128-.986.128-1.482a8.472 8.472 0 0 0-2.952-6.474 8.211 8.211 0 0 0-6.788-1.856A4.818 4.818 0 0 0 7.935 3a4.954 4.954 0 0 0-4.27 2.519 5.103 5.103 0 0 0-.015 5.011 8.51 8.51 0 0 0 2.282 7.453 8.23 8.23 0 0 0 7.333 2.355 4.823 4.823 0 0 0 2.443.662 4.954 4.954 0 0 0 4.269-2.518 5.095 5.095 0 0 0 .016-5.009"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* section 2 */}

          <div className="lg:px-[50px] px-[10px] mt-8 lg:mt-0  basis-full   pr-[45px] md:basis-1/2 lg:basis-1/3 border-r  ">
            <h3 className="mb-[25px] text-xl font-semibold">What We Do</h3>
            <TitleWidget />

            <ul className="mt-9">
              {footer.links.map((link) => (
                <li key={link.name} className="mb-[9px] pb-[9px] group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 group-hover:ml-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>

                    <span className="text-[#444444] group-hover:text-primary">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* section-3 */}

          <div className="lg:px-[50px] px-[10px]  basis-full   pr-[45px] md:basis-1/2 lg:basis-1/3   ">
            <h3 className="mb-[25px] text-xl font-semibold">Get Updates</h3>
            <TitleWidget />

            <SubscriptionForm />
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-row gap-5 mt-10 mb-[150px]   border-red-400 items-center w-full z-10">
          <div className="hidden lg:flex flex-row items-center flex-1  border-green-500 ">
            <Separator className="flex-1" />
            <Image
              alt="copyright"
              src={"/images/figure4.png"}
              height={20}
              width={20}
            />
          </div>

          <div className="text-gray-2 text-sm flex-1 text-center">
            © 2025 Afririse Limited. All Rights Reserved by Afririse
          </div>

          <div className="hidden lg:flex flex-row items-center flex-1 ">
            <Image
              alt="copyright"
              src={"/images/figure4.png"}
              height={20}
              width={20}
            />
            <Separator className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
