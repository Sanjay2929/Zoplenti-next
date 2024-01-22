import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const NavbarLogo = () => {
  const [lottie, setLottie] = useState(null);

  const zIcon = useRef(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    let animation;

    const playAnimation = () => {
      if (lottie && zIcon.current) {
        if (animation) {
          animation.destroy();
        }

        animation = lottie.loadAnimation({
          container: zIcon.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "/assets/json/Static_Final.json",
        });
      }
    };

    playAnimation();
    // Set interval to play the animation every 15 seconds
    const animationInterval = setInterval(() => {
      playAnimation();
    }, 15000);

    return () => {
      clearInterval(animationInterval);
      if (animation) {
        animation.destroy();
      }
    };
  }, [lottie]);
    return (
      <>
        <Link className="w-[90px] h-[90px]" href="/" ref={zIcon}></Link>
      </>
    );
};

export default NavbarLogo;
