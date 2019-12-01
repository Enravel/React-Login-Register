// FOR validateRegister (helper for helpers XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD)
function alreadyExists(value, item, users) {
  // arguments > value = what to compare, item = where to search, users = localStorage data
  let isTaken = false;
  // looks inside of localStorage and sets isTaken to true if the item value of a given item alreadyExists
  Object.values(users).map(
    user => !isTaken && (isTaken = user[item] === value)
  );
  return isTaken;
}

export function validateRegister(state, users) {
  const { username, email, password, repeatPassword } = state;
  // validating username
  if (username === '') return 'Username is required!';
  else if (username.length > 8)
    return 'Username has to have less than 8 characters!';
  else if (username !== username.toLowerCase())
    return 'Username has to be lower cased!';
  else if (alreadyExists(username, 'username', users)) return 'Username taken!';
  // validating email
  else if (email === '') return 'Email is required!';
  else if (alreadyExists(email, 'email', users)) return 'Email already exists!';
  // validating password
  else if (password === '') return 'Password is required!';
  else if (password.length < 5)
    return 'Password needs to have more than 5 characters!';
  // validating repeatPassword
  else if (repeatPassword === '') return 'Repeat your password!';
  else if (repeatPassword !== password) return 'Passwords are not the same!';
  return true;

  // returns string errors that are used to alert the error in contexts/localStorage.context.js > registrationFailure() (for now)
}

export function validateLogin(state) {}
