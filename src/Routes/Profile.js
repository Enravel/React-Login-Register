import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import '../Styles/Profile.scss';

export default class Profile extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, logout } = this.context;
    return (
      <div className="Profile">
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
      </div>
    );
  }
}
