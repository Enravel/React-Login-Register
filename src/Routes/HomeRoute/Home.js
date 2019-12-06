import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import './Home.scss';

export default class Home extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return (
      <div className="Home">
        {currentUser ? (
          <>
            <h1>Home</h1>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <p>You have to log in to see this page</p>
        )}
      </div>
    );
  }
}
