import React from "react";
import Image from "next/image";
import customerFeedbackData from "../common/json/ReviewCards";

const ReviewCards = () => {
  return (
    <>
      {/* Container for the Comment Cards Section */}
      <div className="container max-w-[1140px] px-4 sm:px-8 md:px-12 xl:px-3 mx-auto">
        <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-b-[1px] border-alto border-opacity-20">
          {/* Grid Layout for Comment Cards */}
          <div className="grid sm:grid-cols-2 h-full w-full gap-4 sm:gap-6">
            {/* Individual Comment Card */}
            {customerFeedbackData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="min-h-[239px] md:min-h-[207px] bg-alto transition-all duration-700 hover:scale-[1.01] rounded-lg">
                  <div className="py-5 ps-3 pe-4 md:pb-[25px] md:ps-4 flex items-start gap-[13px] h-full">
                    <Image
                      width={34}
                      className="mt-1 w-[27px] md:w-[34px]"
                      height="25"
                      src="/assets/images/cards/svg/comment-logo.svg"
                      alt="comment logo"
                    />
                    {/* Comment Title and Image */}
                    <div className="flex h-full flex-col justify-between">
                      <p
                        className={`${data.className} text-black text-sm md:text-base !leading-[170%] font-normal font-aeoniktrials`}>
                        {data.description}
                      </p>
                      <div className="flex justify-between items-end pt-3">
                        <p
                          className={`text-black relative before:absolute before:top-[-10px] before:start-0 before:h-[2px] before:bg-dodgerBlue before:w-[43px] text-sm md:text-base font-normal font-aeoniktrials ${data.titleStyle}`}>
                          {data.title}
                        </p>
                        <Image
                          width={data.imageWidth}
                          height={data.imageHeight}
                          src={data.image}
                          alt="image logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCards;
