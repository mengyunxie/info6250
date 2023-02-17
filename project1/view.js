const view = {
    dataPage: function({username, game}) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Express Login</title>
            <link rel="stylesheet" href="style.css">
          </head>
          <body>
            <div class="user">
              <p class="user-greeting">Hello <span class="user-title">${username}</span></p>
              <form action="/logout" method="POST" class="logout-form">
                <button type="submit" class="logout-to-submit">Logout</button>
              </form>
              <main class="game">
                ${view.getPossibleWords(game)}
                ${view.getRecentGuess(game)}
                ${view.getPreviousGuesses(game)}
                ${view.getPreviousGames(game)}
                ${game.currentGame.win ? view.getWin() : view.getGuessForm(game)}
                ${view.getScore(game)}
                ${view.getNewGame()}
              </main>
            </div>
          </body>
        </html>
      `;
    },
    getWin: function() {
      return `<div class="game-win">
        <span class="game-win-message"> Win! congratulation!</span>
      </div>`;
    },
    getScore: function(game) {
      return `<div class="game-score">
        <p>Total Guess Number: ${game.currentGame.turns}</p>
        <p>Valid Guess Number: ${Object.keys(game.currentGame.previousGuesses).length}</p>
      </div>`;
    },
    getNewGame: function() {
      return `<form action="/new-game" method="POST" class="new-game-form">
        <button type="submit" class="new-game-submit">Start a New Game</button>
      </form>`;
    },
    getGuessForm: function(game) {
      return `<form action="/guess" method="POST" class="guess-form">
        <label class="guess-label">
          <span>Your Guess Word:</span>
          <input type="text" name="word" class="guess-to-send" value="${game.currentGame.guessWord}" placeholder="Enter your guess word" />
        </label>
        <button type="submit" class="guess-to-submit">Guess</button>
      </form>`;
    },
    getPossibleWords: function(game) {
      return `<div class="possible-words">
      <p>Here is the possible words: </p>` +
      Object.values(game.wordList).map( (word) => `
        <span>
        ${word}
        </span>
      `).join('') +
      `</div>`;
    },
    getRecentGuess: function(game) {
      if(Object.keys(game.currentGame.recentGuess).length == 0) {
        return `<span>No recent guess</span>`;
      }
      if(!game.currentGame.recentGuess.isValid) {
        return `<div> Recent Guess :${game.currentGame.recentGuess.guess}, is not valid guess. Please select a word from the list of possible word.</div>`;
      }
      return `<div> Recent Guess :${game.currentGame.recentGuess.guess}, match : ${game.currentGame.recentGuess.match}</div>`;
    },
    getPreviousGuesses: function(game) {
      if(Object.keys(game.currentGame.previousGuesses).length == 0) {
        return `<p>No Previous Valid Guess</p>`;
      }
      return `<ol>` +
      Object.entries(game.currentGame.previousGuesses).map( ([guess, match]) => `
        <li>
        guess word: ${guess}, match: ${match}
        </li>
      `).join('') +
      `</ol>`;
    },
    getPreviousGames: function(game) {
      if(Object.keys(game.previousGames).length == 0) {
        return `<p>No Previous Game.</p>`;
      }
      return `<ol>` +
      Object.values(game.previousGames).map( (record) => `
        <li>
        secretWord: ${record.secretWord}, turns: ${record.turns}, ${record.win ? "Win!" : "Fail!"}
        </li>
      `).join('') +
      `</ol>`;
    },
    loginPage: function(message) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Express Login</title>
            <link rel="stylesheet" href="style.css">
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
    },
    errorPage: function({statusCode, message}) {
      return `
        <!doctype html>
        <html>
          <head>
            <title>Express Login</title>
            <link rel="stylesheet" href="style.css">
          </head>
          <body>
            <main class="error">
              <p class="error-code">${statusCode}</p>
              <p class="error-message">${message}</p>
              <p class="error-link">Please jump to the <a href="/">login</a> page.</p>
            </main>
          </body>
        </html>
      `;
    }
  };
  
  module.exports = view;