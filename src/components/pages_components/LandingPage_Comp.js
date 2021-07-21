// Import AppLayoutHOC.
import AppLayoutHOC from "../layout_components/AppLayout_HOC";

//  Import Components.
import AppCarouselComp from "../layout_components/AppCarousel_Comp";
import TopBrandsComp from "../layout_components/TopBrands_Comp";
import MostRecentProductsComp from "../layout_components/MostRecentProducts_Comp";
import VehicleListingComp from "../layout_components/VehicleListing_Comp";
import HappyCustomersComp from "../layout_components/HappyCustomers_Comp";


const LandingPageComp = () => {
    return (
        <AppLayoutHOC>
            <AppCarouselComp />

            <TopBrandsComp />

            <VehicleListingComp />

            <MostRecentProductsComp />

            <HappyCustomersComp />
        </AppLayoutHOC>
    );
};

export default LandingPageComp;
