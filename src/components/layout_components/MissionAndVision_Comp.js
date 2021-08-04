import React from 'react';

//  Import _MissionAndVision_Comp SCSS.
import '../../scss/layout_components/_MissionAndVision_Comp.scss';

//  Import Images.
import BannerLeft from "../../assets/images/banner_left.png";
import BannerRight from "../../assets/images/banner_right.png";
import SectionTitleComp from "./SectionTitle_Comp";

const MissionAndVisionComp = () => {
    return (
        <div className="MissionAndVisionComp">

            <SectionTitleComp hint="Our driving forces." title="Our Mission and Vision" />

            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-6 px-0">
                        <div className="vision__wrapper">
                            <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src={ BannerLeft } alt="" />
                            <div className="text-right">
                                <h3 className="text-uppercase">Our Mission</h3>
                                <p>To provide value oriented products and services to our stakeholders.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <div className="mission__wrapper">
                            <div className="text-left">
                                <h3 className="text-uppercase text-light mb-3">Our Vision</h3>
                                <p>To strive to go global and be passionate about meeting the
                                    expected needs of Customers while creating value for shareholders.
                                </p>
                            </div>
                            <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src={ BannerRight } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVisionComp;