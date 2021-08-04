import React from 'react';

import {RiCustomerService2Fill} from "react-icons/ri";
import {GrDocumentPerformance} from "react-icons/gr";
import {BsPersonBoundingBox} from "react-icons/bs";

//  Import _CoreValues_Comp SCSS.
import '../../scss/layout_components/_CoreValues_Comp.scss';

const CoreValuesComp = () => {
    return (
        <div className="CoreValuesComp">
            <div className="container">
                <h3>Core Values</h3>
                <div className="row mt-3">
                    <div className="col-lg-4 mb-2">
                        <div className="core-value-item__wrapper">
                            <div className="core-value-icon__wrapper">
                                <GrDocumentPerformance />
                            </div>
                            <h4 className="text-uppercase">Excellence</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-2">
                        <div className="core-value-item__wrapper">
                            <div className="core-value-icon__wrapper">
                                <RiCustomerService2Fill />
                            </div>
                            <h4 className="text-uppercase">24/7 Customer Service</h4>
                        </div>
                    </div>
                    {/*<div className="col-lg-3 mb-2">
                            <div className="core-value-item__wrapper" style={{ height: "150px" }}>
                                <div className="core-value-icon__wrapper">
                                    <GiBanknote />
                                </div>
                                <h4 className="text-uppercase">Entrepreneurship</h4>
                            </div>
                        </div>*/}
                    <div className="col-lg-4 mb-2 ">
                        <div className="core-value-item__wrapper" style={{ height: "150px" }}>
                            <div className="core-value-icon__wrapper">
                                <BsPersonBoundingBox />
                            </div>
                            <h4 className="text-uppercase m-0">Leadership</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValuesComp;