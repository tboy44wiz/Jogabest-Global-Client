import React, { createContext } from 'react';
import { withRouter } from 'react-router-dom';


//  Import product images.
import Product1 from "../assets/images/products/engine1.png";
import Product2 from "../assets/images/products/engine2.png";
import Toyota from "../assets/images/car_brand_logos/Toyota_logo.png";
import Lexus from "../assets/images/car_brand_logos/Lexus_logo.png";
import Mercedes from "../assets/images/car_brand_logos/Mercedes-Benz_logo.png";
import Ford from "../assets/images/car_brand_logos/Ford_logo.png";
import Honda from "../assets/images/car_brand_logos/Honda_logo.png";
import Kia from "../assets/images/car_brand_logos/Kia_logo.png";
import Audi from "../assets/images/car_brand_logos/Audi_logo.png";
import Volkswagen from "../assets/images/car_brand_logos/Volkswagen_logo.png";
import Hyundai from "../assets/images/car_brand_logos/Hyundai_logo.png";
import BMW from "../assets/images/car_brand_logos/BMW_logo.png";
import Peugeot from "../assets/images/car_brand_logos/Peugeot_logo.png";
import Mitsubishi from "../assets/images/car_brand_logos/Mitsubishi_logo.png";
//  Cars
import car1 from '../assets/images/products/car1.jpg';
import car2 from '../assets/images/products/car2.jpg';
import car3 from '../assets/images/products/car3.jpg';
import car4 from '../assets/images/products/car4.jpg';
import car5 from '../assets/images/products/car5.jpg';
import car6 from '../assets/images/products/car6.jpg';
import car7 from '../assets/images/products/car7.jpg';
import car8 from '../assets/images/products/car8.jpg';
import car9 from '../assets/images/products/car9.jpg';
import car10 from '../assets/images/products/car10.jpg';

export const AppStoreContext = createContext(undefined);

