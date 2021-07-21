import {useContext} from "react";

//  Import AppStoreContext HOC
import { AppStoreContext } from "../../contexts/AppContextProvider";

//  Import _MostRecentProducts_Comp SCSS
import "animate.css/animate.min.css";
import '../../scss/layout_components/_MostRecentProducts_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";



const MostRecentProductsComp = () => {

    // Global State
    const { products } = useContext(AppStoreContext);

    return (
        <main className="MostRecentProductsComp">
            <div className="container">

                <SectionTitleComp hint="Get your quality spare parts from us." title="Most Recent Products" />

                <div className="row g-md-2 mb-0">
                    {
                        products.map((product, index) => (
                            <div key={index} className="product__card col-sm-6 col-md-4 mb-3">
                                <div className="product__card--inner">
                                    <div className="product__card--image-wrapper">
                                        <img className="product__card--image img-fluid ml-auto" src={product.image} alt="ProductImage"/>
                                        <span className="product-card__mask" />
                                        <button className="contact__button">Zoom</button>
                                    </div>
                                    <div className="product__card--bottom">
                                        <h2 className="product__card--name">{product.name}</h2>
                                        {/*<p className="product__card--description">{product.description}</p>*/}
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

export default MostRecentProductsComp;
