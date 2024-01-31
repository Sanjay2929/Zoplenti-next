import CustomScrollBar from "../common/CustomScrollBar";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import Header from "../common/header/Header";
import AcceptablePolicyDescription from "./AcceptablePolicyContent";
import GeneralConditionDescription from "./GeneralConditionContent";
import { TermsOfUseDescription } from "./TermsOfUseContent";

const Main = () => {
  return (
    <>
      <CustomScrollBar />
      <div className="bg-midnight">
        <Header />
        <Hero
          title={[
            <span key="titleHeading" className="text-dodgerBlue font-bold">
              Zoplenti{" "}
            </span>,
            "Terms of Service",
          ]}
          description="Updated: January 1, 2024"
          descriptionStyle="pt-4"
          joinZoplenti={<TermsOfUseDescription />}
        />
        <AcceptablePolicyDescription />
        <GeneralConditionDescription />
        <Footer />
      </div>
    </>
  );
};

export default Main;
