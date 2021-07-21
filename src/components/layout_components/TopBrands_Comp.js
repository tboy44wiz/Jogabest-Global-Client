import {useContext} from "react";

//  Import AppStoreContext HOC
import {AppStoreContext} from "../../contexts/AppContextProvider";


import SectionTitleComp from "./SectionTitle_Comp";

// import _TopBrands_Comp SCSS
import '../../scss/layout_components/_TopBrands_Comp.scss';

const TopBrandsComp = () => {

    // Global State
    const { brandLogos } = useContext(AppStoreContext);

    return (
        <main className="TopBrandsComp">
            <div className="container">

                <SectionTitleComp hint="We help to find your top brands." title="Top Brands" />

                <div className="row mb-0">
                    {
                        brandLogos.map((brandLogo, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3 col-xl-2 recommended-product__Column">
                                <div className="recommended-product__wrapper">
                                    <div className="car-brand__wrapper">
                                        <img src={brandLogo.image} className="car-brand__logo img-fluid ml-auto" alt="Colorlib Template"/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default TopBrandsComp;
