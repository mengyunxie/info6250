const words = {};

function createWord( username ) {
  words[username] = { word : "" };
}

function updateWord({ username, word }) {
    words[username] = { word };
}

function getWord(username) {
  return words[username];
}

module.exports = {
  words,
  createWord,
  updateWord,
  getWord
};

