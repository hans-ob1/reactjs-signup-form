import React from 'react';

const HeaderInt = props => {
  return (
    <header className="header">
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-holder d-flex align-items-center justify-content-between">
                    <div className="navbar-header">
                        <a id="toggle-btn" href="#" className="menu-btn">
                        <i className="icon-bars"> </i>
                        </a>
                    </div>

                    <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                        <li className="nav-item">
                            <a href={props.link} className="nav-link logout"> 
                                <span className="d-none d-sm-inline-block">Logout</span>
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
};

export default HeaderInt;