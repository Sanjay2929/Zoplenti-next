"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";
import RoadMap from "./RoadMap";
import JoinZoplenti from "./JoinZoplenti";
import CoreValue from "./CoreValues";
import PartnersList from "./../common/json/PartnersList";

// import DistributorPartners from "../common/partners/DistributorPartners";
import Brands from "../common/partners/Brands";
import Footer from "../common/footer/Footer";
import ReviewCards from "../common/ReviewCards";

const Main = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <div className="bg-midnight overflow-auto">
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero />
      {/*  */}
      <Brands
        brands={PartnersList}
        show="all"
        margin_bottom="mb-[-40px] sm:mb-[-80px]"
        padding_top="md:pt-[100px] lg:pt-[120px]"
      />

      {/*  */}
      <RoadMap />
      {/*  */}
      {/*  */}
      <JoinZoplenti
        description="We're looking for select brands and distributors who share our vision and are ready to dominate together."
        title="Distributors"
        url="/distributors"
      />
      <CoreValue />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export default Main;
