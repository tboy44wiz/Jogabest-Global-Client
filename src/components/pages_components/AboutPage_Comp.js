// Import AppLayoutHOC.
import AppLayoutHOC from "../layout_components/AppLayout_HOC";

//  Import Components.
import DescriptionComp from "../layout_components/Description_Comp";
import AppBreadCombComp from "../layout_components/AppBreadComb_Comp";
import CoreValuesComp from "../layout_components/CoreValues_Comp";
import MissionAndVisionComp from "../layout_components/MissionAndVision_Comp";
import HappyCustomersComp from "../layout_components/HappyCustomers_Comp";


const AboutPageComp = () => {
    return (
        <AppLayoutHOC>
            <AppBreadCombComp title="About" />

            <DescriptionComp />

            <CoreValuesComp />

            <MissionAndVisionComp />

            <HappyCustomersComp />
        </AppLayoutHOC>
    );
};

export default AboutPageComp;
