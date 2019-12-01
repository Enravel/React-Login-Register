import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';
import { Redirect } from 'react-router-dom';
// SCSS
import './Register.scss';

export default class Register extends Component {
  static contextType = LocalStorageContext;
  render() {
    const {
      submitRegister,
      handleRegisterChange,
      username,
      email,
      password,
      repeatPassword,
      shouldRedirect
    } = this.context;
    return (
      <div className="Register">
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
          <button>Register!</button>
          {shouldRedirect && <Redirect push to="/login" />}
        </form>
      </div>
    );
  }
}
