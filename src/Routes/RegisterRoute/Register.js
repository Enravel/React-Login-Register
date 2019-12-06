import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link, Redirect } from '@reach/router';

// SCSS
import './Register.scss';

export default class Register extends Component {
  static contextType = LocalStorageContext;
  render() {
    const {
      submitRegister,
      handleRegisterChange,
      shouldRedirect,
      currentUser,
      register
    } = this.context;
    const { username, email, password, repeatPassword } = register;
    return (
      <div className="Register">
        {!currentUser && !shouldRedirect ? (
          <>
            <h1>Register</h1>
            <form onSubmit={submitRegister}>
              <input
                onChange={handleRegisterChange}
                name="username"
                type="text"
                placeholder="Username"
                label="Username"
                value={username}
              />
              <br />
              <input
                onChange={handleRegisterChange}
                name="email"
                type="email"
                placeholder="Email Address"
                label="Email Address"
                value={email}
              />
              <br />
              <input
                onChange={handleRegisterChange}
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={password}
              />
              <br />
              <input
                onChange={handleRegisterChange}
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
