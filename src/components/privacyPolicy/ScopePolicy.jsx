import React from "react";

const ScopePolicy = () => {
  return (
    <>
      {/* Container for the Scope Policy section */}
      <div
        className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto overflow-hidden `}>
        {/* Content wrapper with maximum width and padding */}
        <div className="max-w-[983px] md:mx-auto pt-[60px] sm:pt-20 md:pt-[100px] lg:pt-[120px]">
          {/* Heading for the Scope section */}
          <h4 className="text-white uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
            SCOPE
          </h4>
          {/* Paragraph explaining the purpose of the Privacy Policy */}
          <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            We care about your online privacy. This Privacy Policy (the
            “Policy”) describes our practices with respect to collection, use,
            disclosure and protection of your information when you visit
            Zoplenti.com ( the “Platform”). Note that this Policy is only valid
            on our Platform, not any third party networks, even if they are
            referenced on our Platform. It is your responsibility to familiarize
            yourself and comply with any relevant third party networks.
          </p>
          {/* Additional paragraph about the legal acceptance of the Policy */}
          <p className="font-aeoniktrials pt-6 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            If you visit our Platform, that signifies your legal acceptance of
            the Policy. You must exit the Platform if you do not agree with any
            provision(s) of this Privacy Policy. We reserve the right to change
            this Policy at any time at our sole discretion. The effective date
            of the last update is at the top of this page, so visit it
            occasionally to see if there are any changes.
          </p>
          {/* Heading for the Collection of User Data section */}
          <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
            COLLECTION OF USER DATA
          </h4>
          {/* Paragraph explaining the types of information collected */}
          <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            Here are the types of information regarding the Platform users we
            may collect:
          </p>
          {/* Ordered list of types of user data with nested unordered list */}
          <ol className="list-decimal ps-[18px] pt-4">
            <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Personal Info:
            </li>
            <ul className="list-disc ps-1">
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                Name.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                Email
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                Address
              </li>
            </ul>
            <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Payment Information
            </li>
            <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Communications: if you contact us for any reason, we will receive
              whatever information you voluntarily provide (e.g., your feedback,
              ratings and reviews).
            </li>
            <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Your Devices: device identifiers, phone manufacturer and carrier,
              browser, IP address, operating system version, mobile advertising
              identifiers, application installations.
            </li>
            <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Platform Interaction: we see what content our Platform users
              access, when and how they interact with the Platform
              content/pages.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ScopePolicy;
