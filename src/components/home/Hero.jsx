// Import necessary modules and components
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownCircleArrowIcon } from "../common/icons/Home";
import CustomButton from "../common/CustomButton";

// Functional component for the Hero section
const Hero = ({ isBannerVisible }) => {
  // Get the current pathname using the Next.js navigation hook
  const pathName = usePathname();

  return (
    <>
      {/* Hero section container with dynamic styling based on pathname and banner visibility */}
      <div
        className={`flex-grow-[1] min-h-screen bg-herobg bg-cover bg-no-repeat relative h-full flex flex-col justify-center items-center overflow-hidden ${
          // Adjust top padding based on pathname and banner visibility
          pathName !== "/" && "pt-[60px]"
        }  ${isBannerVisible ? "!pt-[60px]" : "pt-[150px]"} `}>
        {/* Left logo image */}
        <Image
          className="absolute w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] start-[-60px] md:start-[-55px] lg:start-[-80px]"
          height={142}
          width={176}
          src="/assets/common/png/left-right-logo-image.png"
          alt="logo-left"
        />
        {/* Right logo image */}
        <Image
          className="absolute w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] end-[-60px] md:end-[-55px] lg:end-[-80px]"
          height={142}
          width={176}
          src="/assets/common/png/left-right-logo-image.png"
          alt="logo-right"
        />
        {/* Container for the hero section */}
        <div className="relative container max-w-[1140px] px-4 sm:px-8 mx-auto z-20 my-[60px] md:my-0 md:px-6 xl:px-8 flex flex-col items-center">
          {/* Main heading */}
          <h1 className="font-aeoniktrials  text-white text-4xl md:text-5xl lg:text-6xl font-normal text-center !leading-[133.333%] px-1 sm:px-0">
            Say hello to <i>damn</i> extraordinary{" "}
            <span className="font-bold text-dodgerBlue block">
              Amazon results
            </span>
          </h1>
          {/* Sub heading */}
          <p className="text-white pt-[14px] font-aeoniktrials text-sm sm:text-base md:text-lg lg:text-xl font-normal !leading-[170%] text-center px-1 sm:px-0 md:max-w-[671px] max-w-[540px]">
            We are a strategic Amazon ally, not just a reseller. Zoplenti helps
            you catapult your sales while always delivering a 5 star customer
            experience.
          </p>
          {/* Action buttons */}
          <div className="flex gap-4 pt-10 lg:pt-12">
            <CustomButton title="Brands" url="/barnds" />
            <CustomButton title="Distributors" url="/distributors" />
          </div>
          {/* Scroll down arrow */}
          <div className="min-h-[88px] flex items-end">
            {/* Link to scroll smoothly to the specified section */}
            <Link href="#brand" className="scroll-smooth updown">
              <DownCircleArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Hero component as the default export
export default Hero;
