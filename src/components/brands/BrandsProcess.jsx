import ProcessSteps from "../common/ProcessSteps";
import { DiscoveryIcon, HumanResourcesIcon, OrderingIcon } from "../common/icons/BrandsProcess";

const BrandsProcess = () => {
    return (
        <>
            {/* Reusable StepProcess component with dynamic content */}
            <ProcessSteps
                title="Getting started is easy with our three step process"
                title_style="max-w-[650px]"
                step_first_title="Discovery"
                step_first_description="We jump on a call to see if we’re a good fit to work together. We go through your Amazon goals, and see if we’re the right company to help."
                step_second_title="Onboarding"
                step_second_description="Our purchasing team gets to work on your catalog, while we go through our simple onboarding process to ensure everything goes smoothly."
                step_third_title="Ordering"
                step_third_description="We place our first PO and get started with a kickoff meeting to align on strategy. Frequent replenishment orders follow, with regular updates and communication."
                step_first_icon={<DiscoveryIcon />}
                step_second_icon={<HumanResourcesIcon />}
                step_thrid_icon={<OrderingIcon />}
            />
        </>
    );
};

export default BrandsProcess;
