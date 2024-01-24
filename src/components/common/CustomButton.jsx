import Link from "next/link";
import React from "react";
import { RightArrowIcon } from "./icons/Home";

const CustomButton = ({ title, url }) => {
  return (
    <>
      <Link
        href={url}
        className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[14px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%]"
      >
        {title}
        <span className="group-hover:translate-x-[4px] duration-300">
          <RightArrowIcon />
        </span>
      </Link>
    </>
  );
};

export default CustomButton;
