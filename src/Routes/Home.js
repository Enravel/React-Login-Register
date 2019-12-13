import React, { Component } from 'react';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import '../Styles/Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link to="/profile">
          <button className="button-main">Profile</button>
        </Link>
      </div>
    );
  }
}
