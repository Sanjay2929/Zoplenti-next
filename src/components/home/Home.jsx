"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <>
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero />
    </>
  );
};

export default HomePage;
