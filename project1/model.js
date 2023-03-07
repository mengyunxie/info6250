"use strict";
const users = {};

/*  Create a default user data for new users. numberOfGames, numberOfWinGames, bestScoreOfWinGames these are statistics */
function createUserData( {username, secretWord, wordList} ) {
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

function getCurrentUserData(username) {
  return users[username];
}

function getwordList(username) {
  return users[username].wordList;
}

function getSecretWord(username) {
  return users[username].secretWord;
}

/*  Set user data for a new game, reset all data except Statistics */
function setUserDataForNewGame({username, secretWord, wordList}) {

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

function setRecentGuess({username, isValid, guess, match}) {
  users[username].recentGuess = {
    isValid,
    guess,
    match
  }
}

function setGuessWord({username, guess}) {
  users[username].guessWord = guess;
}

function setWin({username, win}) {
  users[username].win = win;
}

/* After win, update the Statistics */
function setStatisticsForWin(username) {
  const { turns, numberOfGames, numberOfWinGames, bestScoreOfWinGames} = users[username];
  users[username].numberOfGames = numberOfGames + 1;
  users[username].numberOfWinGames =  numberOfWinGames + 1;

  // If it's the first time, the best score is the current turns
  users[username].bestScoreOfWinGames = bestScoreOfWinGames == 0 ? turns : Math.min(turns, bestScoreOfWinGames);
}

function setPreviousGuesses({username, guess, match}) {
  users[username].previousGuesses[guess] = match;
}

/* Increase turns by one */
function addTurnsByone(username) {
  users[username].turns++;
}

/* Remove the current guess from the list of possible words */
function removeGuess({username, guess}) {
  users[username].wordList = users[username].wordList.filter(function(value){ 
    return value.toLowerCase() != guess.toLowerCase();
  });
}

module.exports = {
  createUserData,
  getCurrentUserData,
  getwordList,
  getSecretWord,
  setUserDataForNewGame,
  setRecentGuess,
  setGuessWord,
  setWin,
  setStatisticsForWin,
  setPreviousGuesses,
  addTurnsByone,
  removeGuess
};
