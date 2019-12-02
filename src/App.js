import React, { Component } from 'react';

// ROUTER
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Index from './Routes/IndexRoute/Index';
import Login from './Routes/LoginRoute/Login';
import Register from './Routes/RegisterRoute/Register';
import Home from './Routes/HomeRoute/Home';
import User from './Routes/UserRoute/User';
import Admin from './Routes/AdminRoute/Admin';
import NotFound from './Routes/NotFoundRoute/NotFound';

// SCSS
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}
