import React from "react";

export const TermsOfUseDescription = () => {
  return (
    <>
      {/* Container for the Terms of Use section */}
      <div
        className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto overflow-hidden `}>
        {/* Content wrapper with maximum width */}
        <div className="max-w-[983px] md:mx-auto pt-[60px] sm:pt-20 md:pt-[100px] lg:pt-[120px]">
          {/* Heading for the Acceptance section */}
          <h4 className="text-white uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
            ACCEPTANCE
          </h4>
          {/* Paragraph introducing the Terms of Service and Platform ownership */}
          <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            These Terms of Service (the “Terms”) govern your visits to
            Zoplenti.com (the “Platform”). SMH Enterprises, L.L.C., DBA ZOPLENTI
            (“we,” “us,” or “our”) owns and operates this Platform. 
          </p>
          {/* Additional information about the legal force of the Terms */}
          <p className="font-aeoniktrials pt-6 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            These Terms have a force of a legally binding agreement, even if you
            are simply browsing without intention to contact us or register an
            account. The term &ldquo;you&ldquo; refers to any user of the
            Platform. Privacy Policy is another important document that you
            should familiarize yourself with because it describes our practices
            with respect to your personal information. You cannot visit the
            Platform if you do not agree to these Terms or the Privacy Policy.
            Sometimes we modify these Terms. We don&apos;t notify users about
            every change to the Terms but you can see the date of the last
            update at the top of this page. If you still wish to visit the
            Platform after said date, that constitutes your agreement to the
            updates.
          </p>
          {/* Heading for the Venue section */}
          <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
            VENUE
          </h4>
          {/* Paragraph about third-party references and disclaimer of liability */}
          <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            Third Parties. The Platform may contain references to third party
            websites and rely on third party services for support. We shall not
            be liable for any third party venues and cannot guarantee their
            performance. We do not monitor all content submitted to the
            Platform. We shall not be liable for user submissions or any third
            party content on the Platform.
          </p>
          {/* Additional paragraph about professional advice disclaimer */}
          <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
            No Professional Advice Whatsoever. Nothing on our Platform
            constitutes legal, career or any other type of professional advice
            on our part. Your use of the Platform does not form an
            attorney-client, employer-employee or any other professional
            relationship between you and us. If you engage anybody listed on our
            Platform, we are not a party to your interactions and transactions.
          </p>
        </div>
      </div>
    </>
  );
};
