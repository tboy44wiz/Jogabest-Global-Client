import React from 'react';


//  Import _BusinessAreas_Comp SCSS.
import '../../scss/layout_components/_BusinessAreas_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";

const BusinessAreasComp = () => {
    return (
        <div className="BusinessAreasComp">

            <SectionTitleComp hint="Our core areas of business encompass." title="Business Areas" />

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li>Importation and Exportation</li>
                            <li>Motor Vehicle Sales, Distribution and Servicing</li>
                            <li>Motorcycle Sales, Distribution and Serving</li>
                            <li>Automobile Spare Parts</li>
                            <li>Agro Allied</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Generators and Refrigerators</li>
                            <li>Textiles</li>
                            <li>Tyres and Tubes</li>
                            <li>Electronics</li>
                            <li>Boat Engines</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessAreasComp;