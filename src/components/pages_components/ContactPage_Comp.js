
// Import AppLayoutHOC.
import AppLayoutHOC from "../layout_components/AppLayout_HOC";

//  Import Components.
import AppBreadCombComp from "../layout_components/AppBreadComb_Comp";
import ContactMeansComp from "../layout_components/ContactMeans_Comp";
import ContactMapAndMessageComp from "../layout_components/ContactMap&Message_Comp";

const ContactPageComp = (props) => {
    return (
        <AppLayoutHOC>
            <AppBreadCombComp title="Contact" />

            <ContactMeansComp />

            <ContactMapAndMessageComp />
        </AppLayoutHOC>
    );
};

export default ContactPageComp;