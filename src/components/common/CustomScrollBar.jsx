"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomScrollBar = () => {
  const pathName = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(null);
  const [showScroll, setShowScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      // Adjust the threshold value as needed
      const threshold = 200;
      setShowScroll(currentPosition > threshold);
    };

    const handleResize = () => {
      const height = document.body.scrollHeight;
      setPageHeight(height);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Function to update screen height
    const updateScreenHeight = () => {
      // Check if window object is defined
      if (typeof window !== "undefined") {
        // Access window innerHeight
        const height = window.innerHeight;
        setScreenHeight(height);
      } else {
        // Handle the case when window object is not available
        console.error("Window object not available.");
      }
    };

    // Initial screen height
    updateScreenHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenHeight);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    // Update scrollbar height when pathname changes
    setPageHeight(document.body.scrollHeight);
  }, [pathName]);

  const handleScrollbarClick = (event) => {
    // Calculate the desired scroll position based on the click position
    const clickPosition = event.clientY;
    const fraction = clickPosition / window.innerHeight;
    const desiredScrollPosition = fraction * pageHeight;
    // Scroll to the desired position
    window.scrollTo({ top: desiredScrollPosition, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed w-[5px] sm:w-3 bg-balckLight right-0 z-[10000] h-screen flex justify-center transition-all duration-300 ${
        showScroll ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={handleScrollbarClick}>
      {" "}
      <div
        className=" bg-dodgerBlue w-[3px] sm:w-[6px] rounded-xl absolute z-[500000]"
        style={{
          top: `${(scrollPosition / pageHeight) * 100}%`,
          height: `${(screenHeight / pageHeight) * 100}%`,
        }}></div>
    </div>
  );
};

export default CustomScrollBar;
