import React, { Component } from 'react';

// ROUTER
import { Link } from '@reach/router';

// SCSS
import '../Styles/Index.scss';

export default class Index extends Component {
  render() {
    return (
      <div className="Index">
        <h1>Welcome to React Task 5</h1>
        <Link to="/home">
          <button className="button-main">Home</button>
        </Link>
      </div>
    );
  }
}
