import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';

// Import AppLayoutHOC.
import AppLayoutHOC from "../layout_components/AppLayout_HOC";

//  Import _ProductDetails_Comp SCSS.
import '../../scss/pages_components/_ProductDetails_Comp.scss';

//  Import Components.
import AppBreadCombComp from "../layout_components/AppBreadComb_Comp";


const ProductDetailsComp = (props) => {

    const [state, setState] = useState({
        showSpecification: true,
        showReturnPolicy: false,
        showReviews: false,
    });
    const { name, description, image, year, speed, fuelType, gearType, doors, seats } = props.location.state.product;

    const showSpecification = (e) => {
        e.preventDefault();
        setState({
            showSpecification: true,
            showReturnPolicy: false,
            showReviews: false,
        })
    };

    const showReturnPolicy = (e) => {
        e.preventDefault();
        setState({
            showSpecification: false,
            showReturnPolicy: true,
            showReviews: false,
        })
    };

    const showReviews = (e) => {
        e.preventDefault();
        setState({
            showSpecification: false,
            showReturnPolicy: false,
            showReviews: true,
        })
    };

    return (
        <AppLayoutHOC>
            <AppBreadCombComp title="Product" subTitle={name} />

            <div className="ProductDetailsComp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 product-image__wrapper">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    width: 480,
                                    height: 400,
                                    src: image
                                },
                                largeImage: {
                                    src: image,
                                    width: 1000,
                                    height: 1000,
                                },
                                enlargedImageContainerDimensions: {width: '130%', height: '100%'},
                                isHintEnabled: true,
                                enlargedImageContainerStyle: {
                                    marginLeft: "40px",
                                    background: "rgba(255, 255, 255, 0.9)",
                                }
                            }} />
                        </div>
                        <div className="col-md-7 ">
                            <div className="product-detail__wrapper">
                                <h2 className="product__name">{ name }</h2>
                                <p className="product__description">{ description }</p>
                                <p className="product__price">
                                    Price:
                                    <button>
                                        <Link to="/contact">Contact us for price</Link>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <br /><br />

                    <nav className="section__nav">
                        <p><NavLink to="#" onClick= { showSpecification }>Specifications</NavLink></p>
                        <p><NavLink to="#" onClick= { showReturnPolicy }>Return Policy</NavLink></p>
                        <p><Link to="#" onClick= { showReviews }>Reviews</Link></p>
                    </nav>

                    <section className="specification-policy-review__wrapper">
                        {(state.showSpecification) ? (
                           <>
                               {/*===== Specification =====*/}
                               <div className="row">
                                   <div className="col-md-3">
                                       <ul>
                                           <li>
                                               <span>Make:</span> {name.split(" ")[0]}
                                           </li>
                                           <li>
                                               <span>Model:</span> null {/*{name.split(" ")[1]} {name.split(" ")[2]}*/}
                                           </li>
                                           <li>
                                               <span>Year:</span> {year}
                                           </li>
                                           <li>
                                               <span>Engine:</span> null
                                           </li>
                                           <li>
                                               <span>Fuel:</span> {fuelType}
                                           </li>
                                       </ul>
                                   </div>
                                   <div className="col-md-3">
                                       <ul>
                                           <li>
                                               <span>Speed:</span> {speed}
                                           </li>
                                           <li>
                                               <span>Gear:</span> {gearType}
                                           </li>
                                           <li>
                                               <span>Drive:</span> Front
                                           </li>
                                           <li>
                                               <span>Doors:</span> {doors}
                                           </li>
                                           <li>
                                               <span>Seats:</span> {seats}
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </>
                        ) : (state.showReturnPolicy) ? (
                            <>
                                {/*===== Return Policy =====*/}
                                <div className="row">
                                    <div className="col">
                                        <p className="text-danger"><strong className="text-dark">Note:</strong> No return or refund after payment.</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/*===== Reviews =====*/}
                                <div className="row">
                                    <div className="col">
                                        <p>No review for this product.</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </AppLayoutHOC>
    );
};

export default ProductDetailsComp;