import React from "react";
import sellAmazonList from "../common/json/AmazonSeller";
import Image from "next/image";

const AmazonSeller = () => {
  return (
    <div className="pb-[60px] sm:pb-20 md:pb-[100px] lg:pb-[120px] relative z-20">
      {/* Container for content */}
      <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto ">
        {/* Title section */}
        <h2 className="text-white text-center font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold sm:px-5 md:px-0 border-t-[1px] border-alto border-opacity-20 pt-[60px] sm:pt-20 md:pt-[100px] lg:pt-[120px]">
          How do you get the most out of Amazon?
        </h2>
        {/* Subtitle/description section */}
        <p className="text-white text-center pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] max-w-[858px] mx-auto lg:pb-[90px] sm:pb-[70px] pb-[48px]">
          When it comes to selling your brand on Amazon, you have a few
          different options. But only one of them turns Amazon into a valuable
          sales channel without the headaches.
        </p>
      </div>
      {/* Mapping through sellAmazonList to render dynamic content */}
      {sellAmazonList.map((obj, i) => (
        <div
          key={i}
          className={`border-t border-dodgerBlue py-4 lg:py-[60px] sm:py-[34px] ${i === 3 ? "bg-dodgerBlue" :"sell_amazon_bg"}`}>
          {/* Container for each item in sellAmazonList */}
          <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto relative">
            <div className="relative flex flex-row sm:items-center gap-2.5">
              <span className="md:absolute py-[3px] sm:py-0 sm:top-1/2 top-1 xl:left-[-16px] md:-left-1.5 -left-4 md:-translate-x-full md:-translate-y-1/2 sm:translate-y-0 translate-y-[5px]  ">
                {/* <div dangerouslySetInnerHTML={{ __html: obj.image }} /> */}
                <Image
                  className="lg:min-w-[32px] sm:min-w-[26px] min-w-[22px]  lg:max-w-[32px] sm:max-w-[26px] max-w-[22px] h-auto"
                  width={32}
                  height={33}
                  src={obj.image}
                  alt="card"
                  quality={100}
                />
              </span>
              <h3 className="text-white py-[3px] sm:py-0 font-aeoniktrials font-normal md:text-4xl sm:text-3xl text-[28px] !leading-[115%]">
                {obj.title}
              </h3>
            </div>
            <p
              className={`text-white pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] pe-8 min-[430px]:pe-0 ${i === 3? "max-w-[1119px]" : "max-w-[1077px]"}`}>
              {obj.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmazonSeller;
