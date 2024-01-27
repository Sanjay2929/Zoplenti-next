import React from "react";
import Header from "../common/header/Header";
import Hero from "../common/Hero";
import { Process } from "./Process";
import Mambers from "./Mambers";
import Signatures from "./Signatures";
import Footer from "../common/footer/Footer";

const Company = () => {
  return (
    <>
      <div className="bg-midnight">
        <Header />
        <Hero
          title={[
            "We are building the benchmark for what an",
            <span key="title_brands" className="text-dodgerBlue font-bold">
              {" "}
              Amazon partner{" "}
            </span>,
            "should be",
          ]}
          description="Our daily focus revolves around protecting and growing our partner brands, raising the bar for what can be expected from an Amazon partner. We treat your brand as if it was our own, because our incentives are aligned: the more you grow, the more we sell."
          titleStyle="max-w-[970px]"
          descriptionStyle="max-w-[815px]"
          flex="!flex"
        />
        <Signatures />
        <Mambers />
        <Process />
        <Footer />
      </div>
    </>
  );
};

export default Company;
