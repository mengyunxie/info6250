function generateHomePageHtml(state) {
    return `
      <div class="home">
        <p class="user-greeting">Hello <span class="user-title">${state.username}</span></p>
        <div class="logout-form">
          <button type="submit" class="logout-to-submit">Logout</button>
        </div>
        <ol class="messages">
          ${generateMessageListHtml(state)}
        </ol>
        <ul class="users">
        ${generateUserListHtml(state)}
        </ul>
        ${generateOutgoingHtml()}
      </div>
    `;
  }

  function generateMessageListHtml (state) {
    if(state.isMessagesPending) {
      return `
        <li>Loading messages...</li>
      `
    }

    return state.messages.map( msg => `
      <li>
        <div class="message">
          <div class="sender-info">
            <img class="avatar" alt="avatar of ${msg.username}" src="images/cat.png"/>
            <span class="username">${msg.username}</span>
          </div>
          <p class="message-text">${msg.message}</p>
        </div>
      </li>
    `).join('');
  }
  
  function generateUserListHtml(state) {
    if(state.isUsersPending) {
      return `
        <li class="users">Loading users...</li>
      `
    }

    return state.users.map((user) => `
      <li>
        <div class="user">
          <span class="username">${user.username}</span>
        </div>
      </li>
    `).join('');
  }

  function generateOutgoingHtml() {
    return `<div class="outgoing">
      <div class="outgoing-form">
        <input type="text" name="text" class="outgoing-to-send" value="" placeholder="Enter message to send"/>
        <button type="submit" class="outgoing-to-submit">Send</button>
      </div>
    </div>`;
  }

  function generateLoginPageHtml(state) {
    if(state.isLoginPending) {
      return `
        <div class="login">Loading user...</div>
      `
    }

    return `
      <div class="login">
        <p class="login-greeting">Welcome to JS Chat!</p>
        <div class="login-main">
          ${state.error ? `<p class="login-message">${state.error}</p>` : ""}
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
  
  export function renderHomePage({state,rootEl}) {
    const homePageHtml = generateHomePageHtml(state);
    rootEl.innerHTML = `${homePageHtml}`;
  }

  export function renderMessageList({state, messagesEl}) {
    const messageListHtml = generateMessageListHtml(state);
    messagesEl.innerHTML = `${messageListHtml}`;
  }

  export function renderUserList({state, usersEl}) {
    const userListHtml = generateUserListHtml(state);
    usersEl.innerHTML = `${userListHtml}`;
  }
  
  export function renderLoginPage({state, rootEl}) {
    const loginPageHtml = generateLoginPageHtml(state);
    rootEl.innerHTML = `${loginPageHtml}`;
  }