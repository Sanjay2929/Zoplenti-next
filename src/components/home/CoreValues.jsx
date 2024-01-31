import Image from "next/image";
import React from "react";

const CoreValue = () => {
  return (
    <>
      {/* Main Container for Core Values Section */}
      <div
        id="company"
        className="sm:bg-corevaluebg bg-cover bg-no-repeat lg:mt-5 bg-center relative">
        {/* Mobile View Background Images */}
        <Image
          width={640}
          height={113}
          className="absolute start-0 top-[19%] sm:hidden"
          alt="mobile view"
          src="/assets/images/coreValue/png/mobile-bg-corevaluetimeline.png"
        />
        <Image
          width={640}
          height={113}
          className="absolute start-0 top-[45%] sm:hidden"
          alt="mobile view"
          src="/assets/images/coreValue/png/mobile-bg-corevaluetimeline.png"
        />
        <Image
          width={640}
          height={113}
          className="absolute start-0 top-[71%] sm:hidden"
          alt="mobile view"
          src="/assets/images/coreValue/png/mobile-bg-corevaluetimeline.png"
        />
        {/* Container for Content */}
        <div className="container md:px-12 sm:px-8 xl:px-3 max-w-[1140px] px-4 mx-auto relative z-10">
          <div className="py-[60px] sm:py-20 md:pt-[100px] md:pb-[90px] border-b-[1px] border-alto border-opacity-20">
            <h2 className="text-white mx-auto font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold md:px-0 text-center max-w-[450px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[622px]">
              There are three core values we stand for
            </h2>
            {/* Core Values Timeline */}
            <div className="flex flex-row flex-wrap pt-10 sm:pt-[60px] md:pt-20 lg:pt-[100px]">
              {/* Core Value 01 */}
              <div className="sm:w-1/2 order-1 w-full sm:pe-3 flex justify-center sm:justify-start sm:items-center">
                <p className="text-firefly text-center sm:text-start font-aeoniktrials font-normal text-[113.251px] !leading-[100%] sm:text-[150px] md-text-[220px] lg:text-[328px]">
                  01
                </p>
              </div>
              {/* Core Value 01 Content */}
              <div className="flex flex-col sm:justify-center sm:max-w-[520px] sm:ms-auto pt-5 sm:pt-0 sm:ps-3 sm:w-1/2 order-2 w-full">
                <h3 className="text-white font-normal text-center sm:text-start font-aeoniktrials !leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl">
                  We&apos;re <span className="italic">champions</span> of
                  <span className="text-dodgerBlue block">collaboration</span>
                </h3>
                <p className="text-white hidden sm:flex pt-[18px] px-[4px] sm:px-0 font-aeoniktrials text-center sm:text-start text-sm sm:text-base md:text-lg lg:text-xl font-normal !leading-[170%] md:min-h-[68px]">
                  We believe in long lasting partnerships. Through clear, open,
                  and transparent communication, we foster relationships that
                  transcend beyond the boardroom. By getting to know our
                  partners personally, we ensure a strong foundation.
                </p>
              </div>
              {/* Core Value 02 Content */}
              <div className="pt-5 sm:w-1/2 sm:order-3 order-4 w-full sm:pe-3 flex flex-col sm:justify-center sm:pt-[60px] md:pt-20 lg:pt-[100px]">
                <div className="flex flex-col sm:max-w-[483px]">
                  <h3 className="text-white font-normal text-center sm:text-start font-aeoniktrials !leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl">
                    We&apos;re <span className="italic">architects</span> of
                    <span className="text-dodgerBlue block">growth</span>
                  </h3>
                  <p className="text-white hidden sm:flex pt-[18px] px-3 sm:px-0 font-aeoniktrials text-center sm:text-start text-sm sm:text-base md:text-lg lg:text-xl font-normal !leading-[170%] md:min-h-[68px]">
                    Building is in our DNA. We go the extra mile to grow
                    together with our partners, because that&apos;s how
                    partnerships become monumental opportunities. For us,
                    thriving together is a marathon, not a sprint.
                  </p>
                </div>
              </div>
              {/* Core Value 02 */}
              <div className="pt-10 flex justify-center sm:justify-end sm:items-center sm:ps-3 sm:w-1/2 order-3 w-full sm:pt-[60px] md:pt-20 lg:pt-[100px]">
                <p className="text-firefly font-aeoniktrials font-normal text-[113.251px] !leading-[100%] sm:text-[150px] md-text-[220px] lg:text-[328px]">
                  02
                </p>
              </div>
              {/* Core Value 03 */}
              <div className="pt-10 sm:w-1/2 order-5 w-full flex items-center justify-center sm:justify-start sm:pe-3 sm:pt-[60px] md:pt-20 lg:pt-[85px]">
                <p className="text-firefly text-center sm:text-start font-aeoniktrials font-normal text-[113.251px] !leading-[100%] sm:text-[150px] md-text-[220px] lg:text-[328px]">
                  03
                </p>
              </div>
              {/* Core Value 03 Content */}
              <div className="flex flex-col sm:justify-center sm:max-w-[520px] sm:ms-auto pt-5 sm:ps-3 sm:w-1/2 order-6 w-full sm:pt-[60px] md:pt-20 lg:pt-[85px]">
                <h3 className="text-white font-normal text-center sm:text-start font-aeoniktrials !leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl max-w-[320px] sm:max-w-[368px] mx-auto sm:mx-0">
                  We <span className="italic">always</span> stay one step
                  <span className="text-dodgerBlue">ahead</span>
                </h3>
                <p className="text-white hidden sm:flex px-3 sm:px-0 font-aeoniktrials pt-[18px] text-center sm:text-start text-sm sm:text-base md:text-lg lg:text-xl font-normal !leading-[170%] md:min-h-[68px]">
                  As your Amazon partner, we take charge of the platform and
                  take responsibility for it. We stay proactive, working to see
                  issues before they come, prevent them, and help you solve them
                  if some thing happens anyway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValue;
