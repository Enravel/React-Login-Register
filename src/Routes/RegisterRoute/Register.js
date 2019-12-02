import React, { Component } from 'react';

// COMPONENTS
import Navbar from '../../Components/Navbar';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

import { Link, Redirect } from 'react-router-dom';
// SCSS
import './Register.scss';

export default class Register extends Component {
  static contextType = LocalStorageContext;
  render() {
    const {
      submitRegister,
      handleRegisterChange,
      shouldRedirect,
      currentUser
    } = this.context;
    const { username, email, password, repeatPassword } = this.context.register;
    return (
      <div className="Register">
        <Navbar />
        {/* kad se user registruje on nije ulogovan tako da app nece da renderuje drugi deo ove komponente (kad je ulogovan > currentUser) koja ce da ga redirectuje, zbog toga imam i !shouldRedirect tako da ako nema currentUsera i ako je shouldRedirect false onda ce da renderuje drugi deo ovog if-a, koj ce da ga redirektuje xd */}
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
            <h1>You already have an account</h1>
            {/* contexts > localStorageContext > this.state.shouldRedirect its passed as true for 100ms in registerSuccess() */}
            {/* zasto sam ovo uradio ovako je kad se user logina ocu da ga redirektuje a kad je loginovan a ukuca /login pise mu da im acc */}
            {shouldRedirect && <Redirect push to="/login" />}
          </>
        )}
      </div>
    );
  }
}
