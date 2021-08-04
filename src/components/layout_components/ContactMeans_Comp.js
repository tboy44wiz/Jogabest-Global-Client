
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
                            <p>No. 4, Jimade Close Matori, PIE & FRIENDS Warehouse, Ladipo, Mushin, Lagos State.</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact-item__wrapper">
                        <div className="contact-item__inner mb-md-0">
                            <div className="contact-item-icon__wrapper" style={{ background: "#ff0000" }}>
                                <RiPhoneLine className="contact-item__icon" />
                            </div>
                            <h3>Phone</h3>
                            <p> (+234) 813 2403 322</p>
                            <p> (+234) 806 8998 490</p>
                            <p> (+234) 815 3536 249</p>
                        </div>
                    </div>
                    <div className="col-md-4 contact-item__wrapper">
                        <div className="contact-item__inner mb-md-0">
                            <div className="contact-item-icon__wrapper">
                                <HiOutlineMail className="contact-item__icon" />
                            </div>
                            <h3>Email</h3>
                            <p>jogabestglobal@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMeansComp;
