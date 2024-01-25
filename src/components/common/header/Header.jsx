// Import the React library
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CircleCrossIcon } from "../icons/Home";
import HeaderView from "./HeaderView";

// Functional component named Header
const Header = ({ isBannerVisible, setIsBannerVisible }) => {
  // Reference to the navbar element
  const navbarRef = useRef();
  // State to store the previous scroll position
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  // State to determine if the header is visible
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // Get the current pathname using a custom hook (replace with actual hook)
  const pathName = usePathname();
  // Effect for handling scroll events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      let visibleHeader = isHeaderVisible;
      // Check if the user has scrolled more than 150 pixels
      // if (currentScrollPosition > 150) {
      //   // Determine if the user is scrolling up or down
      //   visibleHeader = prevScrollPosition > currentScrollPosition;
      //   document.body.classList.remove("show-scrollbar");
      //   document.body.classList.add("hide-scrollbar");
      // }
      // // Update the state with the current scroll position and header visibility
      // setPrevScrollPosition(currentScrollPosition);
      // setIsHeaderVisible(visibleHeader);
      // if (currentScrollPosition >= 10) {
      //   document.body.classList.add("show-scrollbar");
      //   document.body.classList.remove("hide-scrollbar");
      // } else {
      //   document.body.classList.remove("show-scrollbar");
      //   document.body.classList.add("hide-scrollbar");
      // }
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, isHeaderVisible]); // Dependencies for the useEffect hook

  return (
    <>
      <div
        ref={navbarRef}
        id="nav_bar"
        className={`fixed top-0 w-full py-0 z-40 ${
          prevScrollPosition ? "slideDown" : "slideUp"
        } ${
          isHeaderVisible
            ? " translate-y-0 slideUp"
            : "-translate-y-full slideDown"
        }`}>
        {/* Notification Banner */}

        {pathName === "/" && (
          <div
            className={`bg-headerbg bg-curiousBlue-500 bg-no-repeat bg-cover z-[210] relative ${
              isBannerVisible ? "hidden" : ""
            }`}>
            <div className="relative px-4 md:px-6 xl:px-8">
              <div className="leading-[150%] py-[10px] sm:py-3 md:py-4 font-aeoniktrials sm:text-center text-white text-[12px] sm:text-sm md:text-lg font-bold">
                <span>
                  We&apos;re a top partner for 20+ industry leading brands.
                </span>
                <span className=" block sm:inline-block sm:ms-2 lg:ms-4">
                  <Link
                    href="/brands"
                    className="relative before:absolute before:start-0 before:bottom-[-2px] before:w-full before:h-[2px] before:bg-white hover:before:w-0 before:duration-200">
                    Find Out Why
                  </Link>
                </span>
              </div>
              {/* Close Notification Button */}
              <div
                onClick={() => setIsBannerVisible(true)}
                className="absolute cursor-pointer top-1/2 translate-y-[-50%] end-4 md:end-6 xl:end-8">
                <CircleCrossIcon />
              </div>
            </div>
          </div>
        )}
        <HeaderView isBannerVisible={isBannerVisible} />
      </div>
    </>
  );
};

export default Header;