class AppContextProvider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            brandLogos: [
                { image: Toyota },
                { image: Lexus },
                { image: Mercedes },
                { image: Ford },
                { image: Honda },
                { image: Kia },
                { image: Audi },
                { image: Volkswagen },
                { image: Hyundai },
                { image: BMW },
                { image: Peugeot },
                { image: Mitsubishi },
            ],
            vehicles: [
                {
                    name: "Car1",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car1,
                    year: 2012,
                    speed: 280,
                    gearType: "Automatic",
                    fuelType: "Petrol",
                    doors: 4,
                    seats: 5
                },
                {
                    name: "car2",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car2,
                    year: 2009,
                    speed: 280,
                    gearType: "Manual",
                    fuelType: "Petrol",
                    doors: 4,
                    seats: 5
                },
                {
                    name: "car3",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car6,
                    year: 2012,
                    speed: 180,
                    gearType: "Automatic",
                    fuelType: "Gas",
                    doors: 4,
                    seats: 8
                },
                {
                    name: "car4",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car3,
                    year: 2013,
                    speed: 280,
                    gearType: "Manual",
                    fuelType: "Petrol",
                    doors: 4,
                    seats: 5
                },
                {
                    name: "car5",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car7,
                    year: 1997,
                    speed: 220,
                    gearType: "Automatic",
                    fuelType: "Gas",
                    doors: 4,
                    seats: 5
                },
                {
                    name: "car6",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: car9,
                    year: 2017,
                    speed: 280,
                    gearType: "Automatic",
                    fuelType: "Petrol",
                    doors: 4,
                    seats: 13
                },
            ],
            products: [
                {
                    name: "Ford Focus ST",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product1,
                    year: 2012,
                    speed: 180,
                    gearType: "Automatic"
                },
                {
                    name: "Mercedes AMG",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product2,
                    year: 2009,
                    speed: 240,
                    gearType: "Manual"
                },
                {
                    name: "Telsa Model Y",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product1,
                    year: 2017,
                    speed: 240,
                    gearType: "Automatic"
                },
                {
                    name: "Mercedes AMG",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product2,
                    year: 2003,
                    speed: 180,
                    gearType: "Manual"
                },
                {
                    name: "Telsa Model Y",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product1,
                    year: 2019,
                    speed: 280,
                    gearType: "Automatic"
                },
                {
                    name: "Mercedes AMG",
                    description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                        "tincidunt scelerisque habitasse ultricies facilisi.",
                    price: "Call for price.",
                    image: Product2,
                    year: 2017,
                    speed: 160,
                    gearType: "Automatic"
                },
            ],
            allProducts: {
                bodyParts: [
                    {
                        name: "Bumpers",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/bumpers_-and-_components.jpg"
                    },
                    {
                        name: "Fenders",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/fenders_-and-_components.jpg"
                    },
                    {
                        name: "Mirrors",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/mirrors_-and-_components.jpg"
                    },
                    {
                        name: "Hoods",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/hoods_-and-_components.jpg"
                    },
                    {
                        name: "Grilles",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/hoods_-and-_components.jpg"
                    },
                    {
                        name: "Door Handles",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/door_handles-comma-_locks_-and-_accessories.jpg"
                    },
                    {
                        name: "Windows",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/windows_-and-_components.jpg"
                    },
                    {
                        name: "Other Body Parts",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/other_auto_body_replacement.jpg"
                    },
                ],
                headLights: [
                    {
                        name: "Head Lights",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/13.jpg"

                    },
                    {
                        name: "Tail Lights",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/19.jpg"
                    },
                    {
                        name: "Fog Lights",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/14.jpg"
                    },
                    {
                        name: "Signal Light",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/15.jpg"
                    },
                    {
                        name: "Corner Lights",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/17.jpg"
                    },
                    {
                        name: "Off Road Lights",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/28.jpg"
                    },
                    {
                        name: "Bulbs",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/18.jpg"
                    },
                ],
                engineParts: [
                    {
                        name: "Catalytic Converters",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/21.jpg"

                    },
                    {
                        name: "Radiators & Fans",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/22.jpg"
                    },
                    {
                        name: "Exhausts",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/23.jpg"
                    },
                    {
                        name: "Fuel Systems",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/24.jpg"
                    },
                    {
                        name: "Heating & Air Conditioning",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/25.jpg"
                    },
                    {
                        name: "Air Filters",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/26.jpg"
                    },
                    {
                        name: "Cranks & Pistons",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/29.jpg"
                    },
                ],
                breakAndSuspensions: [
                    {
                        name: "Brake Discs & Pads",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/31.jpg"

                    },
                    {
                        name: "Shocks & Struts",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/32.jpg"
                    },
                    {
                        name: "Wheel Hubs & Bearings",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/34.jpg"
                    },
                    {
                        name: "Alloyed Wheels",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/36.jpg"
                    },
                    {
                        name: "Tie Rods, Steering Racks & Gearboxes",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/38.jpg"
                    }
                ],
                interiorAccessories: [
                    {
                        name: "Seats & Seat Covers",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/40.jpg"

                    },
                    {
                        name: "Carpet & Floor Kits",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/41.jpg"
                    },
                    {
                        name: "Floor Mats & Liners",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/42.jpg"
                    },
                    {
                        name: "DashBoard Accessories",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/43.jpg"
                    },
                    {
                        name: "Gauges, Meters & Monitors",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/47.jpg"
                    },
                    {
                        name: "Tuners, Chips & Monitors",
                        image: "https://rubiktheme.com/demo/rb_sparks_demo//img/cms/46.jpg"
                    }
                ],
                cars: [
                    {
                        name: "Car1",
                        image: car1,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Car2",
                        image: car2,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2009,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Car3",
                        image: car3,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Car4",
                        image: car4,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2007,
                        speed: 180,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 4,
                        seats: 8
                    },
                    {
                        name: "Car5",
                        image: car5,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2003,
                        speed: 220,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 2,
                        seats: 3
                    },
                    {
                        name: "Car6",
                        image: car6,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2000,
                        speed: 160,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 8
                    },
                    {
                        name: "Car7",
                        image: car7,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2007,
                        speed: 220,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Car8",
                        image: car8,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Car9",
                        image: car9,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 4,
                        seats: 13
                    },
                    {
                        name: "Car10",
                        image: car10,
                        description: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent " +
                            "tincidunt scelerisque habitasse ultricies facilisi.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5 }
                ],
            },
        }
    };

    render() {
        return (
            <AppStoreContext.Provider value={{
                ...this.state,
            }}>
                { this.props.children }
            </AppStoreContext.Provider>
        )
    }
}

export default withRouter(AppContextProvider);