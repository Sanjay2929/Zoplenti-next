import Image from "next/image";
import Link from "next/link";

// Brands component that displays partner logos
const Brands = ({
  brands, // Array of brand objects containing title, partners logos, and styles
  show, // Determines whether to display all logos or specific ones
  hidden, // CSS class for hiding the background image
  translateRemove, // CSS class for removing translation
  marginBottom, // CSS class for controlling margin bottom
  paddingTop, // CSS class for controlling padding top
}) => {
  return (
    <>
      {/* Partners Section */}
      <div
        id="brand"
        className={`w-full relative sm:translate-y-[-80px] translate-y-[-40px] ${translateRemove}`}>
        <Image
          src="/assets/images/partners/brandsPartners/svg/layer-bg-image.svg"
          height={332}
          width={1440}
          className={`absolute min-h-[200px] top-[-20%] lg:top-[-200px] xl:top-[-226px] start-0 w-full ${hidden}`}
          alt="image"
        />
        <div
          className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto pb-[60px] sm:pb-20 md:pb-[100px] lg:pb-[120px] ${marginBottom}`}>
          <div className="relative after:absolute after:inset-0 after:rounded-[25px] after:p-[1px] rounded-[25px] border_gradent m-1">
            {/* Background images */}
            <Image
              className="hidden lg:flex absolute start-1/2 top-[66px] translate-x-[-50%]"
              width={300}
              height={247}
              src="/assets/images/partners/brandsPartners/svg/z-logo-gradient.svg"
              alt="logo gradient image"
            />
            <Image
              className="hidden lg:flex absolute start-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]"
              width={280}
              height={280}
              src="/assets/images/partners/brandsPartners/svg/circle-blur.svg"
              alt="blur circle image"
            />
            {/* Content */}
            <div
              className={`${paddingTop} px-3 sm:px-6 md:px-12 lg:px-16 relative z-30 pt-11 sm:pt-[70px] pb-[34px] sm:pb-10 md:pb-11 lg:pb-12`}>
              {show === "all" ? (
                // HOMEPAGE PARTNERS
                <div className="flex flex-col sm:gap-y-[74px] gap-y-[32px]">
                  {brands.map((obj, i) => {
                    return (
                      <div key={i}>
                        {/* Display partner title */}
                        <p className="text-alto uppercase opacity-50 font-aeoniktrials font-normal text-sm md:text-base !leading-[115%] pb-6 md:pb-7">
                          {obj.title}
                        </p>
                        {/* Display partner logos */}
                        <div className="flex flex-auto flex-wrap sm:justify-between xl:gap-x-12 lg:gap-x-7 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-[46px] gap-x-5 md:gap-x-9">
                          {obj.partnerslogo &&
                            obj.partnerslogo.slice(0, 5).map((obj, i) => (
                              <div key={i} className="flex items-center">
                                <Link href={obj.url}>
                                  <Image
                                    height={obj.imageHeight}
                                    width={obj.imageWidth}
                                    className={`${obj.style} hover:scale-[1.05] transition-all duration-700`}
                                    src={obj.image}
                                    alt="card"
                                    quality={100}
                                  />
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                //   BRANDS AND DISTRIBUTION PARTNERS LOGOS
                <div className="flex flex-auto flex-wrap justify-between xl:gap-x-12 lg:gap-x-7 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-[46px] gap-x-[4px] md:gap-x-9">
                  {brands.map((obj, i) => {
                    return (
                      <div
                        key={i}
                        className={`flex items-center lg:justify-center`}>
                        {/* Display brand logos */}
                        <Image
                          className={`${obj.style} hover:scale-[1.05] transition-all duration-700`}
                          height={obj.imageHeight}
                          width={obj.imageWidth}
                          src={obj.image}
                          alt="image"
                          quality={100}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
