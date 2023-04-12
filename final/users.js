const users = {
  'aa': {
    username: 'aa',
    avatar: {
      key: 'Girl',
      url: 'avatar-girl.png'
    }
  }
};

/*  Create a default user data for new users */
function createUser( {username, defaultAvatar} ) {
  users[username] = {
    username,
    avatar: defaultAvatar
  };
  return users[username];
}

function getUsers() {
  return users;
}

function getUser({username}) {
  return users[username];
}

function isValidUsername(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9]{1,20}$/);
  return isValid;
}

function isValidWord(word) {
  let isValid = true;
  isValid = isValid && word.match(/^[A-Za-z]*$/);
  return isValid;
}

module.exports = {
  isValidUsername,
  isValidWord,
  getUsers,
  createUser,
  getUser,
};
