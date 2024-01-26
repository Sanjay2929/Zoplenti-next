import React from "react";
import CookiePolicy from "./CookiePolicy";
import Link from "next/link";

const PrivacyPolicyDescription = () => {
  return (
    <>
      {/* Container for the Privacy Policy section */}
      <div
        className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto overflow-hidden `}>
        {/* Border at the bottom for visual separation */}
        <div className="border-b border-alto border-opacity-20">
          {/* Content wrapper with maximum width and padding */}
          <div className="max-w-[983px] md:mx-auto pb-[60px] sm:pb-20 md:pb-[100px] lg:pb-[120px] ">
            {/* Heading for the Use of Data section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              USE OF DATA
            </h4>
            {/* Introduction paragraph explaining the purposes of collecting data */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              We use the collected data for the following purposes:
            </p>
            {/* Ordered list detailing the purposes of using collected data */}
            <ol className="list-decimal ps-[18px] pt-4">
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To provide the services and/or information that you have asked
                for.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To send our newsletter but you can unsubscribe by clicking the
                unsubscribe link or emailing{" "}
                <Link
                  href="mailto:hello@zoplenti.com"
                  target="_blank"
                  className="text-dodgerBlue">
                  hello@zoplenti.com
                </Link>
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To respond to a court order, regulatory request or legal
                process.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To enforce our rights, carry out our obligations, prevent fraud,
                and facilitate disputes between users.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To accomplish any other purpose for which the information was
                provided.
              </li>
            </ol>
            {/* Heading for the Disclosure of Data section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              DISCLOSURE OF DATA
            </h4>
            {/* Introduction paragraph explaining the disclosure of collected data */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              In addition to sharing your data as described above, we may
              disclose the collected personal information as follows:
            </p>
            {/* Ordered list detailing the ways of disclosing collected data */}
            <ol className="list-decimal ps-[18px] pt-4">
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                In case there is a sale, merger or other transfer in the
                ownership of our Platform, the successor will receive personal
                information about our Platform users along with the assets
                transferred.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                To our contractors, business partners, third party service
                providers and other entities or individuals who provide support
                for our Platform. For example, integration and API partners.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                If we decide that disclosure is appropriate to protect the
                property, safety, rights of the Platform, its users or the
                public.
              </li>
              <li className="font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                Aggregated, anonymized information that does not identify any
                particular user can be disclosed without restriction.
              </li>
            </ol>
            <CookiePolicy />
            {/* Heading for the Data Security section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              DATA SECURITY
            </h4>
            {/* Paragraph explaining data security measures */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              Only our administrators are allowed to access our Platform’s
              password-protected server where your personal information is
              stored.  We utilize SSL. However, any transmission of information
              over the Internet has its inherent risks, so we cannot guarantee
              the absolute security of your personal information. Transmit
              personal information over the Internet at your own risk. We shall
              not be liable for circumvention of security measures or privacy
              settings on the Platform. It is your responsibility to keep your
              login credentials, if any, confidential.
            </p>
            {/* Heading for the Children’s Privacy section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              CHILDREN’S PRIVACY
            </h4>
            {/* Paragraph explaining the policy regarding children's information */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              We do not knowingly collect any personal information about
              children under the age of 13. Our Platform is not directed to
              children under the age of 13. If we become aware that a child
              under 13 has provided any personal info, it will be erased from
              our database as soon as reasonably possible, except when we need
              to keep that information for legal purposes or to notify a parent
              or guardian. However, portions of this data may remain in back-up
              archives or weblogs even after we erase it from our databases. If
              a parent or guardian believes that a child has sent us personal
              information, send us an e-mail.
            </p>
            {/* Heading for the Users’ Rights, CCPA section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              USERS’ RIGHTS, CCPA
            </h4>
            {/* Ordered list of users' rights with explanations */}
            <ol className="list-decimal ps-[18px] pt-4">
              <li className="lg:pe-4 font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                We will not share your personal information with third parties
                for their direct marketing purposes to the extent it is
                forbidden by law. If our practices change, we will do so in
                accordance with applicable laws and will notify you in advance.
                California law requires that operators of online services
                disclose how they respond to a Do Not Track signal. Some
                browsers have incorporated “Do Not Track” features. Most of
                these features, when turned on, send a signal or preference to
                the online service that a user visits, indicating that the user
                does not wish to be tracked.  At this time we do not respond to
                the Do Not Track signal.
              </li>
              <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                You can request disclosure of your information collected by us
                by writing to the email at the end of this Policy. We will then
                provide the requested information, its sources and purposes of
                use, in a portable and easily accessible format within 45 days
                of the request.
              </li>
              <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                You have the right to request deletion of your personal
                information from our systems by submitting a request to the
                email at the end of this Policy.
              </li>
              <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
                You have the right to nondiscrimination for exercising your
                rights. That means you cannot be denied goods or services,
                charged different prices, or provided different quality of
                goods/services for asserting your legal rights.
              </li>
            </ol>
            {/* Heading for the International Transfer section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              INTERNATIONAL TRANSFER
            </h4>
            {/* Paragraph explaining the international transfer of personal information */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              We process your personal information in the United States.  This
              is where it will be transferred to in case you are located
              somewhere else. By submitting any personal information to us, you
              agree to its transfer to and processing in the United States.
            </p>
            {/* Heading for the Accessing and Correcting Your Personal Information section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION
            </h4>
            {/* Paragraph explaining how users can view and edit their account information */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              You can view and edit some of your account information yourself
              after logging in. If you terminate an account, we may retain some
              information for as long as necessary to evaluate Platform usage,
              troubleshoot issues, resolve disputes and collect any fees owed.
              If you have any questions or wish to ask to access, modify or
              delete any of your personal data on our Platform, please contact
              us. Note that we can deny your request if we think it would
              violate any law or cause the information to be incorrect.
            </p>
            {/* Heading for the Contact Us section */}
            <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              CONTACT US
            </h4>
            {/* Paragraph providing contact information for privacy policy inquiries */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              If you have any questions about our privacy policy, please contact
              us.
            </p>
            {/* Heading for the Zoplenti Contact Information section */}
            <h4 className="text-dodgerBlue pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
              Zoplenti
            </h4>
            {/* Paragraph providing Zoplenti's address */}
            <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
              401 East Jackson Street, Suite 2340
              <span className="block">Tampa, FL 33602</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyDescription;
