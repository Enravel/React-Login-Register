import React, { createContext, Component } from 'react';

import uuid from 'uuid/v4';

// HELPERS
import { validateRegister } from '../helpers/validations';

export const LocalStorageContext = createContext();

export class LocalStorageProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || {}, // used to update localStorage
      shouldRedirect: false, // used to give components info about redirecting
      register: {
        // onChange register inputs
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    };

    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  handleRegisterChange(event) {
    const currentState = this.state.register;
    currentState[event.target.name] = event.target.value;
    this.setState({ register: currentState });
  }

  registrationSuccess(previousState) {
    // pokusavao sam na bolji nacin sa prevState ali nije radilo kako treba
    const currentState = this.state.users;
    const newState = {
      username: previousState.username,
      email: previousState.email,
      password: previousState.password
    };
    // stvarno ne znam kako drugacije da resetujem ceo state objekat a da ima key-eve kao pre
    const clearRegister = {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
    currentState[uuid()] = newState;
    // updates state.users => updates localStorage | cleans inputs and sets shouldRedirect to true so Register component knows if it should redirect
    this.setState(
      { users: currentState, register: clearRegister, shouldRedirect: true },
      () => localStorage.setItem('users', JSON.stringify(this.state.users))
    );
  }

  registrationFailure() {
    alert(validateRegister(this.state.register, this.state.users)); // alers returned strings from helpers/validation.js > validateRegister
  }

  submitRegister(event) {
    event.preventDefault();
    validateRegister(this.state.register, this.state.users) === true
      ? this.registrationSuccess(this.state.register)
      : this.registrationFailure();
  }

  render() {
    const { handleRegisterChange, submitRegister } = this;
    const { register, shouldRedirect } = this.state;
    return (
      <LocalStorageContext.Provider
        value={{
          handleRegisterChange,
          submitRegister,
          ...register,
          shouldRedirect
        }}
      >
        {this.props.children}
      </LocalStorageContext.Provider>
    );
  }
}
