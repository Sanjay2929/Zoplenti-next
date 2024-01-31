import QuestionBrands from "../brands/QuestionBrands";
// import CustomScrollBar from "../common/CustomScrollBar";
import Footer from "../common/Footer";
import HeroCommon from "../common/Hero";
// import ProcessSteps from "../common/ProcessSteps";
import PartnersList from "../common/json/PartnersList";

import ReviewCards from "../common/ReviewCards";
import Header from "../common/header/Header";
// import Brands from "../common/partners/Brands";
import BusinessDetails from "./BusinessDetails";
import OpportunitiesCatalog from "./OpportunitiesCatalog";
import { ReliableDistributor } from "./ReliableDistributor";
import Partners from "./Partners";

export default function main() {
  const distributionPartners = PartnersList[2].partnerslogo;

  return (
    <>
      <div className="bg-midnight">
        <Header />
        <HeroCommon
          title={[
            "The",
            <span key="title" className="text-dodgerBlue font-bold">
              {" "}
              Amazon partner{" "}
            </span>,
            "that moves",
            <i key="italictext"> damn </i>,
            "volume",
          ]}
          description="We're a high-volume, reliable buyer seeking top name brands to sell to our growing customer base. Join forces with a retail powerhouse."
          titleStyle="max-w-[756px]"
          descriptionStyle="max-w-[647px]"
        />
        <Partners
          hidden="hidden"
          brands={distributionPartners}
          show="distributors"
          translate_remove="!translate-y-0"
          margin_bottom="mb-0"
          padding_top="md:pt-[86px]"
        />
        <ReliableDistributor />
        <OpportunitiesCatalog
          maxWidth="max-w-[978px]"
          title="Our proprietary tech stack lets us find large opportunities in your catalog"
          description={[
            "Unlike most sellers, our technology allows us to look beyond the obvious. We don't only find all product opportunities, no matter how large your catalog is, ",
            <span key="uniqueKey" className="font-bold">
              {" "}
              but also create unique packs and bundles that increase the size of
              our POs.{" "}
            </span>,
          ]}
        />
        <BusinessDetails />
        <QuestionBrands
          title="Do you have a large catalog of name brands?"
          Btntitle="GET STARTED"
          description={[
            "We are looking for large authorized distribution partners in any industry, with the goal of placing at least",
            <span key="boldtext" className="font-bold">
              {" "}
              a quarter of a million dollars in POs a year.{" "}
            </span>,
            "Hopefully, more. If that's you, fill the form below and we'll reach out to you to explore opportunities.",
          ]}
        />
        <ReviewCards />
        <Footer />
      </div>
    </>
  );
}
