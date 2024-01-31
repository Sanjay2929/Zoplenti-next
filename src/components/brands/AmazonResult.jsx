import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import amazonBetterResult from "../common/json/AmazonResult";
import Image from "next/image";

const AmazonResult = () => {
  //slider settings
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: "unslick",
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Container for the Amazon store section */}
      <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto">
        <div className="pt-[60px] pb-[72px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
          <h2 className="text-white text-center font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold px-5 md:px-0">
            We get you better results on
            <span className="sm:block">Amazon, hands off</span>
          </h2>
          {/* Title for the Amazon store section */}
          <p className="text-white text-center pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] max-w-[768px] mx-auto">
            Our strategy is tailored around what your brand needs to grow and
            perform at its best on Amazon. Our incentives are aligned: the more
            your brand grows, the more we sell.
          </p>
          {/* Slider for displaying Amazon store benefits */}
          <Slider
            {...settings}
            className="store_slider flex flex-row justify-center flex-wrap min-[992px]:gap-y-6 mx-[-12px] pt-2 lg:pt-20">
            {amazonBetterResult.map((obj, i) => {
              return (
                <div
                  className="w-1/2 md:w-4/12 min-[992px]:w-3/12 px-3 pt-6 py-3 min-[992px]:py-0"
                  key={i}>
                  <div className="rounded-xl border-[1px] border-solid bg-blackPearl border-oxfordBlue h-full py-6 px-1 hover:border-dodgerBlue transition-all duration-300 group">
                    <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-20 sm:h-20 rounded-full bg-blueZodiac mx-auto">
                      <Image
                        width={45}
                        height={45}
                        src={obj.image}
                        alt="card"
                        quality={100}
                      />
                    </div>
                    <p
                      className={`text-white font-aeoniktrials min-h-[64px] pt-4 max-w-[192px] mx-auto text-center !leading-[120%] text-base sm:text-lg md:text-xl lg:text-2xl ${i === 2 || i === 6 ? "md:!max-w-[192px] !max-w-[140px]" : i === 3 ? "md:!max-w-[153px] !max-w-[116px]" : i === 5 ? "md:!max-w-[192px] !max-w-[120px]" : i === 7 && "!max-w-[173px]"}`}>
                      {obj.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AmazonResult;
