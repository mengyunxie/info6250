const users = {};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function getUserData(username) {
  return users[username];
}

function getUsers() {
  return users;
}

function createUserData(username) {
  users[username] = {
    isLoggedIn: true
  };
}

function updateUserData({username, isLoggedIn}) {
  users[username] = {
    isLoggedIn: isLoggedIn
  };
}

module.exports = {
  isValid,
  getUserData,
  createUserData,
  updateUserData,
  getUsers
};
