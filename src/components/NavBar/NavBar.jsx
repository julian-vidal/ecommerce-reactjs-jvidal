import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div className="top py-3">
                    <ul className="icons">
                        <li className="px-1"><a href="#"></a><i className="lab la-facebook-f"></i></li>
                        <li className="px-1"><a href="#"></a><i className="lab la-instagram"></i></li>
                        <li className="px-1"><a href="#"></a><i className="lab la-whatsapp"></i></li>
                    </ul>

                    <img src="./img/logo.png" alt="Logo" />

                    <ul className="icons">
                        <li className="px-1"><a href="#"></a><i className="las la-search la-rotate-270"></i></li>
                        <li className="px-1"><a href="#"></a><i className="las la-user"></i></li>
                        <li className="px-1"><a href="#"></a>
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
                                    <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>

                                    <ul className="dropdown nav-item has-megamenu">
                                        <a href="#" className="dropdown-toggle nav-link" role="button" id="menDropdown" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
                                        <div className="dropdown-menu megamenu container shadow">
                                            <div className="row">
                                                <div className="col-3">
                                                    <h6 className="dropdown-header px-0">Top Garments</h6>
                                                    <li className="nav-item"><a href="#">Shirts</a></li>
                                                    <li className="nav-item"><a href="#">Jackets</a></li>
                                                    <li className="nav-item"><a href="">T-shirts</a></li>
                                                    <li className="nav-item"><a href="">Hoodies</a></li>
                                                </div> {/* Top Garments ends */}
                                                <div className="col-3 px-0">
                                                    <h6 className="dropdown-header px-0">Bottom Garments</h6>
                                                    <li className="nav-item"><a href="#">Jeans</a></li>
                                                    <li className="nav-item"><a href="#">Pants</a></li>
                                                    <li className="nav-item"><a href="#">Shorts</a></li>
                                                </div> {/* Bottom Garments ends */}
                                                <div className="col-6">
                                                    <img src="https://via.placeholder.com/380x300" alt="" className="img-fluid"/>
                                                </div>
                                            </div> {/* row ends */}
                                        </div> {/* dropdown-menu ends */}
                                    </ul> {/* Men sub menu ends */}

                                    <ul className="dropdown nav-item has-megamenu">
                                        <a href="#" className="dropdown-toggle nav-link" role="button" id="womenDropdown" data-bs-toggle="dropdown" aria-expanded="false">Women</a>
                                        <div className="dropdown-menu megamenu container shadow">
                                            <div className="row">
                                                <div className="col-3">
                                                    <h6 className="dropdown-header px-0">Top Garments</h6>
                                                    <li className="nav-item"><a href="#">Blouses</a></li>
                                                    <li className="nav-item"><a href="#">Jackets</a></li>
                                                    <li className="nav-item"><a href="">T-shirts</a></li>
                                                    <li className="nav-item"><a href="">Hoodies</a></li>
                                                </div>
                                                <div className="col-3 px-0">
                                                    <h6 className="dropdown-header px-0">Bottom Garments</h6>
                                                    <li className="nav-item"><a href="#">Jeans</a></li>
                                                    <li className="nav-item"><a href="#">Pants</a></li>
                                                    <li className="nav-item"><a href="#">Skirts</a></li>
                                                </div>
                                                <div className="col-6">
                                                    <img src="https://via.placeholder.com/380x300" alt="" className="img-fluid"/>
                                                </div>
                                            </div> {/* row ends */}
                                        </div> {/* dropdown-menu ends */}
                                    </ul> {/* Women sub menu ends */}
                                        
                                    <li className="nav-item"><a href="#" className="nav-link">Kids</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Sale</a></li>
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