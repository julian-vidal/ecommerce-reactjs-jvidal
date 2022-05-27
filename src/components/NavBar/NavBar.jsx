import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div className="top py-3">
                    <ul className="icons">
                        <li className="px-1"><Link to="#"><i className="lab la-facebook-f"></i></Link></li>
                        <li className="px-1"><Link to="#"><i className="lab la-instagram"></i></Link></li>
                        <li className="px-1"><Link to="#"><i className="lab la-whatsapp"></i></Link></li>
                    </ul>

                    <Link to="/"> <img src="https://julianvidal-dev.com/ecommerce-react/logo.png" alt="Logo" /> </Link>

                    <ul className="icons">
                        <li className="px-1"><Link to="#"><i className="las la-search la-rotate-270"></i></Link></li>
                        <li className="px-1"><Link to="#"><i className="las la-user"></i></Link></li>
                        <li className="px-1">
                            <CartWidget />
                        </li>
                    </ul>
                </div> {/* Top menu ends */}  
                
                <div className="bottom py-0">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav justify-content-center">
                                    <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>

                                    <ul className="dropdown nav-item has-megamenu">
                                        <NavLink to="/category/men" className="dropdown-toggle nav-link" id="menDropdown"  aria-expanded="false">Men</NavLink>
                                        <div className="dropdown-menu megamenu container shadow">
                                            <div className="row">
                                                <div className="col-3">
                                                    <h6 className="dropdown-header px-0">Top Garments</h6>
                                                    <li className="nav-item"><Link to="#">Shirts</Link></li>
                                                    <li className="nav-item"><Link to="#">Jackets</Link></li>
                                                    <li className="nav-item"><Link to="">T-shirts</Link></li>
                                                    <li className="nav-item"><Link to="">Hoodies</Link></li>
                                                </div> {/* Top Garments ends */}
                                                <div className="col-3 px-0">
                                                    <h6 className="dropdown-header px-0">Bottom Garments</h6>
                                                    <li className="nav-item"><Link to="#">Jeans</Link></li>
                                                    <li className="nav-item"><Link to="#">Pants</Link></li>
                                                    <li className="nav-item"><Link to="#">Shorts</Link></li>
                                                </div> {/* Bottom Garments ends */}
                                                <div className="col-6">
                                                    <img src="https://via.placeholder.com/380x300" alt="" className="img-fluid"/>
                                                </div>
                                            </div> {/* row ends */}
                                        </div> {/* dropdown-menu ends */}
                                    </ul> {/* Men sub menu ends */}

                                    <ul className="dropdown nav-item has-megamenu">
                                        <NavLink to="/category/women" className="dropdown-toggle nav-link">Women</NavLink>
                                        <div className="dropdown-menu megamenu container shadow">
                                            <div className="row">
                                                <div className="col-3">
                                                    <h6 className="dropdown-header px-0">Top Garments</h6>
                                                    <li className="nav-item"><Link to="#">Blouses</Link></li>
                                                    <li className="nav-item"><Link to="#">Jackets</Link></li>
                                                    <li className="nav-item"><Link to="">T-shirts</Link></li>
                                                    <li className="nav-item"><Link to="">Hoodies</Link></li>
                                                </div>
                                                <div className="col-3 px-0">
                                                    <h6 className="dropdown-header px-0">Bottom Garments</h6>
                                                    <li className="nav-item"><Link to="#">Jeans</Link></li>
                                                    <li className="nav-item"><Link to="#">Pants</Link></li>
                                                    <li className="nav-item"><Link to="#">Skirts</Link></li>
                                                </div>
                                                <div className="col-6">
                                                    <img src="https://via.placeholder.com/380x300" alt="" className="img-fluid"/>
                                                </div>
                                            </div> {/* row ends */}
                                        </div> {/* dropdown-menu ends */}
                                    </ul> {/* Women sub menu ends */}
                                        
                                    <li className="nav-item">
                                        <NavLink to="/category/kids" className="nav-link">Kids</NavLink>
                                    </li>
                                </ul>

                            </div>
                            
                        </div> {/* #navbarSupportedContent ends */}
                        
                    </nav>
                </div>  {/* Bottom menu ends */}  
            </div>
        </header>
        
    )

    
}
    


export default NavBar;