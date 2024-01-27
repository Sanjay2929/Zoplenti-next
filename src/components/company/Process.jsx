import React from "react";
import ProcessSteps from "../common/ProcessSteps";
import {
  AmazonSellerIcon,
  CheckListIcon,
  GrowingAmercianCompanyIcon,
} from "../common/icons/Company";

export const Process = () => {
  return (
    <>
      <ProcessSteps
        borderStyle="border-opacity-20 border-y border-alto"
        containerStyle="!pt-0"
        hiddenImage="!hidden"
        step_first_title="Top Amazon Seller"
        step_first_description={[
          "We are ranked among the",
          <span key="textBlod" className="font-bold">
            {" "}
            top 0.01% of Amazon sellers{" "}
          </span>,
          "with a flawless",
          <span key="boldtext" className="font-bold">
            {" "}
            100% positive rating{" "}
          </span>,
          "from customers. And we’re very, very proud of it.",
        ]}
        step_second_title="Inc. 5000"
        step_second_description={[
          "In 2022 we were recognized as one of",
          <span key="textBlod" className="font-bold">
            {" "}
            Inc.’s 5000 fastest growing American companies,{" "}
          </span>,
          "and we keep growing.",
        ]}
        step_third_title="Active since 2016"
        step_third_description={[
          "We are a family-run business,",
          <span key="textBlod" className="font-bold">
            {" "}
            active since 2016{" "}
          </span>,
          "and headquartered in Tampa, Florida.",
        ]}
        step_first_icon={<AmazonSellerIcon />}
        step_second_icon={<GrowingAmercianCompanyIcon />}
        step_thrid_icon={<CheckListIcon />}
      />
    </>
  );
};
