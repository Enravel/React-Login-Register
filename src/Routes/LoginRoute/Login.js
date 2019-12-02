import React, { Component } from 'react';

// COMPONENTS
import Navbar from '../../Components/Navbar';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

import { Link, Redirect } from 'react-router-dom';

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
        <Navbar />
        {/* if the user is logged in, it will not let him access the form */}
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
            <h1>You are already logged in!</h1>
            {/* contexts > localStorageContext > this.state.shouldRedirect its passed as true for 100ms in loginSuccess() */}
            {/* every user has a uuid() generated id, instead of admin so thats how the app knows if its admin and redirects accordingly */}
            {shouldRedirect &&
              (currentUser.admin ? (
                <Redirect push to="/admin" />
              ) : (
                <Redirect push to="/home" />
              ))}
          </>
        )}
      </div>
    );
  }
}
