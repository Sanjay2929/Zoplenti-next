import Hero from "../common/Hero";
import Footer from "../common/Footer";
import Header from "../common/header/Header";
import PrivacyPolicyDescription from "./PrivacyPolicyDescription";
import ScopePolicy from "./ScopePolicy";

const Main = () => {
  return (
    <>
      <div className="bg-midnight">
        {/* <ScrollTop /> */}
        <Header />
        <Hero
          title={[
            <span key="titleHeading" className="text-dodgerBlue font-bold">
              Zoplenti{" "}
            </span>,
            "Privacy Policy",
          ]}
          description="Updated: January 1, 2024"
          descriptionStyle="pt-4"
          joinZoplenti={<ScopePolicy />}
        />
        <PrivacyPolicyDescription />
        <Footer />
      </div>
    </>
  );
};

export default Main;
