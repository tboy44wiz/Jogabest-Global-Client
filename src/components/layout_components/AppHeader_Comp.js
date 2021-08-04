import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import "animate.css/animate.min.css";

//  Import _AppLayout_HOC scss.
import '../../scss/layout_components/_AppLayout_HOC.scss';

//  Import Images.
import BrandLogo from '../../assets/images/car_parts_logo2.png';
import {useEffect} from "react";

const AppHeaderComp = (props) => {

    useEffect(() => {
        const navbar = document.querySelector("nav");
        window.onscroll = () => {
            if (window.scrollY >= 150) {
                navbar.classList.add("AppHeaderComp_Dark");
            }
            else {
                navbar.classList.remove("AppHeaderComp_Dark");
            }
        }
    });

    return (
        <Navbar className="AppHeaderComp container-fluid p-sm-1 p-md-3" collapseOnSelect expand="lg" variant="dark">
            {/* Brand Logo */}
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">
                    <img src={ BrandLogo } className="brand__logo" alt="Brand Logo" />
                </Nav.Link>
            </Navbar.Brand>

            {/* Nav Bar */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className= "justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about_us">About</Nav.Link>
                    {/*<NavDropdown className="p-0" title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="#" className="dropDown__items">Service 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="dropDown__items">Service 2</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="dropDown__items">Service 3</NavDropdown.Item>
                    </NavDropdown>*/}
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppHeaderComp;
