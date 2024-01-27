import Image from 'next/image'
import React from 'react'

const OpportunitiesCatalog = (props) => {
    return (
        <>
            {/* Container for the Opportunity section */}
            <div className="max-w-[1224px] mx-auto relative overflow-hidden">
                {/* background image with position */}
                <Image className='absolute min-h-[374px] min-w-[739px] md:w-[1224px] end-[-20px] md:end-0 md:top-0 top-[5px]' width={1224} height={720} src="/assets/images/brands/opportunity/png/opportunity-layer.png" alt='image' />
                <div className='hidden lg:flex layer_bg absolute h-full w-[160px] end-0 top-0'></div>
                <div className='hidden lg:flex layer_bg_start absolute h-full w-[160px] start-0 top-0'></div>
                {/* Container opportunity with content */}
                <div className={`container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto relative z-10 ${props.borderStyle}`}>
                    <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px]">
                        {/* opportunity section title */}
                        <h2 className='text-white font-aeoniktrials font-bold !leading-[136%] md:tracking-[1.92px] text-[32px] md:text-4xl lg:text-5xl md:text-center'>{props.title}</h2>
                        <div className={`pt-[18px] sm:pt-6 md:pt-8 lg:pt-10 md:mx-auto ${props.maxWidth}`}>
                            {/* opportunity section description */}
                            <div className="p-5 md:px-6 lg:px-8 blur_filter bg-[rgba(51,_182,_255,_0.05)] border-s-[1px] border-solid border-dodgerBlue">
                                <p className='text-white font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%]'>
                                    {props.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OpportunitiesCatalog