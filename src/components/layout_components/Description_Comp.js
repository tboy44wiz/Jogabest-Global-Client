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
                            Automobiles Spare Parts, Motorcycles, Generators, Electronics, Boat Engines, Home Appliances,
                            Textile, Agro-products, etc. <br />
                            We are one of the fastest growing and diversified business conglomerates incorporated in
                            Nigeria with a hard earned reputation for excellent business practices and products
                            superiority. The major source of our goods is Japan and that attests to the quality and
                            standardization of our product lines.
                        </p>
                        <p>
                            Jogabest typically invests in businesses that have a high growth potential both in and out
                            of Nigeria. Over the years we have consistently met the growing needs of the local population
                            with regard to our product lines in an efficient manner through well streamlined service and
                            supply-chain system. The company understands the nuances of operating under difficult and
                            complex markets and has a competent personnel placed in these markets, managing heavy
                            investments into infrastructure. In accordance with its aim to be a global, stable and
                            quality oriented provider of products to its customers, Jogabest has established associations
                            with leading principals and suppliers worldwide. In a phased and planned manner, the Company
                            is poised for healthy growth in the coming years and is well positioned to consolidate itself
                            as a pre-eminent business conglomerate. This is resultant from the embraced diversity in the
                            company.
                        </p>
                        <p>
                            <strong>Jogabest Global Investment Ltd's</strong>  team have mastered the art of building
                            long-lasting relationships and have been able to establish a flawless flow of energetic ideas
                            and solutions, and an unending desire to push the limits of design and functionality, for you
                            the customer.
                        </p>
                        <p>
                            In our subsistence, we are solely focused on product and service creation and innovation
                            that fulfill customers' unique needs. Our strength lies not only in our creative and
                            innovative zeal, but also in our technical business ideas. We want you to feel confident
                            that your needs and choices are best met with one team. A group of talented, experienced,
                            and aggressive individuals working together with the core mandates of creating and utilizing
                            its unique competence through strategic thinking to offer uncommon products and services to
                            our potential markets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionComp;