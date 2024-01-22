import React from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Navbar = ({ isBannerRemove }) => {
  return (
    <>
      {/* Main Header Section */}
      <div className="pe-4 md:pe-6 xl:pe-8 bg-midnight">
        <div className="flex justify-between items-center">
          {/* Desktop View */}
          <DesktopView />
          {/* Mobile View */}
          <div className="lg:hidden w-full">
            <MobileView isBannerRemove={isBannerRemove} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
