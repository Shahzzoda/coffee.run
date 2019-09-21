import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
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
                        <h1 className="text-center">Login</h1>
                        <div className="row">
                            <input 
                                className="form-control col-12 mb-3"
                                id="email-login"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required />
                            <input
                                className="form-control col-12 mb-3"
                                id="pass-input"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required />
                            <button className="btn btn-success">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
