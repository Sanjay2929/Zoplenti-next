import ProcessSteps from "../common/ProcessSteps";
import { DiscoveryIcon, HumanResourcesIcon, OrderingIcon } from "../common/icons/BrandsProcess";

const BrandsProcess = () => {
    return (
        <>
            {/* Reusable StepProcess component with dynamic content */}
            <ProcessSteps
                title="Getting started is easy with our three step process"
                titleStyle="max-w-[650px]"
                stepFirstTitle="Discovery"
                stepFirstDescription="We jump on a call to see if we’re a good fit to work together. We go through your Amazon goals, and see if we’re the right company to help."
                stepSecondTitle="Onboarding"
                stepSecondDescription="Our purchasing team gets to work on your catalog, while we go through our simple onboarding process to ensure everything goes smoothly."
                stepThirdTitle="Ordering"
                stepThirdDescription="We place our first PO and get started with a kickoff meeting to align on strategy. Frequent replenishment orders follow, with regular updates and communication."
                stepFirstIcon={<DiscoveryIcon />}
                stepSecondIcon={<HumanResourcesIcon />}
                stepThridIcon={<OrderingIcon />}
            />
        </>
    );
};

export default BrandsProcess;
