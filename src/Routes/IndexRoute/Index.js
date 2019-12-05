import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// ROUTE STUFF
import { Link } from 'react-router-dom';

// SCSS
import './Index.scss';

export default class Index extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return (
      <div className="Index">
        {currentUser ? (
          <>
            <h1>Welcome to React Task 5</h1>
            <Link to="/home">Home</Link>
          </>
        ) : (
          <>
            <h1>Welcome to React Task 5</h1>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    );
  }
}
