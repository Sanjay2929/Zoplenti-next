import Image from "next/image";
import Link from "next/link";

const BrandsPartners = ({
  brandCards,
  show,
  hidden,
  translate_remove,
  margin_bottom,
  padding_top,
}) => {
  return (
    <>
      {/* Partners Section */}

      {/* Content */}
      <div
        className={`${padding_top} px-3 sm:px-6 md:px-12 lg:px-16 relative z-30 pt-11 sm:pt-[70px] pb-[34px] sm:pb-10 md:pb-11 lg:pb-12`}>
        <div className="flex flex-auto flex-wrap justify-between xl:gap-x-12 lg:gap-x-7 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-[46px] gap-x-[4px] md:gap-x-9">
          {brandCards.slice(0, 5).map((obj, i) => {
            return (
              <div
                key={i}
                className={`flex items-center lg:justify-center ${obj.order}`}>
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
      </div>
    </>
  );
};

export default BrandsPartners;
