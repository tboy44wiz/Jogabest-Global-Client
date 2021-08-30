import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";


//  Import _AppCarousel_Comp SCSS.
import '../../scss/layout_components/_AppCarousel_Comp.scss';

//  Import Slider Images.
import Image1 from "../../assets/images/slider_images/jogabest_mini_buses.png";
import Image2 from "../../assets/images/slider_images/jogabest_boat_engines.png";
import Image3 from "../../assets/images/slider_images/jogabest_motor_parts.png";
import Image4 from "../../assets/images/slider_images/jogabest_car_engines.png";

//  Slider content.
const slides = [
    {
        title: "Jogabest Mini Buses",
        description: "Suzuki every mini bus is a small bus used in Lagos and some other parts in Nigeria. It has low fuel consumption and this bus is easy maintenance.",
        button: "Read More",
        image: Image1,
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: "Jogabest Boat Engines",
        description: "Yamaha motor Boat engines.",
        button: "Discover",
        image: Image2,
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Jogabest Motor Parts",
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: Image3,
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Jogabest Car Engines",
        description: "Get your fairly used car engines of different car brands.",
        button: "Buy now",
        image: Image4,
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];

const AppCarouselComp = () => {
    return (
        <Slider className="slider__wrapper" autoplay={5000}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="slider__content"
                    style={{
                        background: `url("${slide.image}") no-repeat center center #43888F`
                        /*background: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                        url("${slide.image}") no-repeat center center #43888F`*/
                    }}
                >
                    <div className="inner">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        {/*<button>{slide.button}</button>*/}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default AppCarouselComp;
