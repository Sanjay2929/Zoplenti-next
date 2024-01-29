import React from "react";

const ZoplentiStatistics = () => {
  return (
    <>
      <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto">
        <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
          <h2 className="text-white text-center font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold max-w-[688px] mx-auto">
            Our numbers say it all
          </h2>
          <div className="flex flex-row flex-wrap justify-between pt-8 sm:pt-10 md:pt-12 lg:pt-16">
            {/* Business Detail: 7 Years Experience */}
            <div className="w-1/2 md:w-[21%] lg:w-auto">
              <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                Top 0.01%
              </h3>
              <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg !leading-[170%] pe-3 sm:pe-0">
                Of all Amazon sellers
              </p>
            </div>
            {/* Business Detail: $6,000,000+ in Orders */}
            <div className="w-1/2 md:w-[20%] lg:w-auto">
              <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                100%
              </h3>
              <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg !leading-[170%] pe-3 sm:pe-0">
                Lifetime seller rating of 5 stars
              </p>
            </div>
            {/* Business Detail: 50+ Distribution Partners */}
            <div className="w-1/2 md:w-[22%] lg:w-auto pt-6 md:pt-0">
              <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                1,000,000+
              </h3>
              <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg !leading-[170%] pe-3 sm:pe-0">
                Satisfied customers
              </p>
            </div>
            {/* Business Detail: 50+ Distribution Partners */}
            <div className="w-1/2 md:w-[20%] lg:w-auto pt-6 md:pt-0">
              <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                100+
              </h3>
              <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg !leading-[170%] pe-3 sm:pe-0">
                Industry leading partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoplentiStatistics;
