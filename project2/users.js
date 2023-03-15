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

function getLoggedInUsers() {
  return Object.values(users).filter((value) => value?.isLoggedIn);
}

function createUserData(username) {
  users[username] = {
    username,
    isLoggedIn: true
  };
}

function updateUserData({username, isLoggedIn}) {
  users[username] = {
    username,
    isLoggedIn: isLoggedIn
  };
}

module.exports = {
  isValid,
  getUserData,
  createUserData,
  updateUserData,
  getLoggedInUsers
};
