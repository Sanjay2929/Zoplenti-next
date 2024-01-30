import Image from "next/image";

const ProcessSteps = (props) => {
  return (
    <>
      {/* Container for the step process section */}
      <div
        className={`container md:px-12 xl:px-3 sm:px-8 max-w-[1140px] relative z-10 px-4 mx-auto overflow-hidden ${props.containerStyle} `}>
        {/* Desktop image for the step process */}
        <Image
          className={`absolute start-[-10px] hidden md:flex md:top-[2%] md:left-[-3%] ${props.hiddenImage}`}
          height={728}
          width={500}
          src="/assets/images/brands/threeStepProcess/png/desktop-three-step-process-image.png"
          alt="image"
        />
        <Image
          className={`absolute start-[-10px] hidden md:flex md:top-[2%] md:left-[44%] ${props.hiddenImage}`}
          height={728}
          width={500}
          src="/assets/images/brands/threeStepProcess/png/desktop-three-step-process-image.png"
          alt="image"
        />
        {/* Mobile image for the step process */}
        <Image
          className={`absolute start-0 md:hidden sm:start-[10%] top-[50%] translate-y-[-40%] scale-[1.5] ${props.hiddenImage}`}
          height={728}
          width={365}
          src="/assets/images/brands/threeStepProcess/png/mobile-three-step-process.png"
          alt="image"
        />
        {/* Content for the step process */}
        <div
          className={`py-[60px] relative z-20 sm:py-20 md:py-[100px] lg:py-[120px] ${props.borderStyle}`}>
          {/* Title for the step process */}
          <h2
            className={`text-white sm:text-center font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold pe-5 sm:mx-auto sm:px-10 md:px-0 ${props.titleStyle}`}>
            {props.title}
          </h2>
          <p
            className={`text-white  max-w-[645px] !leading-[170%] text-sm sm:text-base md:text-lg lg:text-xl ${props.description_style} !pt-0 font-aeoniktrials mx-auto sm:text-center`}>
            {props.description}
          </p>
          <div
            className={`flex flex-row flex-wrap pt-12 md:pt-[70px] ${props.containerStyle}`}>
            <div
              className="md:w-4/12 w-full md:pt-5 relative md:pb-10
                        md:before:absolute md:before:h-[97%] md:before:w-[1px] md:before:top-0 before:right-0 before:bg-prussianBlue
                         after:absolute after:h-[1px] after:w-[96%] after:bottom-0 after:left-[12px] md:after:left-0 after:bg-prussianBlue
                        ">
              {/* Step 1 */}
              <div className="lg:pe-5 md:pe-3 pb-11 md:pb-0 xl:pe-8 flex flex-col sm:items-center md:items-start">
                {props.stepFirstIcon}
                <h3 className="text-white pt-6 lg:pt-[27px] font-normal sm:text-start font-aeoniktrials !leading-[156.25%] sm:!leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl">
                  {props.stepFirstTitle}
                </h3>
                <p
                  className={`text-white pe-5 sm:text-center sm:px-16 pt-[18px] font-aeoniktrials md:px-0 md:text-start text-sm sm:text-base lg:text-xl font-normal !leading-[170%] md:min-h-[68px] ${props.description_style}`}>
                  {/* We jump on a call to see if We&apos;re a good fit to work together. We go through your Amazon goals, and see if We&apos;re the right company to help. */}
                  {props.stepFirstDescription}
                </p>
              </div>
            </div>
            <div
              className="md:w-4/12 py-11 md:pb-10 w-full md:pt-5 relative
                        after:absolute after:h-[1px] after:w-[96%] md:after:w-[92%] after:bottom-0 after:left-[12px] md:after:left-[50%] md:after:translate-x-[-50%] after:bg-prussianBlue
                        ">
              <Image
                className="absolute top-[-4px] md:hidden"
                src="/assets/images/common/svg/circle-gradient.svg"
                alt="image"
                height={8}
                width={8}
              />
              <Image
                className="absolute bottom-[-4px] md:end-[-4px] hidden md:flex"
                src="/assets/images/common/svg/circle-gradient.svg"
                alt="image"
                height={8}
                width={8}
              />
              <Image
                className="absolute bottom-[-4px] md:start-[-4px]"
                src="/assets/images/common/svg/circle-gradient.svg"
                alt="image"
                height={8}
                width={8}
              />
              {/* Step 2 */}
              <div className="md:px-3 lg:px-5 xl:px-5 flex flex-col sm:items-center md:items-start">
                {props.stepSecondIcon}
                <h3 className="text-white pt-6 lg:pt-[27px] font-normal sm:text-start font-aeoniktrials !leading-[156.25%] sm:!leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl">
                  {props.stepSecondTitle}
                </h3>
                <p
                  className={`text-white pe-3 sm:text-center sm:px-10 md:px-0 md:text-start pt-[18px] font-aeoniktrials text-sm sm:text-base lg:text-xl font-normal !leading-[170%] md:min-h-[68px] ${props.description_style}`}>
                  {props.stepSecondDescription}
                </p>
              </div>
            </div>
            <div
              className="md:w-4/12 w-full md:pt-5 relative pt-11 md:pb-10
                        md:before:absolute md:before:h-[97%] md:before:w-[1px] md:before:top-0 md:before:left-0 before:bg-prussianBlue
                        md:after:absolute md:after:h-[1px] md:after:w-[96%] md:after:bottom-0 md:after:end-0 after:bg-prussianBlue
                        ">
              {/* Step 3 */}
              <div className="md:ps-3 lg:ps-5 xl:ps-9 flex flex-col sm:items-center md:items-start">
                {props.stepThridIcon}
                <h3 className="text-white pt-6 lg:pt-[27px] font-normal font-aeoniktrials !leading-[156.25%] sm:!leading-[138.889%] text-[28px] md:text-3xl lg:text-4xl">
                  {props.stepThirdTitle}
                </h3>
                <p
                  className={`text-white pe-7 sm:text-center md:text-start sm:px-10 md:px-0 pt-[18px] font-aeoniktrials text-sm sm:text-base lg:text-xl font-normal !leading-[170%] md:min-h-[68px] ${props.description_style}`}>
                  {props.stepThirdDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSteps;
