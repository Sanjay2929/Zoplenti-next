"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false); // Rename state to showScrollTop

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll value when the user scrolls
      setScrollValue(window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Update showScrollTop based on scrollValue
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, [scrollValue]);

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };

  return (
    <>
      {/* Render "Back to Top" button when showScrollTop state is true */}
      <>
        <div
          className={`end-[2%] bottom-[2%] border-0 fixed z-[200] transition-all duration-300 ${
            showScrollTop
              ? "scale-100 translate-y-0"
              : "scale-0 translate-y-[40px]"
          }`}>
          {/* Back to Top button */}
          <div
            onClick={scrollTopHandler}
            className="h-10 border border-midnight w-10 rounded-full overflow-hidden bg-dodgerBlue hover:bg-midnight hover:card-shadow cursor-pointer transition-all duration-700 flex justify-center items-center">
            <Image
              height={48}
              width={48}
              src="/assets/images/backToTop/svg/back_to_top.svg"
              alt="back to top"
            />
          </div>
        </div>
      </>
    </>
  );
};

export default ScrollTop;
