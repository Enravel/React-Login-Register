import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import '../Styles/Index.scss';

export default class Index extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return (
      <div className="Index">
        {currentUser ? (
          <>
            <h1>Welcome to React Task 5</h1>
            <Link to="/home">
              <button className="button-main">Home</button>
            </Link>
          </>
        ) : (
          <>
            <h1>Welcome to React Task 5</h1>
            <Link to="/login">
              <button className="button-main">Log In</button>
            </Link>
            <Link to="/register">
              <button className="button-main">Register</button>
            </Link>
          </>
        )}
      </div>
    );
  }
}
