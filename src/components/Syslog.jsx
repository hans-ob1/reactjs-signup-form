import React from "react";

const SysLog = props => {

    return (

        <div className="col-lg-4 col-md-6">

        <div id="recent-activities-wrapper" className="card updates activities">
          <div id="activites-header" className="card-header d-flex justify-content-between align-items-center">
            <h4>
                Latest Activities
            </h4>                  
          </div>
          <div id="activities-box" role="tabpanel" className="collapse show">
            <ul className="activities list-unstyled">

              <li>
                <div className="row">
                  <div className="col-4 date-holder text-right">
                    <div className="icon"><i className="icon-clock"></i></div>
                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                  </div>
                  <div className="col-8 content"><strong>Meeting</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div className="col-4 date-holder text-right">
                    <div className="icon"><i className="icon-clock"></i></div>
                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                  </div>
                  <div className="col-8 content"><strong>Meeting</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div className="col-4 date-holder text-right">
                    <div className="icon"><i className="icon-clock"></i></div>
                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                  </div>
                  <div className="col-8 content"><strong>Meeting</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div className="col-4 date-holder text-right">
                    <div className="icon"><i className="icon-clock"></i></div>
                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                  </div>
                  <div className="col-8 content"><strong>Meeting</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
};

export default SysLog;