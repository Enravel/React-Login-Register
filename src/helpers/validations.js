function alreadyExists(value, item, users) {
  let isTaken = false;
  Object.values(users).map(
    user => !isTaken && (isTaken = user[item] === value)
  );
  return isTaken;
}

export function validateRegister(state, users) {
  const { username, email, password, repeatPassword } = state;
  if (username.toLowerCase() === 'admin')
    return 'Username reserved, choose another one!';
  else if (email === 'admin@admin.com')
    return 'Email reserved, choose another one!';
  else if (username === '') return 'Username is required!';
  else if (username.length > 8)
    return 'Username has to have less than 8 characters!';
  else if (username !== username.toLowerCase())
    return 'Username has to be lower cased!';
  else if (alreadyExists(username, 'username', users)) return 'Username taken!';
  else if (email === '') return 'Email is required!';
  else if (alreadyExists(email, 'email', users)) return 'Email already exists!';
  else if (password === '') return 'Password is required!';
  else if (password.length < 5)
    return 'Password needs to have more than 5 characters!';
  else if (repeatPassword === '') return 'Repeat your password!';
  else if (repeatPassword !== password) return 'Passwords are not the same!';
  return true;
}

export function validateLogin(state, users) {
  const { email, password } = state;
  const admin = JSON.parse(localStorage.getItem('admin'));
  admin.username = 'ADMIN';
  let matchingIndex;
  Object.values(users).map(
    (user, index) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      (matchingIndex = index)
  );
  const matchingID = Object.keys(users)[matchingIndex];
  if (email === admin.email && password === admin.password)
    return { user: admin, success: true, id: 'admin' };
  else if (matchingIndex === undefined)
    return "Can't find that email in localStorage";
  else if (users[matchingID].password !== password)
    return 'Password is not matching with your email';
  return { user: users[matchingID], success: true, id: matchingID };
}

export function validateChangePassword(state) {
  const { changePassword, currentUser } = state;
  if (
    changePassword.currentPassword !==
    currentUser[Object.keys(state.currentUser)[0]].password
  )
    return 'Wrong password';
  else if (changePassword.newPassword === '') return 'Password is required!';
  else if (changePassword.newPassword.length < 5)
    return 'Password needs to have more than 5 characters!';
  else if (changePassword.newPassword !== changePassword.repeatPassword)
    return "Password don't match";
  return true;
}
