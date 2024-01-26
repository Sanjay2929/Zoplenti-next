// Import necessary dependencies
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// CustomScrollBar component
const CustomScrollBar = () => {
  // Get the current pathname using next/navigation
  const currentPath = usePathname();

  // State variables for scroll position, page height, screen height, and scroll visibility
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(null);
  const [showScroll, setShowScroll] = useState(0);

  // Effect to handle scroll and resize events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Adjust the threshold value as needed
      const threshold = 200;
      setShowScroll(currentPosition > threshold);
    };

    // Function to handle resize events
    const handleResize = () => {
      const height = document.body.scrollHeight;
      setPageHeight(height);
    };

    // Add event listeners for scroll and resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleScroll();
    handleResize();

    // Cleanup: remove event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Effect to update screen height
  useEffect(() => {
    // Function to update screen height
    const updateScreenHeight = () => {
      if (typeof window !== "undefined") {
        const height = window.innerHeight;
        setScreenHeight(height);
      } else {
        console.error("Window object not available.");
      }
    };

    // Initial screen height
    updateScreenHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenHeight);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Effect to update page height when pathname changes
  useEffect(() => {
    setPageHeight(document.body.scrollHeight);
  }, [currentPath]);

  // Handler for scrollbar click
  const handleScrollbarClick = (event) => {
    const clickPosition = event.clientY;
    const fraction = clickPosition / window.innerHeight;
    const desiredScrollPosition = fraction * pageHeight;
    window.scrollTo({ top: desiredScrollPosition, behavior: "smooth" });
  };

  // Render the scrollbar component
  return (
    <div
      className={`fixed w-[5px] sm:w-3 bg-blackLight right-0 z-[10000] h-screen flex justify-center transition-all duration-300 ${
        showScroll ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={handleScrollbarClick}>
      <div
        className="bg-dodgerBlue w-[3px] sm:w-[6px] rounded-xl absolute z-[500000]"
        style={{
          top: `${(scrollPosition / pageHeight) * 100}%`,
          height: `${(screenHeight / pageHeight) * 100}%`,
        }}></div>
    </div>
  );
};

export default CustomScrollBar;
