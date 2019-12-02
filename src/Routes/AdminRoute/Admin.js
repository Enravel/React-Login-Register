import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// COMPONENTS
import Navbar from '../../Components/Navbar';

// SCSS
import './Admin.scss';

export default class Admin extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, users } = this.context;
    return (
      <div className="Admin">
        <Navbar />
        {/* keys are generated using uuid, but in the admin case the key is 'admin' */}
        {currentUser && currentUser.admin ? (
          <>
            <h1>Admin</h1>
            {Object.values(users).map(user => (
              <>
                <div>
                  <p>
                    Username: <b>{user.username}</b> Email: <b>{user.email}</b>
                    Password: <b>{user.password}</b>{' '}
                    <span>
                      <b>X</b>
                    </span>
                  </p>
                </div>
              </>
            ))}
          </>
        ) : (
          <h2>Only admin can see this page</h2>
        )}
      </div>
    );
  }
}
