import React, { Component } from 'react';

// ROUTER
import { Route, Switch } from 'react-router-dom';

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

// SCSS
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Index />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/register">
            <Navbar />
            <Register />
          </Route>
          <Route exact path="/home">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/profile">
            <Navbar />
            <Profile />
          </Route>
          <Route exact path="/profile/edit">
            <Navbar />
            <EditProfile />
          </Route>
          <Route path="/admin">
            <Navbar />
            <Admin />
          </Route>
          <Route path="*">
            <Navbar />
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}
