import Image from "next/image";
import React from "react";
import Header from "../common/header/Header";

const Hero = (props) => {
  return (
    <>
      <Header />
      <div className=" relative overflow-hidden ">
        <div
          className={`bg-blueZodiac-500 relative pt-[68px] md:pt-[88px] lg:pt-[90px] ${props.descriptionStyle}`}>
          {/* Desktop View Background image */}
          <Image
            width={1440}
            height={590}
            className="absolute lg:w-full hidden md:flex top-0 min-h-[530px]"
            src="/assets/images/join-team/png/join-our-team-bg.png"
            alt="image"
          />
          {/* Mobile View Background image */}
          <Image
            width={800}
            height={590}
            className="absolute md:hidden top-[-68px] min-w-[800px] min-h-[580px]"
            src="/assets/images/join-team/png/mobile-view-join-our-team.png"
            alt="image"
          />
          {/* Left logo image */}
          <Image
            className="absolute bottom-[-40px] md:bottom-[-50px] lg:bottom-[-55px] w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] start-[-60px] md:start-[-55px] lg:start-[-80px]"
            height={142}
            width={176}
            src="/assets/images/common/png/left-right-logo-image.png"
            alt="logo-left"
          />
          {/* Right logo image */}
          <Image
            className="absolute bottom-[-40px] md:bottom-[-50px] lg:bottom-[-55px] w-[86px] sm:w-[130px] md:w-[150px] lg:w-[176px] end-[-60px] md:end-[-55px] lg:end-[-80px]"
            height={142}
            width={176}
            src="/assets/images/common/png/left-right-logo-image.png"
            alt="logo-right"
          />
          <div className="relative py-[58px] container max-w-[1140px] px-4 sm:px-8 mx-auto z-10 md:my-0 md:px-12 xl:px-4">
            {/* Main heading */}
            <h1
              className={`font-aeoniktrials text-white text-4xl md:text-5xl lg:text-6xl font-normal text-center !leading-[133.333%] mx-auto ${props.titleStyle}`}>
              {props.title}
              <span className="text-dodgerBlue font-bold">
                {props.title_span}
              </span>
            </h1>
            <p
              className={`${props.descriptionStyle} font-aeoniktrials text-center mx-auto font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white`}>
              {props.description}
            </p>
          </div>
        </div>
        {props.joinZoplenti}
      </div>
    </>
  );
};

export default Hero;
