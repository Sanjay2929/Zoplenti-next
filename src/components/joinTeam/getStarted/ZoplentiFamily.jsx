import Image from "next/image";
import React from "react";
import featuresList from "../../common/json/GetStarted.json";
import ContactForm from "./ContactForm";

const ZoplentiFamily = () => {
  return (
    <div className="container max-w-[1140px] px-4 sm:px-8 mx-auto md:px-12 xl:px-4 flex justify-between py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] relative z-10 lg:flex-row flex-col">
      {/* Left side content: Text and Features List */}
      <div className="lg:w-1/2 lg:max-w-[465px] w-full lg:pe-[30px] order-2 lg:order-1 pt-[60px] sm:pt-20 lg:pt-0">
        {/* Section heading */}
        <h2 className="text-white font-aeoniktrials text-center mx-auto lg:text-start lg:mx-0 text-[28px] md:text-4xl !leading-[133.333%] lg:text-[40px] font-normal">
          Join the Zoplenti family
        </h2>
        {/* Section description */}
        <p className="font-aeoniktrials text-center mx-auto lg:mx-0 lg:text-start font-normal sm:text-base md:text-lg lg:text-xl text-sm text-white pt-[18px] sm:pb-10 pb-5 lg:max-w-[465px]">
          Delivering extraordinary results on Amazon is our bread and butter. If
          you&apos;re an ambitious brand or a large distributor, fill out this
          form and we&apos;ll get back to you to explore what opportunities we
          can pursue together.
        </p>
        <div className="flex flex-wrap ">
          {featuresList.map((obj, i) => {
            return (
              <div
                key={i}
                className="flex flex-col lg:flex-row lg:w-full sm:w-1/2 w-full gap-x-[15.5px] items-center pb-5">
                {/* Feature Icon */}
                <div className="sm:w-[53px] sm:h-[53px] w-[45px] h-[45px] flex justify-center items-center bg-tealishBlue rounded-full">
                  <Image
                    className="sm:w-[27px] h-auto w-[22px]"
                    width={27}
                    height={27}
                    src={obj.image}
                    alt="image"
                  />
                </div>
                <h5 className="font-aeoniktrials pt-3 lg:pt-0 font-normal lg:text-2xl md:text-xl sm:text-lg text-base text-white">
                  {obj.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      {/* Right side content: ZoplentiFamilyForm component */}
      <div className="lg:w-1/2 lg:max-w-[556px] w-full max-w-[768px] mx-auto lg:me-0 order-1 lg:order-2">
        {/* Include the ZoplentiFamilyForm component */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ZoplentiFamily;
