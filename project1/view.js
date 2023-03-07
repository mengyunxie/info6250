"use strict";
const view = {
    homePage: function({username, user}) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Guess Word</title>
            <link rel="stylesheet" href="home.css">
          </head>
          <body>
            <div class="user">
              <p class="user-greeting">Hello <span class="user-title">${username}</span></p>
              <form action="/logout" method="POST" class="logout-form">
                <button type="submit" class="logout-to-submit">Logout</button>
              </form>
              <div class="guess-records">
                <div class="recent-record">
                  <p class="panel-title">Recent Guess</p>
                  ${view.getRecentGuess(user)}
                </div>
                <div class="previous-guesses">
                  <p class="panel-title">Previous Guesses</p>
                  ${view.getPreviousGuesses(user)}
                </div>
              </div>
              <div class="score-records">
                ${view.getScore(user)}
                ${view.getStatistics(user)}
              </div>
              <main class="game">
                ${view.getPossibleWords(user)}
                ${user.win ? view.getWin(user) : view.getGuessForm(user)}
                ${view.getNewGame()}
              </main>
            </div>
          </body>
        </html>
      `;
    },
    getWin: function(user) {
      return `<div class="game-win">
        <span class="game-win-message">Congratulation! You won in ${user.turns} turns!</span>
      </div>`;
    },
    getGuessForm: function(user) {
      return `<form action="/guess" method="POST" class="guess-form">
        <label class="guess-label">
          <span>Your Guess Word:</span>
          <input type="text" name="word" class="guess-to-send" value="${user.guessWord}" placeholder="Enter your guess word" />
        </label>
        <button type="submit" class="guess-to-submit">Guess</button>
      </form>`;
    },
    getNewGame: function() {
      return `<form action="/new-game" method="POST" class="new-game-form">
        <button type="submit" class="new-game-submit">Start a New Game</button>
      </form>`;
    },
    getPossibleWords: function(user) {
      return `<div class="possible-words">
        <p class="panel-title">Possible Words</p>
        <div class="words">` +
        Object.values(user.wordList).map( (word) => `
          <span>
          ${word}
          </span>
        `).join('') +
        `</div>
      </div>`;
    },
    getRecentGuess: function(user) {
      if(Object.keys(user.recentGuess).length == 0) {
        return `<p class="no-data">No Recent Guess</p>`;
      }
      if(!user.recentGuess.isValid) {
        return `<p class="invalid-guess"><span class="word-highlight">${user.recentGuess.guess}</span> is invalid guess. Only letters are allowed! Please enter a word from the list of possible words.</p>`;
      }
      return `<p class="recent-guess"><span class="word-highlight">${user.recentGuess.guess}</span>, match: <span class="word-highlight">${user.recentGuess.match}</span> letters</p>`;
    },
    getPreviousGuesses: function(user) {
      if(Object.keys(user.previousGuesses).length == 0) {
        return `<p class="no-data">No Previous Valid Guess</p>`;
      }
      return `<ul class="previous-guess">` +
        Object.entries(user.previousGuesses).map( ([guess, match]) => `
          <li><span class="word-highlight">${guess}</span>, match: <span class="word-highlight">${match}</span> letters</li>
        `).join('') +
      `</ul>`;
    },
    getScore: function(user) {
      return `<div class="current-score">
        <p class="panel-title">Current Game's Score</p>
        <p>Your Score: <span class="word-highlight">${user.turns}</span></p>
        <p class="score-info">(The score is the number of valid guesses)</p>
      </div>`;
    },
    getStatistics: function(user) {
      return `<div class="statistics-records">
        <p class="panel-title">Statistics</p>
        <p class="statistics-record">Number of games: <span class="word-highlight">${user.numberOfGames}</span></p>
        <p class="statistics-record">Number of win games: <span class="word-highlight">${user.numberOfWinGames}</span></p>
        <p class="statistics-record">Best score of win games: ${user.bestScoreOfWinGames == 0 ? `<span class="no-data">You haven't won a game.</span>` : `<span class="word-highlight">${user.bestScoreOfWinGames}</span>`}</p>
      </div>`;
    },
    loginPage: function(message) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Guess Word</title>
            <link rel="stylesheet" href="login.css">
          </head>
          <body>
            <main class="login">
              <p class="login-greeting">Welcome to Guess Word!</p>
              <div class="login-main">
                <p class="login-message">${message ? `${message}` : ""}</p>
                <form action="/login" method="POST" class="login-form">
                  <label class="login-label">
                    <span>Username:</span>
                    <input type="text" name="username" class="login-to-send" value="" placeholder="Enter your username"/>
                  </label>
                  <button type="submit" class="login-to-submit">Login</button>
                </form>
              </div>
            </main>
          </body>
        </html>
      `;
    }
  };
  
  module.exports = view;