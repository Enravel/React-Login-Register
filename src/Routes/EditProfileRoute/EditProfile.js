import React, { Component } from 'react';

// ROUTER
import { Link, Redirect } from '@reach/router';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// SCSS
import './EditProfile.scss';

export default class EditProfile extends Component {
  static contextType = LocalStorageContext;
  constructor() {
    super();
    this.state = {
      edit: false,

      currentPassword: '',
      newPassword: '',
      repeatPassword: ''
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitPasswordChange = this.submitPasswordChange.bind(this);
  }

  submitPasswordChange(event) {
    event.preventDefault();
    // dal je ovo greska, salje se ceo state sa sve editom pa se posle ekstraktuje sve osim edita ?
    this.context.submitPasswordChange(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { edit, currentPassword, newPassword, repeatPassword } = this.state;
    const { currentUser, shouldRedirect } = this.context;
    return (
      <div className="EditProfile">
        {currentUser && currentUser.admin ? (
          <h4>You cant change admin information!</h4>
        ) : currentUser ? (
          <>
            {edit ? (
              <>
                <button onClick={this.toggleEdit}>Change Password</button>
              </>
            ) : (
              <>
                <h3>Enter your password and new username!</h3>
                <form onSubmit={this.submitPasswordChange}>
                  <input
                    onChange={this.handleChange}
                    name="currentPassword"
                    type="password"
                    label="Current Password"
                    placeholder="Current Password"
                    value={currentPassword}
                  />
                  <br />
                  <input
                    onChange={this.handleChange}
                    name="newPassword"
                    type="password"
                    label="New Password"
                    placeholder="New Password"
                    value={newPassword}
                  />
                  <br />
                  <input
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                  />
                  <br />
                  <button>Submit</button>
                </form>
                <br />
                <br />
                <button onClick={this.toggleEdit}>Go Back</button>
              </>
            )}
          </>
        ) : (
          <>
            <p>You have to be logged in to visit this page</p>
            <br />
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/register">Register</Link>
          </>
        )}
        {shouldRedirect && <Redirect noThrow to="/profile" />}
      </div>
    );
  }
}
