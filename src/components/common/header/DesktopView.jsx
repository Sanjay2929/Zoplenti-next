// Importing necessary dependencies and components from the specified paths
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PeopleIcon, RightArrowIcon, ShoppingIcon } from "../icons/Home";
import navigationLinks  from "../json/Navbar";
import NavbarLogo from "../json/NavbarLogo";

const DesktopView = () => {
  const pathName = usePathname();
  console.log("navigationLinksnavigationLinks",navigationLinks)
  return (
    <>
      <div className="items-center justify-between w-full hidden lg:flex">
        <div className="min-[1200px]:w-[332px] lg:w-[180px] flex items-start">
          <NavbarLogo />
        </div>
        <div className="lg:flex md:gap-4 lg:gap-8 hidden">
          {/* Mapping through navigationLinks array to render navigation links */}
          {/* {navigationLinks.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className={`text-white text-base lg:text-lg font-normal !leading-[170%] font-aeoniktrials hover:text-dodgerBlue transition-all duration-500 
                 ${pathName === data.link ? " !text-dodgerBlue" : ""}`}
            >
              {data.title}
            </Link>
          ))} */}
        </div>

        {/* Additional links container with specified gaps for different screen sizes */}
        <div className="lg:flex items-center justify-between lg:justify-end md:gap-4 lg:gap-5 h-full hidden flex-1 lg:flex-grow-0 lg:w-[332px] ms-3 min-[800px]:ms-8 lg:ms-0">
          <div className="flex gap-[14px]">
            <Link
              target="_blank"
              href="https://www.amazon.com/shops/zoplenti"
              className="flex items-center gap-[6px] md:gap-1 lg:gap-[6px] text-white font-aeoniktrials !leading-[170%] text-base lg:text-lg font-normal hover:text-dodgerBlue group transition-all duration-500"
            >
              <ShoppingIcon /> <span>Shop</span>
            </Link>
            <Link
              href="https://go.zoplenti.com/login"
              className="flex text-nowrap items-center gap-[6px] md:gap-1 lg:gap-[6px] text-white font-aeoniktrials !leading-[170%] text-base lg:text-lg font-normal hover:text-dodgerBlue group transition-all duration-500"
            >
              <PeopleIcon /> <span className="whitespace-nowrap">Sign in</span>
            </Link>
          </div>
          <Link
            href="/get-started"
            className="uppercase text-nowrap group shadow-[0px_0px_11px_0px_rgba(2,_169,_247,_0.33)] text-white font-aeoniktrials font-bold text-base py-[11px] px-[13.6px] rounded bg-dodgerBlue flex items-center gap-[6px] group hover:bg-transparent border border-solid border-dodgerBlue hover:border-white transition-all duration-300 !leading-[150%] whitespace-nowrap"
          >
            Get started
            <span className="group-hover:translate-x-[4px] duration-300">
              <RightArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

// Export the DesktopView component as the default export
export default DesktopView;
