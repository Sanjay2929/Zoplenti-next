import Link from "next/link";
import { RightArrowIcon } from "../common/icons/Home";
import CustomButton from "../common/CustomButton";

const JoinZoplenti = (props) => {
  return (
    <>
      {/* Section for Zoplenti family information */}
      <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto">
        <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Left Content */}
            <div className="md:w-1/2 md:pe-3">
              <h2 className="text-white text-center md:text-start font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold px-5 md:px-0">
                Join the Zoplenti family
              </h2>
              <p className="text-white text-center px-1 sm:px-0 md:text-start md:pe-5 pt-[18px] md:pt-6 font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
                {props.description}
              </p>
              {/* Links to Brands and Distributors */}
              <div className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-start gap-4 pt-12">
                <CustomButton title=" Brands" url="/brands" />
                {/* <Link
                  href="/brands"
                  className={`uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full sm:w-1/2 md:w-auto justify-center ${props.buttonHidden}`}>
                  Brands
                  <span className="group-hover:translate-x-[4px] duration-300">
                    <RightArrowIcon />
                  </span>
                </Link> */}
                <CustomButton title={props.title} url={props.url} />

                {/* <Link
                  href={props.url}
                  className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] w-full sm:w-1/2 md:w-auto justify-center">
                  {props.button}
                  <span className="group-hover:translate-x-[4px] duration-300">
                    <RightArrowIcon />
                  </span>
                </Link> */}
              </div>
            </div>
            {/* Separator for Mobile View */}
            <div className="md:hidden border-b-[1px] border-alto border-opacity-20 pt-[60px] sm:pt-20"></div>
            {/* Right Content */}
            <div className="md:w-1/2 pt-[60px] sm:pt-20 md:pt-0 md:ps-3 lg:ps-7">
              <div className="grid grid-cols-2 gap-12 md:gap-6 lg:gap-8 xl:gap-[38px]">
                {/* Statistic Block 1 */}
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-dodgerBlue lg:ps-6 font-aeoniktrials font-bold !leading-[136%] sm:!leading-[177.778%] text-[28px] md:text-3xl lg:text-4xl">
                    Top 0.01%
                  </h3>
                  <p className="text-white pe-5 lg:ps-6 md:pe-0 font-aeoniktrials text-sm md:text-base lg:text-lg font-normal !leading-[170%]">
                    Of all Amazon sellers
                  </p>
                </div>
                {/* Statistic Block 2 */}
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-dodgerBlue font-aeoniktrials font-bold !leading-[136%] sm:!leading-[177.778%] text-[28px] md:text-3xl lg:text-4xl">
                    100%
                  </h3>
                  <p className="text-white font-aeoniktrials text-sm md:text-base lg:text-lg font-normal !leading-[170%]">
                    Lifetime seller rating of 5 stars
                  </p>
                </div>
                {/* Statistic Block 3 */}
                <div className="flex flex-col gap-[5px] xl:pt-10">
                  <h3 className="text-dodgerBlue lg:ps-6 font-aeoniktrials font-bold !leading-[136%] sm:!leading-[177.778%] text-[28px] md:text-3xl lg:text-4xl">
                    1,000,000+
                  </h3>
                  <p className="text-white lg:ps-6 font-aeoniktrials text-sm md:text-base lg:text-lg font-normal !leading-[170%]">
                    Satisfied customers
                  </p>
                </div>
                {/* Statistic Block 4 */}
                <div className="flex flex-col gap-[5px] xl:pt-10">
                  <h3 className="text-dodgerBlue font-aeoniktrials font-bold !leading-[136%] sm:!leading-[177.778%] text-[28px] md:text-3xl lg:text-4xl">
                    100+
                  </h3>
                  <p className="text-white font-aeoniktrials text-sm md:text-base lg:text-lg font-normal !leading-[170%]">
                    Industry leading partners
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

export default JoinZoplenti;
