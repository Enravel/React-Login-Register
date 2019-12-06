import React, { Component } from 'react';

// ROUTER
import { Router } from '@reach/router';

// COMPONENT ROUTES
import Index from './Routes/IndexRoute/Index';
import Login from './Routes/LoginRoute/Login';
import Register from './Routes/RegisterRoute/Register';
import Home from './Routes/HomeRoute/Home';
import Profile from './Routes/ProfileRoute/Profile';
import EditProfile from './Routes/EditProfileRoute/EditProfile';
import Admin from './Routes/AdminRoute/Admin';
import NotFound from './Routes/NotFoundRoute/NotFound';

// COMPONENTS
import Navbar from './Components/Navbar';

// CONTEXT
import { LocalStorageProvider } from './contexts/localStorage.context';

// SCSS
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalStorageProvider>
          <Navbar />
          <Router>
            <Index path="/" />
            <Login path="login" />
            <Register path="register" />
            <Home path="home" />
            <Profile path="profile" />
            <EditProfile path="profile/edit" />
            <Admin path="admin" />
            <NotFound default />
          </Router>
        </LocalStorageProvider>
      </div>
    );
  }
}
