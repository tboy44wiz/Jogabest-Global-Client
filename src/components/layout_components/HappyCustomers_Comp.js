//  Import _MostRecentProducts_Comp SCSS
import "animate.css/animate.min.css";
import '../../scss/layout_components/_HappyCustomers_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";

//  Import product images.

const customers = [
    {
        avatar: "🐳",
        name: "Mark Whale",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        avatar: "🐳",
        name: "Cherry Brian",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        avatar: "🐠",
        name: "Donna Lee",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        avatar: "🐡",
        name: "Spouting Whale",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        avatar: "🐙",
        name: "Spouting Whale",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
    {
        avatar: "🐚",
        name: "Jame Robert",
        comments: "Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo. Fusce dapibus, tellus ac cursus commodo.",
    },
]

const HappyCustomersComp = () => {
    return (
        <div className="HappyCustomersComp">
            <div className="container">

                <SectionTitleComp hint="See what our customer says about us." title="Our Customers" />

                <div className="customer-speech__wrapper">
                    <div style={{ height: "420px", width: "700px" }}>
                        <div className='wrapper'>
                            <div className='carousel'>
                                {
                                    customers.map((customer, index) => (
                                        <div key={index} className='carousel__item'>
                                            <div className='carousel__item-head'>{customer.avatar}</div>
                                            <div className='carousel__item-body'>
                                                <p className='title'>{customer.name}</p>
                                                <p>{customer.comments}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HappyCustomersComp;
