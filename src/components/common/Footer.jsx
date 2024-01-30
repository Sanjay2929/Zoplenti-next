import Image from "next/image";
import Link from "next/link";
import React from "react";
import navigationLinks from "./json/Footer.json";
import CustomButton from "./CustomButton";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* Main Container for Footer and background image */}
      <div className="md:bg-footerbg bg-no-repeat bg-bottom bg-cover">
        {/* Container for Content */}
        <div className="container sm:px-8 md:px-12 xl:px-3 max-w-[1140px] px-4 mx-auto">
          <div className="pt-[61px] sm:pt-20 md:py-[100px] lg:pt-[114px] sm:pb-[70px] lg:pb-[106px]">
            <div className="flex flex-col sm:flex-row justify-between items-start md:gap-10">
              {/* footer logo */}
              <Link href="/" className="flex items-center gap-1">
                <Image
                  className="w-[33px] sm:w-10 md:w-[50px]"
                  width={50}
                  height={40}
                  src="/assets/footer/png/footer-logo.png"
                  alt="footer-logo"
                />
                <span className="uppercase font-Jost text-white font-medium text-2xl md:text-[28px] tracking-[0.84px] text-shadow ">
                  Zoplenti
                </span>
              </Link>
              <div className="flex flex-wrap flex-row w-full sm:w-auto pt-9 sm:py-0 pb-8">
                {/* Quick Links and Legal Information */}
                <div className="w-1/2 sm:w-full">
                  <p className="text-white font-aeoniktrials text-base md:text-lg !leading-[160%] font-normal">
                    Quick Links
                  </p>
                  <div className="flex flex-col gap-[10px] pt-4">
                    {navigationLinks.map((obj, i) => {
                      return (
                        <Link
                          key={i}
                          href={obj.link}
                          className="text-white hover:text-dodgerBlue duration-500 transition-all font-aeoniktrials text-sm md:text-base !leading-[170%] font-normal opacity-80">
                          {obj.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* Legal Information Section (visible on small screens) */}
                <div className="w-1/2 sm:hidden flex flex-col">
                  <p className="text-white font-aeoniktrials text-base md:text-lg !leading-[160%] font-normal">
                    Legal
                  </p>
                  <Link
                    href="/privacy"
                    className="text-white  hover:text-dodgerBlue duration-500 transition-all font-aeoniktrials text-sm md:text-base !leading-[170%] font-normal opacity-80 mt-4">
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-white  hover:text-dodgerBlue duration-500 transition-all font-aeoniktrials text-sm md:text-base !leading-[170%] font-normal opacity-80 mt-[10px]">
                    Terms of Service
                  </Link>
                </div>
              </div>
              {/* Legal Information Section (visible on larger screens) */}
              <div className="sm:flex flex-col hidden">
                <p className="text-white font-aeoniktrials text-base md:text-lg !leading-[160%] font-normal">
                  Legal
                </p>
                <Link
                  href="/privacy-policy"
                  className="text-white  hover:text-dodgerBlue duration-500 transition-all font-aeoniktrials text-sm md:text-base !leading-[160%] font-normal opacity-80 mt-4">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-services"
                  className="text-white  hover:text-dodgerBlue duration-500 transition-all font-aeoniktrials text-sm md:text-base !leading-[160%] font-normal opacity-80 mt-[10px]">
                  Terms of Service
                </Link>
              </div>
              <div className="lg:me-[56px]">
                <CustomButton title="Get started" url="/get-started" />
              </div>
            </div>
          </div>
        </div>
        {/* Separator Line */}
        <div className="sm:border-t-[1px] sm:border-alto sm:border-opacity-20">
          <div className="container md:px-12 sm:px-8 xl:px-3 max-w-[1140px] px-4 mx-auto">
            <div className="sm:py-9 lg:pt-[52px] lg:pb-[70px] pb-8">
              <div className="flex flex-col lg:flex-row md:justify-between">
                <div className="hidden sm:flex min-[840px]:gap-6 gap-7">
                  <div className="md:max-w-[184px] max-w-[153px]">
                    <p className="text-white font-aeoniktrials font-normal text-base !leading-[160%]">
                      Headquarters
                    </p>
                    <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] opacity-50 pt-[10px] md:pt-2">
                      401 E Jackson St, Suite 2340 Tampa, FL 33602
                    </p>
                  </div>
                  <div className="flex flex-col max-w-[178px] sm:max-w-[170px] lg:max-w-[192px] md:w-full">
                    <p className="text-white font-aeoniktrials font-normal text-base !leading-[160%]">
                      Distribution Centers
                    </p>
                    <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] opacity-50 pt-4 md:pt-2">
                      107 Southchase Blvd, Suite A Fountain Inn, SC 29644
                    </p>
                  </div>
                  <div className="max-w-[160px] lg:ps-2">
                    <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] opacity-50 pt-[42px] md:pt-[34px]">
                      55 Wentworth Ave Londonderry, NH 03053
                    </p>
                  </div>
                </div>
                <div className="max-w-[233px] pt-8 lg:pt-0">
                  <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] opacity-50 lg:text-end">
                    {" "}
                    ⓒ{year} Zoplenti. All Rights Reserved.
                  </p>
                  <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] pt-[2px] lg:text-end">
                    {" "}
                    <span className="opacity-50">Have a question? </span>
                    <Link
                      className="hover:text-curiousBlue transition-all duration-500 opacity-50 hover:opacity-100"
                      href="tel:1-833-838-9101">
                      1-833-838-9101
                    </Link>
                  </p>
                  <p className="text-white font-aeoniktrials font-normal text-sm !leading-[170%] pt-[2px] lg:text-end">
                    {" "}
                    <span className="opacity-50">Ready to join us?</span>{" "}
                    <span className="relative before:absolute before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:opacity-50 opacity-50 before:hover:bg-curiousBlue hover:text-curiousBlue before:hover:opacity-100 before:hover:w-0 before:duration-200 hover:opacity-100 transition-all duration-500">
                      <Link href="/join-our-team">We&apos;re hiring!</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
