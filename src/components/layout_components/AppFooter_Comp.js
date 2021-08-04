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
import React from "react";

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
                                <span>Jogabest Global Investment Ltd</span> is one of the fastest growing and diversified business
                                conglomerates incorporated in Nigeria with a hard earned reputation for excellent business
                                practices and products superiority.
                            </p>
                        </div>

                        <div className="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                            <h3>Contact</h3>
                            <p><HiOutlineLocationMarker className="contact__icon" /> No. 4, Jimade Close Matori, PIE & FRIENDS Warehouse, Ladipo, Mushin, Lagos State.</p>
                            <p><RiPhoneLine className="contact__icon" />
                                <span> +234 813 2403 322</span>,
                                <span> +234 806 8998 490</span>, <br/>
                                <span> +234 815 3536 249</span>
                            </p>
                            <p><HiOutlineMail className="contact__icon" /> Email: <Link
                                to="mailto:hello@domain.com">jogabestglobal@gmail.com</Link></p>
                            <p><RiWhatsappLine className="contact__icon" /> WhatsApp: +234 813 2403 322</p>
                        </div>

                        <div className="col-md-4 footer-links wow fadeInUp">
                            <div className="row">
                                <div className="col">
                                    <h3>Links</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <p><Link to="/" className="scroll-link">Home</Link></p>
                                    <p><Link to="/about_us">About</Link></p>
                                    <p><Link to="/products">Products</Link></p>
                                    <p><Link to="/contact">Contacts</Link></p>
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
