import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

// Load component
import NavBarMain from "../components/NavbarMain";
import SignInput from "../components/SignInput";
import AnnoucementTab from "../components/AnnouncementTab";
import SysLog from "../components/Syslog";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
              <NavBarMain />
          </header>

          <div className="text-center title-placement">
            <h1>Grant Management System 2.0</h1>
          </div>

          <section className="mt-20px mb-30px">
            <div className="container-fluid">
              <div className="row">
                  <div className="text-center">
                    <SignInput />
                    <AnnoucementTab />
                  </div>
              </div>
            </div>
          </section>

        <Switch>
          <Route path="/signup" component={NavBarMain} />
        </Switch>

        </div>
      </BrowserRouter>
    );

  }

}

export default App;
