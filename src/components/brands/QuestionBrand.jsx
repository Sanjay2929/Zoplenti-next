import React from 'react'
import CustomButton from '../common/CustomButton';

export const QuestionBrand = (props) => {

    return (
        <>

            {/* Container for the question section */}
            <div className="container md:px-12 xl:px-3 max-w-[1140px] px-4 sm:px-8 mx-auto">
                <div className="py-[60px] sm:py-20 md:py-[100px] lg:py-[120px] border-y-[1px] border-alto border-opacity-20">
                    {/* Title for the question section */}
                    <h2 className="text-white text-center font-aeoniktrials text-[32px] md:text-4xl !leading-[133.333%] lg:text-5xl font-bold max-w-[688px] mx-auto">
                        {props.title}
                    </h2>
                    <p className="text-white text-center pt-[18px] font-aeoniktrials font-normal text-sm sm:text-base md:text-lg lg:text-xl !leading-[170%] max-w-[829px] pe-1 mx-auto">
                        {props.description}
                    </p>
                    {/* Link to the destination with styling */}
                    <div className="flex justify-center pt-[34px] md:pt-9 lg:pt-12">
                        <CustomButton title={props.Btntitle} url={props.title} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionBrand;