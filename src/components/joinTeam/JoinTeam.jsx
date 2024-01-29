import React from "react";
import ContactForm from "./ContactForm";

export const JoinTeam = () => {
  return (
    <>
      {/* Container for the "Join Zoplenti" section */}
      <div
        id="contact"
        className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto overflow-hidden `}>
        {/* Flex container for layout */}
        <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] flex flex-col md:flex-row justify-between md:gap-6">
          {/* Left side: Text content */}
          <div className="md:max-w-[280px] lg:max-w-[420px] order-2 md:order-1 pt-[60px] sm:pt-20 md:pt-0 flex flex-col md:items-start items-center">
            {/* Section heading */}
            <h2 className="text-white font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-[40px] font-normal">
              Join our Zoplenti Team
            </h2>
            {/* First paragraph */}
            <p className="text-white text-center md:text-start pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] md:max-w-[439px]">
              We&apos;re not just hiring; we&apos;re building a team that will
              shape the future of Amazon retail.
            </p>
            {/* Second paragraph */}
            <p className="text-white text-center md:text-start pt-[18px] md:pt-6 font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] md:max-w-[439px]">
              If you bring Amazon and retail industry expertise and are ready
              for a fresh challenge, we want to hear from you.
            </p>
          </div>
          {/* Right side: JoinOurTeamForm component */}
          <div className="order-1 md:order-2">
            {/* Include the JoinOurTeamForm component */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinTeam;
