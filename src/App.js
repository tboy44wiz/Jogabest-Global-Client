import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

/*==== Import AppStoreProvider HOC ====*/
import AppContextProvider from "./contexts/AppContextProvider";

/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import LandingPageComp from './components/pages_components/LandingPage_Comp';
import ContactPageComp from './components/pages_components/ContactPage_Comp';
import ProductPageComp from "./components/pages_components/ProductPage_Comp";
import ProductDetailsComp from "./components/pages_components/ProductDetails_Comp";
import AboutPageComp from "./components/pages_components/AboutPage_Comp";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppContextProvider>

            {/*=============================================================*/}
            {/*======================== Landing Page =======================*/}
            <Route exact path="/" component={ LandingPageComp } />

            {/*======================== About Page =======================*/}
            <Route exact path="/about_us" component={ AboutPageComp } />

            {/*======================== Product Page =======================*/}
            <Route exact path="/products" component={ ProductPageComp } />

            {/*======================== Product Detailed Page =======================*/}
            <Route exact path="/product/:product_name" component={ ProductDetailsComp } />

            {/*======================== Contact Page =======================*/}
            <Route exact path="/contact" component={ ContactPageComp } />

        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
