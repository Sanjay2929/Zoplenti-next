import { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";

const CustomSuccessPopup = ({ setSuccessPopup, discription }) => {
  const [lottie, setLottie] = useState(null);
  const zIcon = useRef(null);
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);
  useEffect(() => {
    if (lottie && zIcon.current) {
      const animation = lottie.loadAnimation({
        container: zIcon.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/assets/json/Static_Final.json",
      });
      return () => animation.destroy();
    }
  }, [lottie]);
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full">
        <div className="max-w-[250px] h-[250px] mx-auto">
          <div ref={zIcon}></div>
        </div>
        <h3 className="text-white text-[32px] text-center font-aeoniktrials font-normal pb-[18px]">
          Success
        </h3>
        <p className="text-white font-aeoniktrials font-normal text-xl mb-0 pb-12 max-w-[400px] mx-auto text-center">
          {discription}
        </p>

        <CustomButton
          url={""}
          title={"go back"}
          clickState={setSuccessPopup(false)}
        />
      </div>
    </div>
  );
};

export default CustomSuccessPopup;
