import React from 'react';
import frontlogo from '../../../img/aisg_logo_white_hor.png';

const HeaderExt = props => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-holder d-flex align-items-center justify-content-between">
            <div className="navbar-header">
                <div className="navbar-brand logo">
                    <img src={ frontlogo }></img>
                </div>      
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderExt;