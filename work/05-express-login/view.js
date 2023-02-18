const view = {
  dataPage: function({username, word}) {
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
            <main class="word">
              <p class="current-word">
                ${word ? `<span>Stored word:</span><span class="current-word-content">${word}</span>` : `<span>You don't have a stored word, please update your word.</span>`}
              </p>
              <form action="/updateword" method="POST" class="word-form">
                <label class="word-label">
                  <span>Update Your Word:</span>
                  <input type="text" name="word" class="word-to-send" value="${word}" placeholder="Enter your word" />
                </label>
                <button type="submit" class="word-to-submit">Save</button>
              </form>
            </main>
          </div>
        </body>
      </html>
    `;
  },
  loginPage: function() {
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
            <form action="/login" method="POST" class="login-form">
              <label class="login-label">
                <span>Username:</span>
                <input type="text" name="username" class="login-to-send" value="" placeholder="Enter your username"/>
              </label>
              <button type="submit" class="login-to-submit">Login</button>
            </form>
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
