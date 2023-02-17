const users = {};

function getCurrentUser(username) {
  return users[username];
}



/* Stored word for each user defaults to the empty string. */
function createGameData( {username, secretWord, wordList} ) {
  users[username] = {
    wordList: wordList.map((x) => x.toLowerCase()),
    currentGame: {
      secretWord,
      guessWord: "",
      win: false,
      turns: 0,
      previousGuesses: {},
      recentGuess: {}
    },
    previousGames: {}
  };
}

function updateGameData({username, secretWord, wordList, previousGame}) {
 
  users[username].wordList = wordList.map((x) => x.toLowerCase());
  users[username].currentGame = {
      secretWord,
      guessWord: "",
      win: false,
      turns: 0,
      previousGuesses: {},
      recentGuess: {}
  };

  if(previousGame) {
    users[username].previousGames[Date.now()] = previousGame;
  }

}

module.exports = {
  getCurrentUser,
  createGameData,
  updateGameData
};
