import React, { createContext, Component } from 'react';

// UUID
import uuid from 'uuid/v4';

// HELPERS
import {
  validateRegister,
  validateLogin,
  validateChangePassword
} from '../helpers/validations';

export const LocalStorageContext = createContext();

export class LocalStorageProvider extends Component {
  static defaultProps = {
    admin: {
      email: 'admin@admin.com',
      password: 'admin'
    }
  };
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || {},
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
      shouldRedirect: false
    };

    this.submitRegister = this.submitRegister.bind(this);
    this.submitLogin = this.submitLogin.bind(this);

    this.logout = this.logout.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.submitPasswordChange = this.submitPasswordChange.bind(this);
  }
  componentDidMount() {
    localStorage.setItem('admin', JSON.stringify(this.props.admin));
  }

  registrationSuccess(previousState) {
    const currentState = this.state.users;
    const newState = {
      username: previousState.username,
      email: previousState.email,
      password: previousState.password
    };
    currentState[uuid()] = newState;
    this.setState({ users: currentState, shouldRedirect: true }, () => {
      localStorage.setItem('users', JSON.stringify(this.state.users));
      setTimeout(() => {
        this.setState({ shouldRedirect: false });
      }, 100);
    });
  }

  registrationFailure(state) {
    alert(validateRegister(state, this.state.users));
  }

  submitRegister(state) {
    validateRegister(state, this.state.users) === true
      ? this.registrationSuccess(state)
      : this.registrationFailure(state);
  }

  loginSuccess(state) {
    const { user, id } = validateLogin(state, this.state.users);
    this.setState({ currentUser: { [id]: user }, shouldRedirect: true }, () => {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(this.state.currentUser)
      );
      setTimeout(() => {
        this.setState({ shouldRedirect: false });
      }, 100);
    });
  }

  loginFailure(state) {
    alert(validateLogin(state, this.state.users));
  }

  submitLogin(state) {
    const { success } = validateLogin(state, this.state.users);
    success === true ? this.loginSuccess(state) : this.loginFailure(state);
  }

  logout() {
    this.setState({ currentUser: null, shouldRedirect: true }, () => {
      localStorage.removeItem('currentUser');
      setTimeout(() => {
        this.setState({ shouldRedirect: false });
      }, 100);
    });
  }

  removeUser(email) {
    const currentState = this.state.users;
    let matchingIndex;
    Object.values(currentState).map(
      (user, index) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        (matchingIndex = index)
    );
    const matchingID = Object.keys(currentState)[matchingIndex];
    delete currentState[matchingID];

    this.setState({ users: currentState });
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  submitPasswordFailure(state) {
    alert(validateChangePassword(state));
  }

  submitPasswordSuccess(state) {
    const currentState = this.state.users;
    currentState[Object.keys(currentState)[0]].password = state.newPassword;

    const clearChangePasswordState = {
      currentPassword: '',
      newPassword: '',
      repeatPassword: ''
    };
    const currentUser = this.state.currentUser;
    currentUser[Object.keys(currentUser)[0]].password = state.newPassword;
    this.setState(
      {
        users: currentState,
        currentUser: currentUser,
        changePassword: clearChangePasswordState,
        shouldRedirect: true
      },
      () => {
        alert('Password Changed!');
        localStorage.setItem('users', JSON.stringify(this.state.users));
        localStorage.setItem(
          'currentUser',
          JSON.stringify(this.state.currentUser)
        );
        setTimeout(() => {
          this.setState({ shouldRedirect: false });
        }, 100);
      }
    );
  }

  submitPasswordChange(state) {
    validateChangePassword(this.state, state) === true
      ? this.submitPasswordSuccess(state)
      : this.submitPasswordFailure(state);
  }

  render() {
    const {
      submitRegister,
      submitLogin,
      logout,
      removeUser,
      submitPasswordChange
    } = this;
    const { shouldRedirect, currentUser, users } = this.state;
    return (
      <LocalStorageContext.Provider
        value={{
          submitRegister,
          shouldRedirect,
          submitLogin,
          currentUser,
          logout,
          removeUser,
          users,
          submitPasswordChange
        }}
      >
        {this.props.children}
      </LocalStorageContext.Provider>
    );
  }
}
