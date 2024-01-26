"use client";
import React, { useState } from "react";
import Main from "../home/Main";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Pages = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  return (
    <div>
      <Header
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />
      <Main />
      <Footer />
    </div>
  );
};

export default Pages;
