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
      edit: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { edit } = this.state;
    const {
      currentUser,
      handlePasswordChange,
      changePassword,
      submitPasswordChange,
      shouldRedirect
    } = this.context;
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
                <form onSubmit={submitPasswordChange}>
                  <input
                    onChange={handlePasswordChange}
                    name="currentPassword"
                    type="password"
                    label="Current Password"
                    placeholder="Current Password"
                    value={changePassword.currentPassword}
                  />
                  <br />
                  <input
                    onChange={handlePasswordChange}
                    name="newPassword"
                    type="password"
                    label="New Password"
                    placeholder="New Password"
                    value={changePassword.newPassword}
                  />
                  <br />
                  <input
                    onChange={handlePasswordChange}
                    name="repeatPassword"
                    type="password"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    value={changePassword.repeatPassword}
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
