import Image from "next/image";
import React from "react";

const Signatures = () => {
  return (
    <>
      {/* Container for the component */}
      <div className="md:pt-[100px] lg:pt-[120px] relative">
        {/* Zoplenti Logo */}
        <Image
          className="flex absolute start-1/2 top-[-40px] sm:top-[-30px] md:top-5 translate-x-[-50%] max-w-[100px] sm:max-w-[150px] md:max-w-[300px]"
          width={300}
          height={247}
          src="/assets/images/partners/svg/z-logo-gradient.svg"
          alt="logo gradian image"
        />
        {/* Content Container */}
        <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto relative z-20">
          {/* Inner Container */}
          <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
            <div className="w-full h-[210px] min-[450px]:h-[250px] sm:h-[330px] md:h-[407px] lg:h-[497px] relative">
              {/* Image with CEO signatures */}
              <Image
                quality={100}
                width={1000}
                height={1000}
                src="/assets/images/company/signatures/webp/ceo-image.webp"
                alt="image"
                className="h-[210px] min-[450px]:h-[250px] sm:h-[330px] md:h-[407px] lg:h-[497px] w-full rounded-[8px] sm:rounded-[20px] object-cover"
              />
              {/* Steven's Signature and COO Details */}
              <div className="w-[132px] min-[450px]:w-[153px] sm:w-[200px] lg:w-[230px] absolute bottom-2 sm:bottom-[10px] start-2 sm:start-4 md:start-5 md:bottom-6 rounded sm:rounded-[10px] pt-1 pb-[2px] flex flex-col items-center">
                <Image
                  width={162}
                  height={62}
                  quality={100}
                  src="/assets/images/company/signatures/svg/chief-operating-signature.svg"
                  alt="Jennifer Signature"
                  className="h-12 md:h-[62px] lg:h-[77px] w-auto"
                />
                <p className="sm:pt-1 font-aeoniktrials text-[12px] min-[450px]:text-sm md:text-lg lg:text-xl sm:text-base font-normal text-white !leading-[170%]">
                  Jennifer Hollander, COO
                </p>
              </div>
              {/* Jennifer's Signature and CEO Details */}
              <div className="w-[132px] min-[450px]:w-[153px] sm:w-[170px] md:w-[180px] lg:w-[200px] md absolute bottom-2 sm:bottom-[10px] end-2 sm:end-4 md:end-5 md:bottom-6 rounded sm:rounded-[10px] pt-1 pb-[2px] flex flex-col items-center">
                <Image
                  quality={100}
                  width={1000}
                  height={1000}
                  src="/assets/images/company/signatures/svg/chief-executive-signature.svg"
                  alt="Steven Signature"
                  className="h-12 md:h-[62px] lg:h-[84px] w-auto"
                />
                <p className="sm:pt-1 font-aeoniktrials text-[12px] min-[450px]:text-sm md:text-lg lg:text-xl sm:text-base font-normal text-white !leading-[170%]">
                  Steven Hollander, CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signatures;
