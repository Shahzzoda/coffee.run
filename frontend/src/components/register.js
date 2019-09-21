import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            school: '',
            phone: '',
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handlePassword2Change(event) {
        this.setState({ password2: event.target.value });
    }

    handleSchoolChange(event) {
        this.setState({ school: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1 id="coffee-run-header" className="text-center">
                <Link to={{ pathname: '/' }}>
                    <a><i className="material-icons">keyboard_arrow_left</i>Home<i className="material-icons">keyboard_arrow_right</i></a> 
                </Link>
                </h1>
                <form onSubmit={this.handleSubmit} id="login-form">
                    <div className="container">
                        <h1 className="text-center">Register</h1>
                        <div className="row">
                            <input 
                                className="form-control col-12 mb-3"
                                id="firstName-register"
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange}
                                required />
                            <input 
                                className="form-control col-12 mb-3"
                                id="lastName-register"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                                required />
                            <input 
                                className="form-control col-12 mb-3"
                                id="email-register"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required />
                            <input
                                className="form-control col-12 mb-3"
                                id="pass-register"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required />
                            <input
                                className="form-control col-12 mb-3"
                                id="pass2-register"
                                type="password"
                                placeholder="Confirm Password"
                                value={this.state.password2}
                                onChange={this.handlePassword2Change}
                                required />
                            <input 
                                className="form-control col-12 mb-3"
                                id="school-register"
                                type="text"
                                placeholder="School"
                                value={this.state.school}
                                onChange={this.handleSchoolChange}
                                required />
                            <input 
                                className="form-control col-12 mb-3"
                                id="phone-register"
                                type="number"
                                placeholder="Phone Number"
                                value={this.state.phone}
                                onChange={this.handlePhoneChange}
                                required />
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
