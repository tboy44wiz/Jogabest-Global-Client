import {useContext} from "react";

//  Import _ProductSection_Comp SCSS.
import '../../scss/layout_components/_ProductSection_Comp.scss';


//  Import AppStoreContext HOC
import { AppStoreContext } from "../../contexts/AppContextProvider";

//  Import React Icons.
import {RiGasStationLine} from "react-icons/ri";
import {GoCalendar} from "react-icons/go";
import {IoMdSpeedometer} from "react-icons/io";
import {Link} from "react-router-dom";

const ProductSectionComp = () => {

    // Global State
    const { allProducts } = useContext(AppStoreContext);

    return (
        <div className="ProductSectionComp">
            <div className="container">

                {/*==== Body Parts & Mirrors ====*/}
                <section>
                    <h2 className="section__title">Body Parts & Mirrors</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 col-lg-4 d-none d-lg-block">
                            <img src="https://rubiktheme.com/demo/rb_sparks_demo//img/cms/11.jpg" alt="" />
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                                {
                                    allProducts.bodyParts.map((bodyPart, index) => (
                                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item__wrapper">
                                                <img src={ bodyPart.image } className="img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <p>{ bodyPart.name }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br />

                {/*==== HeadLight & Lighting ====*/}
                <section>
                    <h2 className="section__title">HeadLight & Lighting</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 col-lg-4 d-none d-lg-block">
                            <img src="https://rubiktheme.com/demo/rb_sparks_demo//img/cms/12.jpg" alt="HeadLight & Lighting" />
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                                {
                                    allProducts.headLights.map((headLight, index) => (
                                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item__wrapper">
                                                <img src={ headLight.image } className="img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <p>{ headLight.name }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br />

                {/*==== Engines & Parts ====*/}
                <section>
                    <h2 className="section__title">Engines & Parts</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 col-lg-4 d-none d-lg-block">
                            <img src="https://rubiktheme.com/demo/rb_sparks_demo//img/cms/20.jpg" alt="HeadLight & Lighting" />
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                                {
                                    allProducts.engineParts.map((enginePart, index) => (
                                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item__wrapper">
                                                <img src={ enginePart.image } className="img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <p>{ enginePart.name }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br />

                {/*==== Breaks, Suspensions & Steering ====*/}
                <section>
                    <h2 className="section__title">Breaks, Suspensions & Steering</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 col-lg-4 d-none d-lg-block">
                            <img src="https://rubiktheme.com/demo/rb_sparks_demo//img/cms/30.jpg" alt="HeadLight & Lighting" />
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                                {
                                    allProducts.breakAndSuspensions.map((breakAndSuspension, index) => (
                                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item__wrapper">
                                                <img src={ breakAndSuspension.image } className="img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <p>{ breakAndSuspension.name }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br />

                {/*==== Interior Accessories ====*/}
                <section>
                    <h2 className="section__title">Interior Accessories</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 col-lg-4 d-none d-lg-block">
                            <img src="https://rubiktheme.com/demo/rb_sparks_demo//img/cms/39.jpg" alt="HeadLight & Lighting" />
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                                {
                                    allProducts.interiorAccessories.map((interiorAccessory, index) => (
                                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item__wrapper">
                                                <img src={ interiorAccessory.image } className="img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <p>{ interiorAccessory.name }</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br />

                {/*==== Interior Accessories ====*/}
                <section>
                    <h2 className="section__title">Cars</h2>
                    <div className="row mt-4">
                        <div className="row ps-sm-0 ps-md-5 ps-xl-0">
                            {
                                allProducts.cars.map((car, index) => (
                                    <div key={index} className="col-sm-6 col-md-4 col-xl-3">
                                        <Link to={{ pathname: `/product/${car.name.split(" ").join("_").toLowerCase()}`, state: {product: car} }} className="car__wrapper">
                                            <div className="car-card-image__wrapper">
                                                <img src={ car.image } className="car__images img-fluid" alt="Bumpers &amp;amp; Components" />
                                                <span className="car-card__mask" />
                                                <button className="car-contact__button">View Details</button>
                                            </div>
                                            <div className="car__card-specification">
                                                <h2 className="car__name">{ car.name }</h2>
                                                <div className="row pt-2">
                                                    <div className="col d-flex justify-content-center align-items-center border-end">
                                                        <GoCalendar className="me-2 small" />
                                                        <span>{ car.year }</span>
                                                    </div>
                                                    <div className="col d-flex justify-content-center align-items-center border-end">
                                                        <IoMdSpeedometer className="me-2 small" />
                                                        <span>{ car.speed }</span>
                                                    </div>
                                                    <div className="col d-flex justify-content-center align-items-center">
                                                        <RiGasStationLine className="me-2 small" />
                                                        <span>{ car.fuelType }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductSectionComp;
