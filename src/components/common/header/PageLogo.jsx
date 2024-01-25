import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// NavbarLogo component for displaying a logo in the navigation bar
const PageLogo = () => {
  // State to store the lottie library reference
  const [lottieLibrary, setLottieLibrary] = useState(null);

  // Ref to store the DOM element for the animation container
  const animationContainerRef = useRef(null);

  // Effect to dynamically import lottie-web library
  useEffect(() => {
    // Importing lottie-web library and setting it to state
    import("lottie-web").then((Lottie) => setLottieLibrary(Lottie.default));
  }, []);

  // Effect to handle the animation logic
  useEffect(() => {
    let animationInstance;

    // Function to play the lottie animation
    const playAnimation = () => {
      if (lottieLibrary && animationContainerRef.current) {
        // Destroy the existing animation instance if any
        if (animationInstance) {
          animationInstance.destroy();
        }

        // Load the new animation instance
        animationInstance = lottieLibrary.loadAnimation({
          container: animationContainerRef.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "/assets/json/Static_Final.json",
        });
      }
    };

    // Initial animation play
    playAnimation();

    // Set interval to play the animation every 15 seconds
    const animationInterval = setInterval(() => {
      playAnimation();
    }, 15000);

    // Cleanup function to clear the interval and destroy animation instance
    return () => {
      clearInterval(animationInterval);
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [lottieLibrary]);

  // Rendering the component with a Link and animation container
  return (
    <>
      <Link
        className="w-[90px] h-[90px]"
        href="/"
        ref={animationContainerRef}></Link>
    </>
  );
};

export default PageLogo;
