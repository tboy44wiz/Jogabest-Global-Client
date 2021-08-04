import React, { createContext } from 'react';
import { withRouter } from 'react-router-dom';


//  Import product images.
import BoatEngine1 from "../assets/images/products/boat_engine.jpg";
import BoatEngine2 from "../assets/images/products/boat_engine2.jpg";
import BoatEngine3 from "../assets/images/products/boat_engine3.jpg";
import CarEngine1 from "../assets/images/products/engine1.png";
import CarEngine2 from "../assets/images/products/engine2.png";


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
import car2 from '../assets/images/products/car12.jpg';
import car3 from '../assets/images/products/car3.jpg';
import car4 from '../assets/images/products/car4.jpg';
import car5 from '../assets/images/products/car5.jpg';
import car6 from '../assets/images/products/car6.jpg';
import car7 from '../assets/images/products/car7.jpg';
import car8 from '../assets/images/products/car11.jpg';
import car9 from '../assets/images/products/car9.jpg';
import car10 from '../assets/images/products/car10.jpg';
import car12 from '../assets/images/products/car12.jpg';
import car13 from '../assets/images/products/car13.jpg';
import car14 from '../assets/images/products/car14.jpg';

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
                    description: "No description.",
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
                    description: "No description.",
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
                    description: "No description.",
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
                    description: "No description.",
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
                    description: "No description.",
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
                    description: "No description.",
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
                    name: "Yamaha Boat Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: BoatEngine1,
                    year: 2012,
                    speed: 180,
                    gearType: "Automatic"
                },
                {
                    name: "Car Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: CarEngine1,
                    year: 2009,
                    speed: 240,
                    gearType: "Manual"
                },
                {
                    name: "Yamaha Boat Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: BoatEngine2,
                    year: 2017,
                    speed: 240,
                    gearType: "Automatic"
                },
                {
                    name: "Car Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: CarEngine2,
                    year: 2003,
                    speed: 180,
                    gearType: "Manual"
                },
                {
                    name: "Suzuki Boat Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: BoatEngine3,
                    year: 2019,
                    speed: 280,
                    gearType: "Automatic"
                },
                {
                    name: "Car Engine",
                    description: "No description.",
                    price: "Call for price.",
                    image: CarEngine1,
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
                        name: "Toyota",
                        image: car1,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Mini Bus",
                        image: car2,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2009,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Toyota",
                        image: car14,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Mini Bus",
                        image: car4,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2007,
                        speed: 180,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 4,
                        seats: 8
                    },
                    {
                        name: "Nissan",
                        image: car5,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2003,
                        speed: 220,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 2,
                        seats: 3
                    },
                    {
                        name: "Mini Bus",
                        image: car6,
                        description: "No description.",
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
                        description: "No description.",
                        price: "Call for price.",
                        year: 2007,
                        speed: 220,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Mini Buses",
                        image: car8,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Toyota Bus",
                        image: car9,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2012,
                        speed: 280,
                        gearType: "Manual" ,
                        fuelType: "Gas",
                        doors: 4,
                        seats: 13
                    },
                    {
                        name: "Toyota RAV 4",
                        image: car10,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Mini Bus",
                        image: car12,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
                    {
                        name: "Mini Bus",
                        image: car13,
                        description: "No description.",
                        price: "Call for price.",
                        year: 2017,
                        speed: 280,
                        gearType: "Automatic" ,
                        fuelType: "Petrol",
                        doors: 4,
                        seats: 5
                    },
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