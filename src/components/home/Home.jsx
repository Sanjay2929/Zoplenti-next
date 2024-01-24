"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";
import PartnersList from "./../common/json/PartnersList"

// import DistributorPartners from "../common/partners/DistributorPartners";
import Brands from "../common/partners/Brands";

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <>
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero />
      <Brands brands={PartnersList} show="all" margin_bottom="mb-[-40px] sm:mb-[-80px]" padding_top="md:pt-[100px] lg:pt-[120px]" />

    </>
  );
};

export default HomePage;
