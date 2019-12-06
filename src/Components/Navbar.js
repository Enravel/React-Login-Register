import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// SCSS
import './Navbar.scss';

export default class Navbar extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return (
      <div className="Navbar">
        {currentUser ? (
          <>
            <h4>
              You are logged in as{' '}
              {currentUser[Object.keys(currentUser)[0]].username}
            </h4>
          </>
        ) : (
          <>
            <h4>You are not logged in</h4>
          </>
        )}
        <hr />
      </div>
    );
  }
}
