"use client";
import React, { useState } from "react";
import Header from "../common/header/Header";
import PartnersList from "./../common/json/PartnersList";
import Brands from "../common/partners/Brands";
import Footer from "../common/footer/Footer";
import Hero from "../common/Hero";
import AmazonSeller from "./AmazonSeller";

const Main = () => {
    const brandsPartners = PartnersList[0].partnerslogo;

    const [isBannerVisible, setIsBannerVisible] = useState(false);
    return (
        <div className="bg-midnight ">
            <Header
                isBannerVisible={isBannerVisible}
                setIsBannerVisible={setIsBannerVisible}
            />
            <Hero title={["The", <span key="title_brands" className="text-dodgerBlue font-bold"> Amazon partner </span>, "that is your brand’s unfair advantage"]}
                description="Discover the unparalleled feeling of having a partner that really treats your brand as their own. Watch as we grow your market share and brand equity to new heights."
                titleStyle="max-w-[884px]"
                descriptionStyle="max-w-[764px]"
            />
            {/*  */}
            <Brands
                hidden="hidden" brands={brandsPartners} show="brands" translate_remove="!translate-y-0" containerStyle="mb-0" padding_top="md:pt-[86px]" />
            <AmazonSeller />
            <Footer />
        </div>
    );
};

export default Main;
