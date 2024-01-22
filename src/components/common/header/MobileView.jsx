"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLogo from "../json/NavbarLogo";
import { CircleCrossIcon, MenuIcon, RightArrowIcon } from "../icons/Home";
import { navigationLinks } from "../helper/Helper";
import { useEffect, useState } from "react";

const MobileView = ({ isBannerVisible }) => {
  const pathName = usePathname();
  // State variable to track the visibility of the navigation bar
  const [showNavBar, setShowNavBar] = useState(false);
  useEffect(() => {
    if (showNavBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showNavBar]);
  return (
    <>
      {/* Main mobile navigation container */}
      <div className="flex justify-between items-center w-full">
        <div className="z-[200] h-[67px]">
          <NavbarLogo />
        </div>
        <div className="flex items-center">
          {/* Hamburger menu icon for mobile navigation */}
          <div
            onClick={() => setShowNavBar(true)}
            className={`${
              showNavBar ? "hidden" : ""
            } cursor-pointer h-7 flex items-center gap-1`}
          >
            <MenuIcon />
            <span className="text-white font-aeoniktrials font-normal text-base hidden sm:flex">
              Menu
            </span>
          </div>
          {/* Close icon for mobile navigation */}
          <div
            onClick={() => setShowNavBar(false)}
            className={`${
              showNavBar ? "block" : "hidden"
            } ms-2 flex items-center z-[210]`}
          >
            <div className="cursor-pointer flex items-center gap-1">
              <CircleCrossIcon />
            </div>
          </div>
        </div>
        {/* Navigation bar container with conditional styling based on showNavBar state */}
        <div
          className={`fixed transition-all duration-300 w-full h-full ${
            showNavBar
              ? "start-0 min-h-screen top-0 z-50 "
              : "top-[-500px] w-full z-[-100] start-0"
          }`}
        >
          <div
            className={`${
              pathName === "/" ? (isBannerVisible ? "pt-0" : "pt-[60px]") : ""
            } px-4 bg-midnight max-h-full pb-[50px]`}
          >
            <div className="flex flex-col items-center pt-12 md:pt-16">
              {/* Navigation links container with specified gaps for different screen sizes */}
              {navigationLinks.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center mt-[18px] border-b-[0.5px] border-paleSky w-full"
                  >
                    <Link
                      onClick={() => setShowNavBar(false)}
                      href={data.link}
                      className={`text-white py-3 text-xl font-normal !leading-[170%] font-aeoniktrials hover:text-dodgerBlue transition-all duration-500 ${
                        pathName === data.link ? " !text-dodgerBlue" : ""
                      }`}
                    >
                      {data.title}
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Additional links container with specified gaps for different screen sizes */}
            <div className="flex flex-col items-center gap-6 pt-8">
              <Link
                onClick={() => setShowNavBar(false)}
                href="/get-started"
                className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full sm:w-1/2 justify-center"
                // className="uppercase shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] w-full sm:w-1/2 justify-center text-white font-aeoniktrials font-bold !leading-[150%] text-base py-[11px] px-[15px] rounded bg-dodgerBlue flex items-center gap-2 hover:bg-alto transition-all duration-300 hover:text-black group"
              >
                Get started{" "}
                <span className="group-hover:translate-x-[4px] duration-300">
                  <RightArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileView;
