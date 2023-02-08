const view = {
  dataPage: function({username, word}) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <header>
              <p>Hello ${username}</p>
              <form action="/logout" method="POST" class="logout-form">
                <button type="submit" class="to-submit">Logout</button>
              </form>
            </header>
            <main>
              <form action="/update" method="POST" class="word-form">
                <input type="text" name="word" class="to-send" value="${word}" placeholder="Enter your word" />
                <button type="submit" class="to-submit">Submit</button>
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
          <title>Chat</title>
        </head>
        <body>
          <div class="login">
            <form action="/login" method="POST" class="login-form">
              <input type="text" name="username" class="to-send" value="" placeholder="Enter your username"/>
              <button type="submit" class="to-submit">Login</button>
            </form>
          </div>
        </body>
      </html>
    `;
  },
  errorPage: function(messages) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
        </head>
        <body>
          <div>
          <p>${messages}</p>
          <p>Please click <a href="/">here</a> go to login page.</p>
          </div>
        </body>
      </html>
    `;
  }
};
module.exports = view;
