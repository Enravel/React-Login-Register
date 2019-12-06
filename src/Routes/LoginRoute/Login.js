import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link, Redirect } from '@reach/router';

// SCSS
import './Login.scss';

export default class Login extends Component {
  static contextType = LocalStorageContext;
  render() {
    const {
      submitLogin,
      handleLoginChange,
      shouldRedirect,
      currentUser
    } = this.context;
    const { email, password } = this.context.login;
    return (
      <div className="Login">
        {!currentUser ? (
          <>
            <h1>Login</h1>
            <form onSubmit={submitLogin}>
              <input
                onChange={handleLoginChange}
                name="email"
                type="email"
                placeholder="Email"
                label="Email"
                value={email}
              />
              <br />
              <input
                onChange={handleLoginChange}
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
