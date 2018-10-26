import React from "react";
import image from "../img/aisg_logo_white_hor.png";

const NavBarMain = props => {
    console.log(props.style);

    return (
        <nav className = "navbar">
            <div className="container-fluid">
                <div className="navbar-holder d-flex align-items-center justify-content-between">
                    <div className="navbar-header">
                        <div className="navbar-brand logo">
                            <img src={image}></img>
                        </div>
                    </div>
                    <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                        <li className="nav-item">
                            <a href="login.html" className="nav-link logout"> 
                                <span className="d-none d-sm-inline-block">Login</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="login.html" className="nav-link logout"> 
                                <span className="d-none d-sm-inline-block">Signup</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>     
    );
};

export default NavBarMain;