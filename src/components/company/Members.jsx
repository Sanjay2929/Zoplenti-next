"use client";
import Image from "next/image";
import React, { useState } from "react";
import memberList from "../common/json/CompanyMembers.json";
const Mambers = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (val) => {
    setIsHovered(val);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      {/* Container for the team members section */}
      <div className="container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] px-4 mx-auto">
        <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px]">
          {/* Heading for the team members section */}
          <h2 className="text-white text-center md:text-start font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold pb-10 sm:pb-12 md:pb-[60px] lg:pb-[70px]">
            Meet the team behind Zoplenti
          </h2>
          {/* Team members grid */}
          <div className="flex flex-wrap flex-row  gap-y-7 mx-[-12px]">
            {memberList.map((obj, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-8 justify-center lg:justify-start w-1/2 md:w-4/12 lg:w-3/12 px-3">
                  <div className="cursor-pointer group rounded-full relative flex items-start duration-300">
                    {/* Team member image */}
                    <Image
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                      height={261}
                      width={261}
                      src={obj.image}
                      className={`rounded-full duration-300 ${
                        isHovered === i
                          ? "opacity-100"
                          : `${
                              isHovered !== null ? "!opacity-10" : "opacity-100"
                            }`
                      }`}
                      alt="image"
                    />
                    {/* Team member card details */}
                    <div
                      className={`${
                        i === 0
                          ? "top-full start-0 mt-3 md:top-0 md:mt-0 md:start-full md:ms-3"
                          : i === 1
                          ? "top-full end-0 mt-3 md:end-1/2 md:translate-x-1/2 lg:top-0 lg:mt-0 lg:translate-x-0 lg:end-auto lg:start-full lg:ms-3"
                          : i === 2
                          ? "top-full start-0 mt-3 md:top-0 md:mt-0 md:start-auto md:end-full md:me-3"
                          : i === 3
                          ? "top-full end-0 mt-3 md:top-0 md:mt-0 md:start-full md:ms-3 lg:start-auto lg:end-full lg:ms-0 lg:me-3"
                          : i === 4
                          ? "top-full start-0 mt-3 md:start-1/2 md:-translate-x-1/2 lg:translate-x-0 lg:start-full lg:top-0 lg:mt-0 lg:ms-3"
                          : i === 5
                          ? "top-full end-0 mt-3 md:top-0 md:mt-0 md:start-auto md:end-full md:me-3 lg:me-0 lg:end-auto lg:top-0 lg:mt-0 lg:start-full lg:ms-3"
                          : i === 6
                          ? "top-full start-0 mt-3 md:top-0 md:mt-0 md:start-full md:ms-3 lg:ms-0 lg:start-auto lg:end-full lg:me-3"
                          : i === 7
                          ? "top-full end-0 mt-3 md:end-1/2 md:translate-x-1/2 lg:translate-x-0 lg:end-full lg:mt-0 lg:me-3 lg:top-0"
                          : i === 8
                          ? "top-full start-0 mt-3 md:top-0 md:mt-0 md:start-auto md:end-full md:me-3 lg:me-0 lg:end-auto lg:start-full lg:ms-3"
                          : i === 9
                          ? "top-full end-0 mt-3 md:top-0 md:mt-0 md:start-full md:ms-3"
                          : i === 10
                          ? "top-full start-0 mt-3 md:start-1/2 md:-translate-x-1/2 lg:translate-x-0 lg:mt-0 lg:bottom-auto lg:top-0 lg:start-auto lg:end-full lg:me-3"
                          : i === 11
                          ? "top-full end-0 mt-3 md:top-0 md:mt-0 md:bottom-auto md:end-full md:me-3"
                          : ""
                      } absolute hidden group-hover:block border border-dodgerBlue rounded-xl bg-deepCove p-4 sm:p-6 md:p-8 xl:p-9 hover_blur_filter z-20 w-[350px] sm:w-[450px] md:w-[470px] lg:w-[490px] xl:w-[569px]`}>
                      <h3 className="text-white font-aeoniktrials font-normal text-2xl sm:text-[28px] md:text-3xl lg:text-4xl">
                        {obj.title}
                      </h3>
                      <p className="text-white opacity-80 pt-1 font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
                        {obj.role}
                      </p>
                      <p className="text-white pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]">
                        {obj.content}
                      </p>
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

export default Mambers;
