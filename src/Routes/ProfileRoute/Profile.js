import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link } from 'react-router-dom';

// SCSS
import './Profile.scss';

export default class Profile extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, logout } = this.context;
    return (
      <div className="Profile">
        {currentUser ? (
          <>
            <h3>Profile Information</h3>
            Username: {currentUser[Object.keys(currentUser)[0]].username}
            <br />
            Email: {currentUser[Object.keys(currentUser)[0]].email}
            <br />
            <br />
            <button onClick={logout}>Log Out</button>
            <br />
            <br />
            {!currentUser.admin ? (
              <Link to="/profile/edit">Edit Profile</Link>
            ) : (
              <h4>You cant change admin settings</h4>
            )}
          </>
        ) : (
          <>
            <p>You have to log in to see your profile!</p>
            <br />
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    );
  }
}
