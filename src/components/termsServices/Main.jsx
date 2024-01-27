import Hero from "../common/Hero";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import AcceptablePolicyDescription from "./AcceptablePolicyDescription";
import GeneralConditionDescription from "./GeneralConditionDescription";
import { TermsOfUseDescription } from "./TermsOfUseDescription";

const Main = () => {
  return (
    <>
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
