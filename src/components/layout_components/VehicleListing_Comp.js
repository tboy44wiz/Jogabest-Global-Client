import {useContext} from "react";
import {Link} from "react-router-dom";

//  Import AppStoreContext HOC
import { AppStoreContext } from "../../contexts/AppContextProvider";

//  Import React Icons.
import {RiGasStationLine} from "react-icons/ri";
import {GoCalendar} from "react-icons/go";
import {IoMdSpeedometer} from "react-icons/io";

//  Import _VehicleListing_Comp SCSS
import "animate.css/animate.min.css";
import '../../scss/layout_components/_VehicleListing_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";


const VehicleListingComp = () => {

    // Global State
    const { vehicles } = useContext(AppStoreContext);

    return (
        <main className="VehicleListingComp">
            <div className="container">

                <SectionTitleComp hint="We offer you our belgium cars." title="Our Vehicles Listing" />

                <div className="row g-md-2 mb-0">
                    {
                        vehicles.map((vehicle, index) => (
                            <div key={index} className="vehicle__card col-sm-6 col-md-4 mb-3">
                                <Link to={{ pathname: `/product/${vehicle.name.split(" ").join("_").toLowerCase()}`, state: {product: vehicle} }} className="vehicle__card--inner">
                                   <div className="vehicle__card--image-wrapper">
                                       <img className="vehicle__card--image img-fluid ml-auto" src={vehicle.image} alt="Colorlib Template"/>
                                       <span className="vehicle-card__mask" />
                                       <button className="contact__button">View Details</button>
                                   </div>
                                    <div className="vehicle__card--bottom">
                                        <h2 className="vehicle__card--name">{vehicle.name}</h2>
                                        {/*<p className="vehicle__card--description">{vehicle.description}</p>*/}

                                        <div className="vehicle__card-specification row">
                                            <div className="col d-flex justify-content-center align-items-center border-end">
                                                <GoCalendar className="me-2 small" />
                                                <span>{ vehicle.year }</span>
                                            </div>
                                            <div className="col d-flex justify-content-center align-items-center border-end">
                                                <IoMdSpeedometer className="me-2 small" />
                                                <span>{ vehicle.speed }</span>
                                            </div>
                                            <div className="col d-flex justify-content-center align-items-center">
                                                <RiGasStationLine className="me-2 small" />
                                                <span>{ vehicle.fuelType }</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default VehicleListingComp;
