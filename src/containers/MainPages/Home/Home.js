import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

// Load component
import HeaderExt from "../../../components/Navigation/Header/HeaderExt";
import Footer from "../../../components/Navigation/Footer/Footer";

// Load Form
import SignInForm from './SignIn/SignInForm';


class Home extends Component {

  render() {
    return (
      <BrowserRouter>
        <body>

          <HeaderExt />

          <div className="text-center title-placement">
            <h1>Grant Management System 2.0</h1>
          </div>
          
          <SignInForm />
          <Footer />

        </body>
      </BrowserRouter>
    );
  }
}

export default Home;
