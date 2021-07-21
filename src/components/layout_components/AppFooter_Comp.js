//  Import _AppLayout_HOC scss.
import '../../scss/layout_components/_AppLayout_HOC.scss';

//  Import React Icons.
import { TiSocialFacebook } from 'react-icons/ti';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { RiPhoneLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';

//  Import Images.
import BrandLogo from '../../assets/images/car_parts_logo2.png';
import {Link} from "react-router-dom";

const AppFooterComp = (props) => {
    return (
        <footer className="AppFooterComp">
            {/* Footer */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-about wow fadeInUp">
                            <img src={ BrandLogo } className="brand__logo img-fluid" alt="Brand Logo" />
                            <p>
                                We are a young company always looking for new and creative ideas to help you
                                with our products in your everyday work.
                            </p>
                        </div>

                        <div className="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                            <h3>Contact</h3>
                            <p><HiOutlineLocationMarker className="contact__icon" /> Line 54 Alaba International Market, <br />Lagos State.</p>
                            <p><RiPhoneLine className="contact__icon" /> Phone: (+234) 803 1268 347</p>
                            <p><HiOutlineMail className="contact__icon" /> Email: <Link
                                to="mailto:hello@domain.com">hello@domain.com</Link></p>
                            <p><RiWhatsappLine className="contact__icon" /> WhatsApp: 0803 1268 347</p>
                        </div>

                        <div className="col-md-4 footer-links wow fadeInUp">
                            <div className="row">
                                <div className="col">
                                    <h3>Links</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <p><Link to="#" className="scroll-link">Home</Link></p>
                                    <p><Link to="#">About</Link></p>
                                    <p><Link to="#">Services</Link></p>
                                    <p><Link to="#">Products</Link></p>
                                </div>
                                <div className="col-md-6">
                                    <p><Link to="#">Plans &amp; pricing</Link></p>
                                    <p><Link to="#">Affiliates</Link></p>
                                    <p><Link to="#">Terms</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    &copy; Copyright <a href="https://myDomainName.com">CarParts</a>
                </div>
                <div className="footer-social">
                    <Link to="#"><TiSocialFacebook className="social__icon" /></Link>
                    <Link to="#"><RiTwitterLine className="social__icon" /></Link>
                    <Link to="#"><IoLogoInstagram className="social__icon" /></Link>
                    <Link to="#"><RiWhatsappLine className="social__icon" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default AppFooterComp;
