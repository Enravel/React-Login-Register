import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../../contexts/localStorage.context';

// COMPONENTS
import Navbar from '../../Components/Navbar';

// SCSS
import './Admin.scss';

export default class Admin extends Component {
  static contextType = LocalStorageContext;
  // constructor() {
  //   super();
  //   this.removeUser = this.removeUser.bind(this);
  // }
  // removeUser treba samo Admin.js-u ali ovo ne radi zato sto ne menja originalni users state iz contexta nego kopiju izgleda, zato sto se ne rerenderuje kad obrises usera nego tek kad reloadujes, vido sam u contextu isto da se users state ne menja tako da on updajtuje tek kad reloaduje (kad izvlaci podatke iz localStorage)
  // removeUser(users, email) {
  //   let matchingIndex;
  //   Object.values(users).map(
  //     (user, index) =>
  //       user.email.toLowerCase() === email.toLowerCase() &&
  //       (matchingIndex = index)
  //   );
  //   const matchingID = Object.keys(users)[matchingIndex];
  //   console.log(users);
  //   delete users[matchingID];
  //   console.log(users);
  //   localStorage.setItem('users', JSON.stringify(users));
  // }

  render() {
    const { currentUser, users, removeUser } = this.context;
    return (
      <div className="Admin">
        <Navbar />
        {/* keys are generated using uuid, but in the admin case the key is 'admin' */}
        {currentUser && currentUser.admin ? (
          <>
            <h1>Admin</h1>
            {Object.keys(users).length > 0 ? (
              Object.values(users).map(user => (
                <>
                  <div>
                    <p>
                      Email: <b>{user.email}</b>
                      <span onClick={() => removeUser(user.email)}>
                        <b>X</b>
                      </span>
                    </p>
                  </div>
                </>
              ))
            ) : (
              <h3>There are no registered users!</h3>
            )}
          </>
        ) : (
          <h2>Only admin can see this page</h2>
        )}
      </div>
    );
  }
}
