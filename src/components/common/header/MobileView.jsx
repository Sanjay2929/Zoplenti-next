// Importing necessary dependencies and components
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleCrossIcon, MenuIcon, RightArrowIcon } from "../icons/Home";
// import { navigationLinks } from "../helper/Helper";
import { useEffect, useState } from "react";
import Logo from "./Logo";
// MobileView component
const MobileView = ({ isBannerVisible }) => {
  // Get the current pathname using Next.js hook
  const currentPathname = usePathname();
  // State variable to track the visibility of the navigation bar
  const [isNavigationBarVisible, setNavigationBarVisibility] = useState(false);
  // Effect to handle body overflow when the navigation bar is visible
  useEffect(() => {
    if (isNavigationBarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup function to remove body overflow style
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isNavigationBarVisible]);
  // Render the MobileView component
  return (
    <>
      {/* Main mobile navigation container */}
      <div className="flex justify-between items-center w-full">
        <div className="z-[200] h-[67px]">
          {/* Render the NavbarLogo component */}
          <Logo />
        </div>
        <div className="flex items-center">
          {/* Hamburger menu icon for mobile navigation */}
          <div
            onClick={() => setNavigationBarVisibility(true)}
            className={`${
              isNavigationBarVisible ? "hidden" : ""
            } cursor-pointer h-7 flex items-center gap-1`}>
            <MenuIcon />
            <span className="text-white font-aeoniktrials font-normal text-base hidden sm:flex">
              Menu
            </span>
          </div>
          {/* Close icon for mobile navigation */}
          <div
            onClick={() => setNavigationBarVisibility(false)}
            className={`${
              isNavigationBarVisible ? "block" : "hidden"
            } ms-2 flex items-center z-[210]`}>
            <div className="cursor-pointer flex items-center gap-1">
              <CircleCrossIcon />
            </div>
          </div>
        </div>
        {/* Navigation bar container with conditional styling based on isNavigationBarVisible state */}
        <div
          className={`fixed transition-all duration-300 w-full h-full ${
            isNavigationBarVisible
              ? "start-0 min-h-screen top-0 z-50 "
              : "top-[-500px] w-full z-[-100] start-0"
          }`}>
          <div
            className={`${
              currentPathname === "/"
                ? isBannerVisible
                  ? "pt-0"
                  : "pt-[60px]"
                : ""
            } px-4 bg-midnight max-h-full pb-[50px]`}>
            <div className="flex flex-col items-center pt-12 md:pt-16">
              {/* Content within the navigation bar */}
            </div>
            {/* Additional links container with specified gaps for different screen sizes */}
            <div className="flex flex-col items-center gap-6 pt-8">
              <Link
                onClick={() => setNavigationBarVisibility(false)}
                href="/get-started"
                className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full sm:w-1/2 justify-center">
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
// Exporting the MobileView component
export default MobileView;
