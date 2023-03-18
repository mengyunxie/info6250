function generateHomePageHtml({state, message}) {
  return `
    <div class="user">
      <p class="user-greeting">Hello <span class="user-title">${state.username}</span></p>
      <div class="logout-form">
        <button type="submit" class="logout-to-submit">Logout</button>
      </div>
      <div class="word">
        <div class="stored-word">
          <span>Stored word:</span>${state.storedWord ? `<span class="stored-word-content">${state.storedWord}</span>` : `<span class="no-data">No word, please update your word.</span>`}
        </div>
        <div class="word-form">
          ${message ? `<p class="word-message">${message}</p>` : ""}
          <label class="word-label">
            <span>Update Word:</span>
            <input type="text" name="word" class="word-to-send" value="${state.updatedWord}" placeholder="Enter your word" />
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
        ${message ? `<p class="login-message">${message}</p>` : ""}
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

export function renderHomePage({state, message, rootEl}) {
  const homePageHtml = generateHomePageHtml({state, message});
  rootEl.innerHTML = `${homePageHtml}`;
}

export function renderLoginPage({message, rootEl}) {
  const loginPageHtml = generateLoginPageHtml(message);
  rootEl.innerHTML = `${loginPageHtml}`;
}