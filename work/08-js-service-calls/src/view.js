function generateHomePageHtml({username, storedWord}) {
  return `
    <div class="user">
      <p class="user-greeting">Hello <span class="user-title">${username}</span></p>
      <div class="logout-form">
        <button type="submit" class="logout-to-submit">Logout</button>
      </div>
      <div class="word">
        <p class="current-word">
          ${storedWord ? `<span>Stored word:</span><span class="current-word-content">${storedWord}</span>` : `<span>You don't have a stored word, please update your word.</span>`}
        </p>
        <div class="word-form">
          <label class="word-label">
            <span>Update Your Word:</span>
            <input type="text" name="word" class="word-to-send" value="${storedWord}" placeholder="Enter your word" />
          </label>
          <button type="submit" class="word-to-submit">Save</button>
        </div>
      </div>
    </div>
  `;
}

function generateLoginPageHtml(message) {
  return `
    <div class="login">
      <p class="login-greeting">Welcome to Service Calls!</p>
      <div class="login-main">
        <p class="login-message">${message ? `${message}` : ""}</p>
        <div class="login-form">
          <label class="login-label">
            <span>Username:</span>
            <input type="text" name="username" class="login-to-send" value="" placeholder="Enter your username"/>
          </label>
          <button type="submit" class="login-to-submit">Login</button>
        </div>
      </div>
    </div>
  `;
}

export function renderHomePage({username, storedWord, rootEl}) {
  const homePageHtml = generateHomePageHtml({username, storedWord});
  rootEl.innerHTML = `${homePageHtml}`;
}

export function renderLoginPage({message, rootEl}) {
  const loginPageHtml = generateLoginPageHtml(message);
  rootEl.innerHTML = `${loginPageHtml}`;
}