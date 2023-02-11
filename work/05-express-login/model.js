const users = {};

function getCurrentUser(username) {
  return users[username];
}

/* Stored word for each user defaults to the empty string. */
function createWord( username ) {
  users[username] = { word : "" };
}

function updateWord({ username, word }) {
  users[username] = { word };
}

module.exports = {
  getCurrentUser,
  createWord,
  updateWord
};

