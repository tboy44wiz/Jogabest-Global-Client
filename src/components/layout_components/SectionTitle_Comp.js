//  Import _SectionTitle_Comp SCSS.
import '../../scss/layout_components/_SectionTitle_Comp.scss'

const SectionTitleComp = (props) => {
    return (
        <div className="SectionTitleComp ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>{ props.hint }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 >{ props.title }</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitleComp;
