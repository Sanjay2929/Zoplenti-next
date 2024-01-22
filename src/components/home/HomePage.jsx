"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";

const HomePage = () => {
  const [isBannerRemove, setIsBannerRemove] = useState(false);
  return (
    <div>
      <Header
        isBannerRemove={isBannerRemove}
        setIsBannerRemove={setIsBannerRemove}
      />
      <Hero />
    </div>
  );
};

export default HomePage;
