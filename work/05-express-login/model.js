const users = {};

function getCurrentUser(username) {
  return users[username];
}

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

