import React, { Component } from 'react';

// ROUTE STUFF
import { Link } from 'react-router-dom';

// SCSS
import './Index.scss';

export default class Index extends Component {
  render() {
    return (
      <div className="Index">
        <h1>Welcome to React Task 5</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
