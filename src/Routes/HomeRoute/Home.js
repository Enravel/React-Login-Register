import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// COMPONENTS
import Navbar from '../../Components/Navbar';

// SCSS
import './Home.scss';

export default class Home extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return (
      <div className="Home">
        <Navbar />
        {/* locks the page if the user is not logged in */}
        {currentUser ? (
          <h1>Home</h1>
        ) : (
          <h1>You have to log in to see this page</h1>
        )}
      </div>
    );
  }
}
