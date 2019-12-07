import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link, Redirect } from '@reach/router';

// SCSS
import './Register.scss';

export default class Register extends Component {
  static contextType = LocalStorageContext;
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  submitRegister(event) {
    event.preventDefault();
    this.context.submitRegister(this.state);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { shouldRedirect, currentUser } = this.context;
    const { username, email, password, repeatPassword } = this.state;
    return (
      <div className="Register">
        {!currentUser && !shouldRedirect ? (
          <>
            <h1>Register</h1>
            <form onSubmit={this.submitRegister}>
              <input
                onChange={this.handleChange}
                name="username"
                type="text"
                placeholder="Username"
                label="Username"
                value={username}
              />
              <br />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                placeholder="Email Address"
                label="Email Address"
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
              <input
                onChange={this.handleChange}
                name="repeatPassword"
                type="password"
                placeholder="Repeat Password"
                label="Repeat Password"
                value={repeatPassword}
              />
              <br />
              <br />
              <button>Register!</button>
            </form>
            <br />
            <br />
            <Link to="/login">
              Already have an account ? Click here to login!
            </Link>
          </>
        ) : (
          <>
            <p>You already have an account</p>
            {shouldRedirect && <Redirect noThrow to="/login" />}
          </>
        )}
      </div>
    );
  }
}
