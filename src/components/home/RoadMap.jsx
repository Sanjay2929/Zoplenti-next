import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <>
      {/* Main Container for Buy Timeline Section */}
      <div className="container max-w-[1140px] px-4 sm:px-8 md:px-12 xl:px-3 mx-auto relative pt-8 pb-[60px] md:pt-[44px] lg:pt-[68px] sm:pb-[80px] md:pb-[100px] lg:pb-[120px] z-20">
        {/* Logo Image for Desktop View timeline sticky */}
        <Image
          width={84}
          className="sticky hidden md:flex z-10 start-4 md:top-[45vh] md:left-[50%] md:translate-x-[-50%] lg:w-[88px] min-[880px]:w-[74px] min-[946px]:w-[70px] min-[1200px]:w-[88px] min-[1280px]:w-[90px]"
          height={90}
          src="/assets/roadmap/svg/logo-time-line.svg"
          alt="time line"
        />
        {/* Background Image for Desktop View */}
        <Image
          className="hidden md:flex md:h-[91%] md:mt-[-130px] lg:mt-[-160px] absolute left-4 md:left-[50%] md:translate-x-[-50%]"
          width={100}
          height={1102}
          src="/assets/roadmap/svg/time-line-image.svg"
          alt="time line"
        />
        <div className="flex flex-col items-end md:items-start md:mt-[-92px] md:flex-row md:justify-between w-full">
          {/* Left Column - Description */}
          <div className="w-full md:w-5/12 md:sticky top-[20%]">
            <h2 className="text-white max-w-[282px] sm:max-w-full font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold">
              Our tried and true process gets us results{" "}
            </h2>
            <p className="text-white xl:pe-20 hidden md:flex md:pe-5 lg:pe-0 pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
              We choose our vendors carefully, focusing on companies with a
              strong history and a real desire to grow together on Amazon.
            </p>
          </div>
          {/* Right Column - Timeline Steps */}
          <div className="w-full relative md:w-5/12 xl:ps-16 pt-8 ps-[75px] md:ps-3 md:pt-0 ">
            <Image
              className="md:hidden absolute top-[3%] start-0 h-full sm:w-[60px]"
              width={43}
              height={806}
              src="/assets/roadmap/svg/mobile-time-line.svg"
              alt="time line"
            />
            <Image
              width={39}
              className="sticky md:hidden mb-[40px] md:mb-0 z-10 ms-[-73px] sm:ms-[-60px] min-[440px]:w-[33px]  min-[550px]:w-[27px] min-[550px]:ms-[-67px] min-[440px]:ms-[-70px] mt-[-39px] top-[20%] translate-y-[40px] sm:min-w-[30px]"
              height={39}
              src="/assets/roadmap/svg/mobile-logo-time-line.svg"
              alt="time line"
            />
            <div className="mt-[-40px] md:mt-0">
              {/* Timeline Steps */}
              <h3 className="text-white font-aeoniktrials !leading-[138.889%] font-normal text-[28px] md:text-3xl lg:text-4xl">
                Buy
              </h3>
              <p className="text-white pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] pe-3 sm:pe-0">
                We send a PO for bulk orders at wholesale prices, like any other
                retailer, to be shipped directly to one of our distribution
                centers. Thanks to our clockwork logistics, processes and
                quality control, there are no hassles.
              </p>
              {/* Step 2 - Grow */}
              <h3 className="text-white pt-8 sm:pt-12 md:pt-16 lg:pt-[140px] font-aeoniktrials !leading-[138.889%] font-normal text-[28px] md:text-3xl lg:text-4xl">
                Grow
              </h3>
              <p className="text-white pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
                We sell to our customers on Amazon, showing your products in the
                best way possible, making every single buyer experience awesome,
                and using tailored strategies to optimize and grow market share.
              </p>
              {/* Step 3 - Rinse and Repeat */}
              <h3 className="text-white pt-8 sm:pt-12 md:pt-16 lg:pt-[140px] font-aeoniktrials !leading-[138.889%] font-normal text-[28px] md:text-3xl lg:text-4xl">
                Rinse and Repeat
              </h3>
              <p className="text-white pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
                We place frequent reorders as we grow together, on a schedule
                that’s easy for you to fulfill. We keep regular communication so
                we stay aligned, and use our custom tech to stay on top of
                trends and issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
