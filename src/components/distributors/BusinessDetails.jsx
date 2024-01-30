import React from "react";

const BusinessDetails = () => {
    return (
        <>
            {/* Container for the business details section */}
            <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto">
                <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
                    <div className="flex flex-row flex-wrap mx-[-12px]">
                        {/* Business Detail: 7 Years Experience */}
                        <div className="w-1/2 sm:w-4/12 px-3">
                            <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                                7 Years
                            </h3>
                            <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] pe-3 sm:pe-0">
                                Of experience doing business with large partners
                            </p>
                        </div>
                        {/* Business Detail: $6,000,000+ in Orders */}
                        <div className="w-1/2 sm:w-4/12 px-3">
                            <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                                $6,000,000+
                            </h3>
                            <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] pe-3 sm:pe-0">
                                In orders placed to partners last year, and growing
                            </p>
                        </div>
                        {/* Business Detail: 50+ Distribution Partners */}
                        <div className="w-1/2 sm:w-4/12 px-3 pt-6 sm:pt-0">
                            <h3 className="text-dodgerBlue font-aeoniktrials !leading-[136%] sm:!leading-[177.778%] font-bold text-[28px] md:text-3xl lg:text-4xl">
                                50+
                            </h3>
                            <p className="text-white pt-[5px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] pe-3 sm:pe-0">
                                National and industry specific distribution partners
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessDetails;
