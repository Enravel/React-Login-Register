import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link, Redirect } from '@reach/router';

// SCSS
import './Login.scss';

export default class Login extends Component {
  static contextType = LocalStorageContext;
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(event) {
    event.preventDefault();
    this.context.submitLogin(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { shouldRedirect, currentUser } = this.context;
    const { email, password } = this.state;
    return (
      <div className="Login">
        {!currentUser ? (
          <>
            <h1>Login</h1>
            <form onSubmit={this.submitLogin}>
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                placeholder="Email"
                label="Email"
                value={email}
              />
              <br />
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={password}
              />
              <br />
              <br />
              <button>Login!</button>
            </form>
            <br />
            <br />
            <Link to="/register">
              Don't have an account ? Click here to register!
            </Link>
          </>
        ) : (
          <>
            <p>You are already logged in!</p>
            {shouldRedirect &&
              (currentUser.admin ? (
                <Redirect noThrow to="/admin" />
              ) : (
                <Redirect noThrow to="/home" />
              ))}
          </>
        )}
      </div>
    );
  }
}
