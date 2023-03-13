function generateHomePageHtml({state, message}) {
    return `
      <div class="home">
        <p class="user-greeting">Hello <span class="user-title">${state.username}</span></p>
        <div class="logout-form">
          <button type="submit" class="logout-to-submit">Logout</button>
        </div>
        ${generateMessageListHtml(state)}
        ${generateUserListHtml(state)}
        ${generateOutgoingHtml()}
      </div>
    `;
  }

  function generateMessageListHtml (state) {
    return `<ol class="messages">` +
    Object.values(state.messages).map( message => `
      <li>
        <div class="message">
          <div class="sender-info">
            <img class="avatar" alt="avatar of ${message.sender}" src="images/avatar-${message.sender}.jpg"/>
            <span class="username">${message.sender}</span>
          </div>
          <p class="message-text">${message.text}</p>
        </div>
      </li>
    `).join('') +
    `</ol>`;
  }
  
  function generateUserListHtml(state) {
    return `<ul class="users">` +
    Object.values(state.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  }

  function generateOutgoingHtml() {
    return `<div class="outgoing">
      <form action="/chat" method="POST" class="outgoing-form">
        <input type="hidden" name="username" value="Amit"/>
        <input type="text" name="text" class="to-send" value="" placeholder="Enter message to send"/>
        <button type="submit" class="to-submit">Send</button>
      </form>
    </div>`;
  }

  function generateLoginPageHtml(message) {
    return `
      <div class="login">
        <p class="login-greeting">Welcome to JS Chat!</p>
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