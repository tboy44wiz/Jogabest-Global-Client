import {withRouter} from "react-router-dom";

//  Import _AppLayout_HOC scss.
import '../../scss/layout_components/_AppLayout_HOC.scss';

import AppHeaderComp from "./AppHeader_Comp";
import AppFooterComp from "./AppFooter_Comp";

const AppLayoutHOC = (props) => {
    return (
        <div className="AppLayoutComp">
            {/*==== Header ====*/}
            <AppHeaderComp />

            <div className="app-body__wrapper">
                { props.children }
            </div>

            {/*==== Footer ====*/}
            <AppFooterComp />
        </div>
    );
};

export default withRouter(AppLayoutHOC);
