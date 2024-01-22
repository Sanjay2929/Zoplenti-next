"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <div>
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero />
    </div>
  );
};

export default HomePage;
