"use client";
import CustomScrollBar from "@/components/common/CustomScrollBar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/header/Header";
import { useEffect, useRef, useState } from "react";

const NotFound = () => {
  const nabarRef = useRef();
  const [lottie, setLottie] = useState(null);

  const zIcon = useRef(null);
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);
  useEffect(() => {
    if (lottie && zIcon.current) {
      const animation = lottie.loadAnimation({
        container: zIcon.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/assets/json/Static_Final.json",
      });
      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <>
      {" "}
      <CustomScrollBar />{" "}
      <div className="bg-midnight">
        {/* Navigation Bar */}
        <Header />
        {/* Main Content */}
        <div className="min-h-screen !bg-black flex flex-col justify-center items-center">
          <div className="h-[250px] max-w-[250px]" ref={zIcon}></div>
          {/* Message for Not Found */}
          <p className="text-white font-aeoniktrials mt-top  text-2xl sm:text-xl font-bold leading-[150%]">
            Sorry, nothing to see here.
          </p>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
