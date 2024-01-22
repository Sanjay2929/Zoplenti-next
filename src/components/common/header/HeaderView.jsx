import React from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const HeaderView = ({ isBannerVisible }) => {
  return (
    <>
      {/* Main Header Section */}
      <div className="pe-4 md:pe-6 xl:pe-8 bg-midnight">
        <div className="flex justify-between items-center">
          {/* Desktop View */}
          <DesktopView />
          {/* Mobile View */}
          <div className="lg:hidden w-full">
            <MobileView isBannerVisible={isBannerVisible} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
