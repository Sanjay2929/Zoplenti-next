import { usePathname } from "next/navigation";
import React from "react";
import LandingPage from "./home/Main";
import Brands from "./brands/Main";

const Main = () => {
  const pathName = usePathname();

  return (
    <div>
      {pathName === "/" ? (
        <LandingPage />
      ) : pathName === "brands" ? (
        <Brands />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
