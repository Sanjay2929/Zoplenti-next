"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "./Hero";
import RoadMap from "./RoadMap";
import JoinZoplenti from "./JoinZoplenti";
import CoreValue from "./CoreValues";
import ReviewCards from "./ReviewCards";

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <div className="bg-midnight">
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero />
      {/*  */}
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
    </div>
  );
};

export default HomePage;
