import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

//
import { Link } from 'react-router-dom';

// SCSS
import './Navbar.scss';

export default class Navbar extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, logout } = this.context;
    return (
      <div className="Navbar">
        {currentUser ? (
          <>
            <h3>
              You are logged in as{' '}
              {currentUser[Object.keys(currentUser)[0]].username}
            </h3>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <h3>You are not logged in</h3>
            <Link to="/login">Log In</Link>
          </>
        )}
      </div>
    );
  }
}
