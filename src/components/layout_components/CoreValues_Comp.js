import React from 'react';

import {RiCustomerService2Fill} from "react-icons/ri";
import {GrDocumentPerformance} from "react-icons/gr";
import {BsPersonBoundingBox} from "react-icons/bs";
import {GiBanknote} from "react-icons/all";

//  Import _CoreValues_Comp SCSS.
import '../../scss/layout_components/_CoreValues_Comp.scss';
import SectionTitleComp from "./SectionTitle_Comp";

const CoreValuesComp = () => {
    return (
        <div className="CoreValuesComp">

            <SectionTitleComp hint="What are our Core values?" title="Core Values" />

            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 col-xl-3 mb-4 mCol">
                        <div className="core-value-item__wrapper">
                            <div className="core-value-icon__wrapper">
                                <GrDocumentPerformance />
                            </div>
                            <h4 className="text-uppercase">Excellence</h4>
                        </div>
                        <div className="pt-3">
                            <p>
                                As a visionary organization, excellent is our watch word. We strive to engage in
                                transparent and genuine business practices that project our good will to our stakeholders.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-4 mCol">
                        <div className="core-value-item__wrapper">
                            <div className="core-value-icon__wrapper">
                                <RiCustomerService2Fill />
                            </div>
                            <h4 className="text-uppercase">24/7 Customer Service</h4>
                        </div>
                        <div className="pt-3">
                            <p>
                                To consider our Customers as the organisation's driving force and strive to maintain
                                intimacy, integrity and good will in our quest to lead in Customers' satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-4 mCol">
                        <div className="core-value-item__wrapper">
                            <div className="core-value-icon__wrapper">
                                <GiBanknote />
                            </div>
                            <h4 className="text-uppercase">Entrepreneurship</h4>
                        </div>
                        <div className="pt-3">
                            <p>
                                As a growing business, we are committed to seize every business opportunities locally
                                and globally to maintain our diversification drive and global leadership.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 mb-4 mCol">
                        <div className="core-value-item__wrapper" style={{ height: "150px" }}>
                            <div className="core-value-icon__wrapper">
                                <BsPersonBoundingBox />
                            </div>
                            <h4 className="text-uppercase m-0">Leadership</h4>
                        </div>
                        <div className="pt-3">
                            <p>
                                We pursue the goals of becoming price, quality and business leaders in local and global
                                business frontier by focusing on continuous improvement, strong partnership and professionalism.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValuesComp;