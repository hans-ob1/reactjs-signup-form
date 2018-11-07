import React from 'react';

import logo from '../../../img/aisg_logo_white.png';

const SideBar = ( props ) => {

    return (
        <nav className="side-navbar">
            <div className="side-navbar-wrapper">

            <div className="sidenav-header d-flex align-items-center justify-content-center">

                <div className="sidenav-header-inner text-center">
                    <img src="assets/img/aisg_logo_white.png" alt="user" className="img-fluid rounded-circle"></img>
                    <h2 className="h5">{props.firstname}</h2>
                    <span>{props.role}</span>
                </div>
    
                <div className="sidenav-header-logo">
                    <a href="index.html" className="brand-small text-center">
                        <strong>AI</strong>
                        <strong className="text-primary">SG</strong>
                    </a>
                </div>
            </div>
    
            <div className="main-menu">
                <h5 className="sidenav-heading">Main</h5>
                <ul id="side-main-menu" className="side-menu list-unstyled">
    
                <li>
                    <a href="index.html">
                        <i className="icon-home"></i>
                        View Proposals
                    </a>
                </li>
    
                <li>
                    <a href="forms.html">
                        <i className="icon-form"></i>
                        Grant Calls
                    </a>
                </li>
    
                <li>
                    <a href="charts.html">
                        <i className="fa fa-bar-chart"></i>
                        Settings
                    </a>
                </li>
                </ul>
            </div>
    

            <div className="admin-menu">
                <h5 className="sidenav-heading">(Admin Only)</h5>
                <ul id="side-admin-menu" className="side-menu list-unstyled"> 
    
                <li>
                    <a href="#"> 
                        <i className="icon-screen"></i>
                        User Management
                    </a>
                </li>
    
                <li>
                    <a href="#">
                        <i className="icon-flask"></i>
                        Options
                    </a>
                </li>
    
                </ul>
            </div>
            </div>
        </nav>

    );
};