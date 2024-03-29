// Importing necessary dependencies and components from the specified paths
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PeopleIcon, ShoppingIcon } from "../icons/Home";
import navList from "../json/Header";
import CustomButton from "../CustomButton";
import Logo from "./Logo";

// Define the DesktopView component
const DesktopView = () => {
  // Get the current pathname using usePathname hook
  const currentPath = usePathname();

  return (
    <>
      {/* Desktop navigation bar layout */}
      <div className="items-center justify-between w-full hidden lg:flex">
        {/* Logo section */}
        <div className="min-[1200px]:w-[332px] lg:w-[180px] flex items-start">
          <Logo />
        </div>

        {/* Navigation links section */}
        <div className="lg:flex md:gap-4 lg:gap-8 hidden">
          {/* Mapping through navigationLinks array to render navigation links */}
          {navList.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.link}
              className={`text-white text-base lg:text-lg font-normal !leading-[170%] font-aeoniktrials hover:text-dodgerBlue transition-all duration-500 
                 ${currentPath === navItem.link ? " !text-dodgerBlue" : ""}`}>
              {navItem.title}
            </Link>
          ))}
        </div>

        {/* Additional links container with specified gaps for different screen sizes */}
        <div className="lg:flex items-center justify-between lg:justify-end md:gap-4 lg:gap-5 h-full hidden flex-1 lg:flex-grow-0 lg:w-[332px] ms-3 min-[800px]:ms-8 lg:ms-0">
          {/* Shop and Sign in links */}
          <div className="flex gap-[14px]">
            <Link
              target="_blank"
              href="https://www.amazon.com/shops/zoplenti"
              className="flex items-center gap-[6px] md:gap-1 lg:gap-[6px] text-white font-aeoniktrials !leading-[170%] text-base lg:text-lg font-normal hover:text-dodgerBlue group transition-all duration-500">
              <ShoppingIcon /> <span>Shop</span>
            </Link>

            <Link
              href="https://go.zoplenti.com/login"
              className="flex text-nowrap items-center gap-[6px] md:gap-1 lg:gap-[6px] text-white font-aeoniktrials !leading-[170%] text-base lg:text-lg font-normal hover:text-dodgerBlue group transition-all duration-500">
              <PeopleIcon /> <span className="whitespace-nowrap">Sign in</span>
            </Link>
          </div>

          {/* Get started button */}
          <CustomButton title="Get started" url="/get-started" />
        </div>
      </div>
    </>
  );
};

// Export the DesktopView component as the default export
export default DesktopView;
