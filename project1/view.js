"use strict";
const view = {
    homePage: function({username, game}) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Express Login</title>
            <link rel="stylesheet" href="home.css">
          </head>
          <body>
            <div class="user">
              <p class="user-greeting">Hello <span class="user-title">${username}</span></p>
              <form action="/logout" method="POST" class="logout-form">
                <button type="submit" class="logout-to-submit">Logout</button>
              </form>
              <div class="guess-records">
                <div class="recent-guess">
                  <p class="panel-title">Recent Guess</p>
                  ${view.getRecentGuess(game)}
                </div>
                <div class="previous-guesses">
                  <p class="panel-title">Previous Guesses</p>
                  ${view.getPreviousGuesses(game)}
                </div>
              </div>
              <div class="score-records">
                ${view.getScore(game)}
                ${view.getStatistics(game)}
              </div>
              <main class="game">
                ${view.getPossibleWords(game)}
                ${game.win ? view.getWin() : view.getGuessForm(game)}
                ${view.getNewGame()}
              </main>
            </div>
          </body>
        </html>
      `;
    },
    getWin: function() {
      return `<div class="game-win">
        <span class="game-win-message"> Win! Congratulation!</span>
      </div>`;
    },
    getGuessForm: function(game) {
      return `<form action="/guess" method="POST" class="guess-form">
        <label class="guess-label">
          <span>Your Guess Word:</span>
          <input type="text" name="word" class="guess-to-send" value="${game.guessWord}" placeholder="Enter your guess word" />
        </label>
        <button type="submit" class="guess-to-submit">Guess</button>
      </form>`;
    },
    getNewGame: function() {
      return `<form action="/new-game" method="POST" class="new-game-form">
        <button type="submit" class="new-game-submit">Start a New Game</button>
      </form>`;
    },
    getPossibleWords: function(game) {
      return `<div class="possible-words">
        <p class="panel-title">Possible Words</p>
        <div class="words">` +
        Object.values(game.wordList).map( (word) => `
          <span>
          ${word}
          </span>
        `).join('') +
        `</div>
      </div>`;
    },
    getRecentGuess: function(game) {
      if(Object.keys(game.recentGuess).length == 0) {
        return `<p class="no-data">No Recent Guess</p>`;
      }
      if(!game.recentGuess.isValid) {
        return `<p class="invalid-guess"><span class="word-highlight">${game.recentGuess.guess}</span> is invalid guess. Please enter a word from the list of possible word.</p>`;
      }
      return `<p><span class="word-highlight">${game.recentGuess.guess}</span>, match: <span class="word-highlight">${game.recentGuess.match}</span> letters</p>`;
    },
    getPreviousGuesses: function(game) {
      if(Object.keys(game.previousGuesses).length == 0) {
        return `<p class="no-data">No Previous Valid Guess</p>`;
      }
      return `<ul class="previous-guess">` +
        Object.entries(game.previousGuesses).map( ([guess, match]) => `
          <li><span class="word-highlight">${guess}</span>, match: <span class="word-highlight">${match}</span> letters</li>
        `).join('') +
      `</ul>`;
    },
    getScore: function(game) {
      return `<div class="current-score">
        <p class="panel-title">Current Game's Score</p>
        <p>Your Score: <span class="word-highlight">${game.turns}</span></p>
        <p class="score-info">(It is the number of valid guesses.)</p>
      </div>`;
    },
    getStatistics: function(game) {
      return `<div class="statistics">
        <p class="panel-title">Statistics</p>
        <p>The number of games: <span class="word-highlight">${game.numberOfGames}</span></p>
        <p>The number of win games: <span class="word-highlight">${game.numberOfWinGames}</span></p>
        <p>The best score of win games: ${game.bestScoreOfWinGames == 0 ? `<span class="no-data">You haven't won a game.</span>` : `<span class="word-highlight">${game.bestScoreOfWinGames}</span>`}</p>
      </div>`;
    },
    loginPage: function(message) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Express Login</title>
            <link rel="stylesheet" href="login.css">
          </head>
          <body>
            <main class="login">
              <p class="login-greeting">Welcome to Express Login!</p>
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