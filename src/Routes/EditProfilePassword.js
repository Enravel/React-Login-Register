import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

// SCSS
import '../Styles/EditProfilePassword.scss';

export default class EditProfilePassword extends Component {
  static contextType = LocalStorageContext;
  constructor() {
    super();
    this.state = {
      currentPassword: '',
      newPassword: '',
      repeatPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitPasswordChange = this.submitPasswordChange.bind(this);
  }

  submitPasswordChange(event) {
    event.preventDefault();
    this.context.submitPasswordChange(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { currentUser } = this.context;
    const { currentPassword, newPassword, repeatPassword } = this.state;
    return (
      <div className="EditProfilePassword">
        {!currentUser.admin ? (
          <>
            <h3>Edit your password!</h3>
            <form onSubmit={this.submitPasswordChange}>
              <div className="flex-column group">
                <input
                  onChange={this.handleChange}
                  name="currentPassword"
                  type="password"
                  label="Current Password"
                  placeholder="Current Password"
                  value={currentPassword}
                />
                <input
                  onChange={this.handleChange}
                  name="newPassword"
                  type="password"
                  label="New Password"
                  placeholder="New Password"
                  value={newPassword}
                />
                <input
                  onChange={this.handleChange}
                  name="repeatPassword"
                  type="password"
                  label="Repeat Password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                />
                <button className="button-main">Submit</button>
              </div>
            </form>
          </>
        ) : (
          <h3>Admin info can't be changed</h3>
        )}
      </div>
    );
  }
}
