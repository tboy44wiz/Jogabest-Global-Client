// Import AppLayoutHOC.
import AppLayoutHOC from "../layout_components/AppLayout_HOC";

//  Import Components.
import AppBreadCombComp from "../layout_components/AppBreadComb_Comp";
import ProductSectionComp from "../layout_components/ProductSection_Comp";

const ProductPageComp = (props) => {
    return (
        <AppLayoutHOC>
            <AppBreadCombComp title="Products" />

            <ProductSectionComp />
        </AppLayoutHOC>
    );
};

export default ProductPageComp;