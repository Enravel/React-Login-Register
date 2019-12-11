import React, { Component } from 'react';

// ROUTER
import { Router } from '@reach/router';

// COMPONENT ROUTES
import Index from './Routes/Index';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import EditProfile from './Routes/EditProfile';
import EditProfilePassword from './Routes/EditProfilePassword';
import Admin from './Routes/Admin';
import NotFound from './Routes/NotFound';

// COMPONENTS
import Navbar from './Components/Navbar';

// CONTEXT
import { LocalStorageProvider } from './contexts/localStorage.context';

// SCSS
import './App.scss';
import './Styles/theme.scss';

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
            <EditProfilePassword path="profile/edit/password" />
            <Admin path="admin" />
            <NotFound default />
          </Router>
        </LocalStorageProvider>
      </div>
    );
  }
}
