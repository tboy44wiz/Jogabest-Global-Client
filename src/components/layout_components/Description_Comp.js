import React from 'react';

// import _AboutDescription_Comp SCSS
import '../../scss/layout_components/_Description_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";

const DescriptionComp = () => {
    return (
        <div className="AboutDescriptionComp">

            <SectionTitleComp hint="Welcome to Jogabest Global Investment." title="Who we are" />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="description__wrapper">
                            <span>Jogabest Global Investment Ltd,</span> Importer and Exporter of all kinds of Vehicles,
                            Automobiles Spare Parts, Motorcyles, Generators, Electronics, Boat Engines, Home Appliances,
                            Textile, Agro-products, Etc. <br />
                            We are one of the fastest growing and diversified business
                            conglomerates incorporated in Nigeria with a hard earned reputation for excellent business
                            practices and products superiority. The major source of our goods is Japan and that attests
                            to the quality and standardization of our product lines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionComp;