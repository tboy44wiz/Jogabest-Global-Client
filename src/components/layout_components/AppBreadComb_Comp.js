
//  Import _AppBreadComb_Comp SCSS
import '../../scss/layout_components/_AppBreadComb_Comp.scss';

//  Import product images.


const AppBreadCombComp = (props) => {
    return (
        <div className="AppBreadCombComp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>{ props.title }</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Home / { props.title } {(props.subTitle !== undefined) && ( ` / ${props.subTitle}` )}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppBreadCombComp;
