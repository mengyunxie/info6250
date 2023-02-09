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
          <header class="user">
            <div class="greeting">Hello ${username}</div>
            <div class="logout">
              <form action="/logout" method="POST" class="logout-form">
                <button type="submit" class="to-submit">Logout</button>
              </form>
            </div>
          </header>
          <main class="word">
            <form action="/update" method="POST" class="word-form">
              <input type="text" name="word" class="to-send" value="${word}" placeholder="Enter your word" />
              <button type="submit" class="to-submit">Submit</button>
            </form>
          </main>
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
            <div class="login-greeting">Welcome! Please log in first!</div>
            <form action="/login" method="POST" class="login-form">
              <input type="text" name="username" class="to-send" value="" placeholder="Enter your username"/>
              <button type="submit" class="to-submit">Login</button>
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
            <p class="error-action">Please jump to the <a href="/">login</a> page.</p>
          </main>
        </body>
      </html>
    `;
  }
};
module.exports = view;
