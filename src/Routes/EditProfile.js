import React, { Component } from 'react';

// ROUTER
import { Link } from '@reach/router';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// SCSS
import '../Styles/EditProfile.scss';

export default class EditProfile extends Component {
  static contextType = LocalStorageContext;

  render() {
    const { currentUser } = this.context;
    return (
      <div className="EditProfile">
        {currentUser.admin ? (
          <h4>You cant change admin information!</h4>
        ) : (
          <Link noThrow to="/profile/edit/password">
            <button className="button-main">Edit Password</button>
          </Link>
        )}
      </div>
    );
  }
}
