import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";


//  Import _AppCarousel_Comp SCSS.
import '../../scss/layout_components/_AppCarousel_Comp.scss';

//  Import Slider Images.
import Image1 from "../../assets/images/slider_images/image1.jpg";
import Image2 from "../../assets/images/slider_images/image2.jpg";
import Image3 from "../../assets/images/slider_images/image3.jpg";
import Image4 from "../../assets/images/slider_images/image4.jpg";

//  Slider content.
const slides = [
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: Image1,
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: Image2,
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: Image3,
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
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
                        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
                        url("${slide.image}") no-repeat center center #43888F`
                    }}
                >
                    <div className="inner">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        <button>{slide.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default AppCarouselComp;
