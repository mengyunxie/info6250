"use strict";
const users = {};

function getCurrentUser(username) {
  return users[username];
}

/*  Create a default user data for new users */
function createGameData( {username, secretWord, wordList} ) {
  users[username] = {
    wordList: wordList.map((x) => x.toLowerCase()),
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

/*  Create and update user data for existing users */
function updateGameData({username, secretWord, wordList}) {

  const { win, numberOfGames, numberOfWinGames, bestScoreOfWinGames} = users[username];

  users[username] = {
    wordList: wordList.map((x) => x.toLowerCase()),
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
  createGameData,
  updateGameData
};
