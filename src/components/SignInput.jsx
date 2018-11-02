import React from "react";
import {
    Link
} from "react-router-dom";


const SignInput = props => {
    console.log(props.style);
    return (
        <div className="col-lg-3 col-md-3">
            <div className="card">
                <div className="card-header d-flex align-items-center">
                    <h4>User Login</h4>
                </div> 

                <div className="card-body">
                    <p>Enter Email and Password to Login.</p>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email Address" className="form-control"></input>
                        </div>
                        <div className="form-group">       
                            <label>Password</label>
                            <input type="password" placeholder="Password" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary"></input>
                            <Link className="btn btn-info" to="/signup">Signup</Link>                       
                        </div>                                                                              
                    </form>
                    <p>forgot login? click <Link to="/forgetlogin">here</Link> to reset.</p>                     
                </div>               
            </div>
        </div>
    );
};

export default SignInput;