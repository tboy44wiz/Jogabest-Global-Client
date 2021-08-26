import React from 'react';


//  Import _Goal_Comp SCSS.
import '../../scss/layout_components/_Goal_Comp.scss';

//  Import Components.
import SectionTitleComp from "./SectionTitle_Comp";

const GoalComp = () => {
    return (
        <div className="GoalComp">

            <SectionTitleComp hint="Our Main Gaol." title="Our Goal" />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="goal__text">
                            <span className="quote">“</span>
                            Our goal is to make Jogabest a place where people's choices are best met on time, quality,
                            within budget, <br />in affordability while adding value and satisfactions to our clients
                            expectations.
                            <span className="quote">“</span>
                        </p>
                        <p className="president">President/CEO</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalComp;