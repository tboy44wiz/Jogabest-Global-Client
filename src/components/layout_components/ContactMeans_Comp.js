
//  Import React Icons.
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { RiPhoneLine } from 'react-icons/ri';

//  Import _ContactMeans_Comp SCSS.
import '../../scss/layout_components/_ContactMeans_Comp.scss';

const ContactMeansComp = () => {
    return (
        <div className="ContactMeansComp">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 contact-item__wrapper">
                        <div className="contact-item__inner mb-md-0">
                            <div className="contact-item-icon__wrapper">
                                <HiOutlineLocationMarker className="contact-item__icon" />
                            </div>
                            <h3>Head Office</h3>
                            <p>Line 54 Alaba International Market, Lagos State.</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact-item__wrapper">
                        <div className="contact-item__inner mb-md-0">
                            <div className="contact-item-icon__wrapper" style={{ background: "#ff0000" }}>
                                <RiPhoneLine className="contact-item__icon" />
                            </div>
                            <h3>Phone</h3>
                            <p> (+234) 803 1268 347</p>
                            <p> (Whatsapp): 0803 1268 347</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact-item__wrapper">
                        <div className="contact-item__inner mb-md-0">
                            <div className="contact-item-icon__wrapper">
                                <HiOutlineMail className="contact-item__icon" />
                            </div>
                            <h3>Email</h3>
                            <p>hello@domain.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMeansComp;
