import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RightArrowIcon } from "./icons/Home";

const Hero = (props) => {
  return (
    <>
      <div className="bg-midnight relative">
        <div className="pt-[90px] common_hero_layer bg-no-repeat bg-cover bg-bottom relative overflow-x-hidden">
          <Image
            className="absolute w-[86px] top-1/2 -translate-y-1/2 sm:w-[130px] md:w-[150px] lg:w-[176px] sm:start-[-70px] start-[-60px] md:start-[-90px] lg:start-[-120px] xl:start-[-80px]"
            height={142}
            width={176}
            src="/assets/images/common/png/left-right-logo-image.png"
            alt="logo-left"
          />
          <Image
            className="absolute w-[86px] top-1/2 -translate-y-1/2 sm:w-[130px] md:w-[150px] lg:w-[176px] sm:end-[-70px] end-[-60px] md:end-[-90px] lg:end-[-100px] xl:end-[-80px]"
            height={142}
            width={176}
            src="/assets/images/common/png/left-right-logo-image.png"
            alt="logo-right"
          />
          <div className="relative py-[58px] container max-w-[1140px] px-4 sm:px-8 mx-auto z-20 md:my-0 md:px-12 xl:px-4 flex flex-col items-center md:items-start">
            {/* Main heading */}
            <h1
              className={`font-aeoniktrials text-white text-4xl md:text-5xl lg:text-6xl font-normal text-center md:text-start !leading-[133.333%] ${props.titleStyle}`}>
              {props.title}
            </h1>
            {/* Sub heading */}
            <p
              className={`text-white pt-[14px] font-aeoniktrials text-sm sm:text-base md:text-lg lg:text-xl font-normal !leading-[170%] text-center md:text-start px-1 sm:px-0 ${props.descriptionStyle}`}>
              {props.description}
            </p>
            {/* Action buttons */}
            <div className="pt-[34px] flex gap-4">
              <Link
                href="/get-started"
                className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%]">
                Get started
                <span className="group-hover:translate-x-[4px] duration-300">
                  <RightArrowIcon />
                </span>
              </Link>
              <Link
                href="/join-our-team"
                className={`uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] hidden ${props.flex} `}>
                Join our team
                <span className="group-hover:translate-x-[4px] duration-300">
                  <RightArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
