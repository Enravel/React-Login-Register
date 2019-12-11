import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// ROUTER
import { Link, Redirect } from '@reach/router';

// SCSS
import '../Styles/Profile.scss';

export default class Profile extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, logout, shouldRedirect } = this.context;
    return (
      <div className="Profile">
        {currentUser ? (
          <div className="flex-column">
            <h2>Profile Information</h2>
            <div className="group">
              <h3>
                Username: {currentUser[Object.keys(currentUser)[0]].username}
              </h3>
              <h3>Email: {currentUser[Object.keys(currentUser)[0]].email}</h3>
            </div>
            {!currentUser.admin ? (
              <Link to="/profile/edit">
                <button className="button-main">Edit Profile</button>
              </Link>
            ) : (
              <h4>You cant change admin settings</h4>
            )}
            <button onClick={logout} className="button-main">
              Log Out
            </button>
          </div>
        ) : (
          <>
            <p>You have to log in to see your profile!</p>
            <Link to="/login">
              <button className="button-main">Log In</button>
            </Link>
            <Link to="/register">
              <button className="button-main">Register</button>
            </Link>
            {shouldRedirect && <Redirect noThrow to="/login" />}
          </>
        )}
      </div>
    );
  }
}
