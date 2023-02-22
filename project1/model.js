"use strict";
const users = {};

function getCurrentUser(username) {
  return users[username];
}

/*  Create a default user data for new users */
function createUser( {username, secretWord, wordList} ) {
  users[username] = {
    wordList,
    secretWord,
    guessWord: "",
    win: false,
    turns: 0,
    previousGuesses: {},
    recentGuess: {},
    numberOfGames: 0,
    numberOfWinGames: 0,
    bestScoreOfWinGames: 0
  };
}

/*  Update user data for existing users */
function updateUser({username, secretWord, wordList}) {

  const { win, numberOfGames, numberOfWinGames, bestScoreOfWinGames} = users[username];

  users[username] = {
    wordList,
    secretWord,
    guessWord: "",
    win: false,
    turns: 0,
    previousGuesses: {},
    recentGuess: {},
    numberOfGames: win ? numberOfGames : numberOfGames + 1,
    numberOfWinGames: numberOfWinGames,
    bestScoreOfWinGames: bestScoreOfWinGames
  };

}

module.exports = {
  getCurrentUser,
  createUser,
  updateUser
};
