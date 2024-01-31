import React from "react";
import StepProcess from "../common/ProcessSteps";

const DistributorsStepProcess = () => {
    return (
        <>
            {/* Step-by-step process section for distributors */}
            <StepProcess
                title="Enjoy a straightforward process with clear communication"
                title_style="max-w-[758px]"
                description="Who wants to work with people who don’t know what they’re doing?
We keep things simple, straightforward, and move with purpose."
                description_style="pt-[18px]"
                step_first_title="Discovery"
                step_first_description="We jump on a call, and if we’re aligned in what we’re looking for, we open an account with you."
                step_second_title="Analysis"
                step_second_description="Our expert purchasing team reviews your product catalog, finding the juicy opportunities we live for."
                step_third_title="Order"
                step_third_description="We place our first test order, even pre-paid. And then, if things go well… many, many others large orders follow."
             
            />
        </>
    );
};

export default DistributorsStepProcess;
