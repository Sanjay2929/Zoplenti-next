import React from "react";
import Hero from "./Hero";
import Footer from "../common/footer/Footer";
import Header from "./Hero";
import JoinTeam from "./JoinTeam";
import { Steps } from "./Steps";
import HeaderView from "../common/header/HeaderView";
import CustomScrollBar from "../common/CustomScrollBar";

export const Main = () => {
  return (
    <>
      <CustomScrollBar />
      <div className=" bg-midnight">
        <HeaderView />{" "}
        <Hero
          title="We're on our way to become a top 100 "
          title_span="Amazon Seller"
          titleStyle="max-w-[858px]"
          joinZoplenti={<JoinTeam />}
        />
        <Steps />
        <Footer />
      </div>
    </>
  );
};

// export default JoinTeam;
