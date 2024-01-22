// Import the React library
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { CircleCrossIcon } from "../icons/Home";

// Functional component named Header
const Header = ({ isBannerRemove, setIsBannerRemove }) => {
  const navbarRef = useRef();
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const pathName = usePathname();
  // Effect for handling scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      let visibleHeader = isHeaderVisible;

      if (currentScrollPosition > 150) {
        visibleHeader = prevScrollPosition > currentScrollPosition;
      }

      setPrevScrollPosition(currentScrollPosition);
      setIsHeaderVisible(visibleHeader);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, isHeaderVisible]);
  return (
    <>
      <div
        ref={navbarRef}
        id="nav_bar"
        className={`fixed top-0 w-full py-0 z-40 ${
          prevScrollPosition ? "slideDown" : "slideUp"
        } ${
          isHeaderVisible
            ? "translate-y-0 slideUp"
            : "-translate-y-full slideDown"
        }`}
      >
        {/* Notification Banner */}

        {pathName === "/" && (
          <div
            className={`bg-headerbg bg-curiousBlue-500 bg-no-repeat bg-cover z-[210] relative ${
              isBannerRemove ? "hidden" : ""
            }`}
          >
            <div className="relative px-4 md:px-6 xl:px-8">
              <div className="leading-[150%] py-[10px] sm:py-3 md:py-4 font-aeoniktrials sm:text-center text-white text-[12px] sm:text-sm md:text-lg font-bold">
                <span>
                  We&apos;re a top partner for 20+ industry leading brands.
                </span>
                <span className=" block sm:inline-block sm:ms-2 lg:ms-4">
                  <Link
                    href="/brands"
                    className="relative before:absolute before:start-0 before:bottom-[-2px] before:w-full before:h-[2px] before:bg-white hover:before:w-0 before:duration-200"
                  >
                    Find Out Why
                  </Link>
                </span>
              </div>
              {/* Close Notification Button */}
              <div
                onClick={() => setIsBannerRemove(true)}
                className="absolute cursor-pointer top-1/2 translate-y-[-50%] end-4 md:end-6 xl:end-8"
              >
                <CircleCrossIcon />
              </div>
            </div>
          </div>
        )}
        <Navbar isBannerRemove={isBannerRemove} />
      </div>
    </>
  );
};

export default Header;
