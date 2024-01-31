import Hero from "../joinTeam/Hero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/header/Header";
import ZoplentiStatistics from "./ZoplentiStatistics";
import ZoplentiFamily from "./ZoplentiFamily";
import CustomScrollBar from "../common/CustomScrollBar";

const GetStarted = () => {
  return (
    <>

      <CustomScrollBar />
      <div className="bg-midnight">
        <Header />
        <Hero
          title="Let's explore what we can"
          title_span="achieve together"
          titleStyle="max-w-[718px]"
          joinZoplenti={<ZoplentiFamily />}
        />
        <ZoplentiStatistics />
        <Footer />
      </div>
    </>
  );
};

export default GetStarted;
