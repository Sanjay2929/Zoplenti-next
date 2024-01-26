import React from "react";

const CookiePolicy = () => {
  return (
    <>
      {/* Heading for the Cookie Policy section */}
      <h4 className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 uppercase font-aeoniktrials text-2xl md:text-[28px] lg:text-[32px] font-bold !leading-[135%]">
        COOKIE POLICY
      </h4>
      {/* Introduction paragraph explaining what cookies are and their purpose */}
      <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
        Cookies are small bits of text data placed on your device when you visit
        sites. Cookies record data about your activity, such as which pages you
        view and what you click on. Cookies assist our Platform to recognize
        your device when you return. For example, cookies can help us to
        remember your preferences, username, analyze the performance of our
        Platform and recommend content that may be most relevant to your
        interests.
      </p>
      {/* Explanation of reasons for using cookies */}
      <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
        Here are the reasons we may use cookies:
      </p>
      {/* Ordered list detailing the reasons for using cookies */}
      <ol className="list-decimal ps-[18px] pt-4">
        <li className="lg:pe-3 font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
          Analytics. This type of cookies shows us which pages users view, which
          links are popular, etc. These cookies only provide anonymized
          information that does not identify anybody personally. This
          information is then bundled with the similar information from the
          other users, so that we can analyze the general usage patterns.
        </li>
        <li className="lg:pe-3 font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
          Essential cookies. These are necessary to provide the services that
          you have asked for. Without these essential cookies, our Platform
          would not be able to operate. They are necessary to enable users to
          navigate through the Platform and use its main features. E.g.,
          essential cookies identify registered users so that they can access
          member-only areas of the site. Essential cookies keep users logged in.
          If a subscriber disables essential cookies, that subscriber won&apos;t
          be able to get to all of the content that a subscription entitles them
          to. These cookies don&apos;t collect information that could be
          utilized for the purposes of marketing or figuring out what places on
          the internet you have visited.
        </li>
        <li className="lg:pe-3 font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
          To show relevant advertising. If we allow ads on our Platform, they
          can contain cookies in order to provide ads most relevant to your
          interests. They can also help limit the number of times you see a
          particular ad and to assess the effectiveness of the advertising
          campaign.
        </li>
        <li className="lg:pe-3 font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
          To improve your browsing experience. This type of cookie enables the
          site to remember users&apos; preferences and settings, such as
          geographic region or language. They can also be used to restrict the
          number of times an ad is shown, to remember which forms you have
          already filled in, so that you don&apos;t have to do it again.
        </li>
        <li className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
          To implement tracking technology on our Platform. This tracking does
          not use your personal information; it uses deidentified data (i.e.,
          data that cannot be tied specifically to you). We will not combine
          this data with your other personal information without your prior
          express permission.
        </li>
      </ol>
      <p className="font-aeoniktrials pt-4 font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] text-white">
        There is a way to turn off cookies by going to your browser&apos;s Help
        or Settings menu. However, keep in mind that disabling cookies may limit
        your use of the Platform and/or delay or affect the way in which it
        operates.
      </p>
    </>
  );
};

export default CookiePolicy;
