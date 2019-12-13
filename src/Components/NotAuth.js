import React, { Component } from 'react';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import '../Styles/NotAuth.scss';

export default class NotAuth extends Component {
  render() {
    return (
      <div className="NotAuth">
        <h3>{this.props.message}</h3>
        <Link to="/login">
          <button className="button-main">Log In</button>
        </Link>
        <b>or</b>
        <Link to="/register">
          <button className="button-main">Register</button>
        </Link>
      </div>
    );
  }
}
