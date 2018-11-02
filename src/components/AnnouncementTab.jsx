import React from "react";

const AnnouncementTab = props => {
    console.log(props.style);

    return (
        <div className="col-lg-5 col-md-12">

        <div id="new-updates" className="card updates recent-updated">
          <div id="updates-header" className="card-header d-flex justify-content-between align-items-center">
            <h4>
              Announcements
            </h4>
          </div>
          <div id="updates-box" role="tabpanel" className="collapse show">
            <ul className="news list-unstyled">

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>

              <li className="d-flex justify-content-between"> 
                <div className="left-col d-flex">
                  <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                <div className="right-col text-right">
                  <div className="update-date">24<span className="month">Jan</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>  
    );
};

export default AnnouncementTab;