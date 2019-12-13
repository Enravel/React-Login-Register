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

import IsAuth from './helpers/IsAuth';

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
            <IsAuth path="/" message="You have to log in to see this page!">
              <Index path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth
              path="/login"
              reverseRender={true}
              redirectTo="home"
              message="You are logged in!"
            >
              <Login path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth
              path="/register"
              reverseRender={true}
              redirectTo="login"
              message="You already have an account!"
            >
              <Register path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth path="/home" message="You have to log in to see this page!">
              <Home path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth
              path="/profile"
              redirectTo="/login"
              message="You have to log in to see you profile!"
            >
              <Profile path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth
              path="/profile/edit"
              message="You have to log in to edit your profile!"
            >
              <EditProfile path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth
              path="/profile/edit/password"
              message="You have to log in to edit your password!"
              redirectTo="profile"
            >
              <EditProfilePassword path="/" />
              <NotFound default />
            </IsAuth>
            <IsAuth path="/admin" message="Only admin can access this page!">
              <Admin path="/" />
              <NotFound default />
            </IsAuth>
          </Router>
        </LocalStorageProvider>
      </div>
    );
  }
}
