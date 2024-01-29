import React from "react";
import Hero from "./Hero";
import Footer from "../common/Footer";
import JoinTeam from "./JoinTeam";
import { Steps } from "./Steps";
import CustomScrollBar from "../common/CustomScrollBar";

export const Main = () => {
  return (
    <>
      <CustomScrollBar />
      <div className=" bg-midnight">
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
