import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// UUID
import uuid from 'uuid/v4';

// SCSS
import './Admin.scss';

export default class Admin extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, users, removeUser } = this.context;
    return (
      <div className="Admin">
        {currentUser && currentUser.admin ? (
          <>
            <h1>Admin</h1>
            {Object.keys(users).length > 0 ? (
              Object.values(users).map(user => (
                <div key={uuid()}>
                  <p>
                    Email: <b>{user.email}</b>
                    <span onClick={() => removeUser(user.email)}>
                      <b>X</b>
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <h4>There are no registered users!</h4>
            )}
          </>
        ) : (
          <p>Only admin can see this page</p>
        )}
      </div>
    );
  }
}
