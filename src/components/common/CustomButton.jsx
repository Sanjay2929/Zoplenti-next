import Link from "next/link";
import React from "react";
import { RightArrowIcon } from "./icons/Home";

const CustomButton = ({ title, url, clickState, loading }) => {
  return (
    <>
      {url !== "null" ? (
        <Link
          // onClick={() => clickState(false)}
          href={url}
          className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%]">
          {title}
          <span className="group-hover:translate-x-[4px] duration-300">
            <RightArrowIcon />
          </span>
        </Link>
      ) : (
        <button className="w-full uppercase shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] justify-center text-white font-aeoniktrials h-[48px] font-bold !leading-[150%] text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center border border-dodgerBlue hover:border-white hover:bg-transparent transition-all duration-300 gap-2 group ">
          {loading ? (
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave"></span>
              <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave2"></span>
              <span className="w-2 h-2 rounded-full bg-white inline-block animate_wave3"></span>
            </div>
          ) : (
            <>
              SUBMIT
              <span className="group-hover:translate-x-[4px] duration-300">
                <RightArrowIcon />
              </span>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default CustomButton;
