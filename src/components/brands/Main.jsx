"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import PartnersList from "../common/json/PartnersList";
import Brands from "../common/partners/Brands";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import AmazonSeller from "./AmazonSeller";
import OpportunitiesCatalog from "./OpportunitiesCatalog";
import JoinZoplenti from "../common/JoinZoplenti";
import AmazonResult from "./AmazonResult";
import QuestionBrands from "./QuestionBrands";
import ReviewCards from "../common/ReviewCards";
import Process from "./Process";

const Main = () => {
  const brandsPartners = PartnersList[0].partnerslogo;

  const [isBannerVisible, setIsBannerVisible] = useState(false);
  return (
    <div className="bg-midnight">
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Hero
        title={[
          "The",
          <span key="title_brands" className="text-dodgerBlue font-bold">
            {" "}
            Amazon partner{" "}
          </span>,
          "that is your brand’s unfair advantage",
        ]}
        description="Discover the unparalleled feeling of having a partner that really treats your brand as their own. Watch as we grow your market share and brand equity to new heights."
        titleStyle="max-w-[884px]"
        descriptionStyle="max-w-[764px]"
      />
      {/*  */}
      <Brands
        hidden="hidden"
        brands={brandsPartners}
        show="brands"
        translateRemove="!translate-y-0"
        containerStyle="mb-0"
        paddingTop="md:pt-[86px]"
      />
      <AmazonSeller />
      <JoinZoplenti
        description="We're looking for select brands who share our vision and are ready to dominate together. "
        url="/get-started"
        buttonHidden="hidden"
        title="Get Started"
      />
      <AmazonResult />
      <OpportunitiesCatalog
        maxWidth="max-w-[1024px]"
        title="Our Opportunity Finder algorithm pushes your products to the top "
        description={[
          "We developed a custom analysis process to find the right levers to move for your brand, pouring in all the collective experience of the best & brightest people in the Amazon business.",
          <span key="textbold" className="font-bold">
            {" "}
            The result? A scientific, surefire way to plan and execute
            massivegrowth on Amazon for the long term.
          </span>,
        ]}
        borderStyle="border-b-[1px] border-solid border-alto border-opacity-20"
      />
      <Process />
      <QuestionBrands
        Btntitle="GET STARTED"
        title="Are you serious about growing your brand on Amazon?"
        description="We're looking for partner brands that take Amazon seriously, to help take their market share andbrand prestige to the next level. If that's you, fill the form below and we'll reach out to you as soon as possible to explore opportunities."
      />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export default Main;
