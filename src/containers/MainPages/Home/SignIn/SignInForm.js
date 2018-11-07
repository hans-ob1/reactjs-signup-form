import React, { Component } from 'react';

// Import Element
import Input from '../../../../components/UI/Input/Input';

class SignInForm extends Component {
    state = {
        loginForm: {
            username: {
                label: 'Username:',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Usename',
                    class: 'form-control'
                },
                value: ''
            },
            password: {
                label: 'Password:',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Password',
                    class: 'form-control'
                },
                value: ''
            }
        },
        loading: false
    }
    
    render () {
        const formElementsArray = [];
        for (let key in this.state.loginForm){
            formElementsArray.push(
                {
                    id: key,
                    config: this.state.loginForm[key]
                }
            );
        }

        let form = (
            <form>
                {   
                    formElementsArray.map(
                        formElement => (
                            <Input
                                key={formElement.id}
                                label={formElement.config.label}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)} 
                            />
                        )
                    )
                }
            </form>
        );

        return (
            <section className="mt-20px mb-30px">
                <div className="container signup-placement">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header d-flex align-items-center">
                                <h4>User Login</h4>
                            </div>
                            <div className="card-body">
                                <p>Enter <b>Email</b> and <b>Password</b> to Login.</p>
                                {form}
                                <p>Forgot login? click here to reset.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
        );
    }
}

export default SignInForm;