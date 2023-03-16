function generateHomePageHtml(state) {
  if(state.isLoginPending) {
    return generateSpinnerHtml();
  }
  return `
    <div class="home">
      <p class="user-greeting">Hello <span class="user-title">${state.username}</span></p>
      <div class="logout-form">
        <button type="submit" class="logout-to-submit">Logout</button>
      </div>
      <div class="messages">
        ${generateMessageListHtml(state)}
      </div>
      <div class="users">
        ${generateUserListHtml(state)}
      </div>
      ${generateOutgoingHtml()}
    </div>
  `;
}

function generateMessageListHtml (state) {
  if(state.isMessagesPending) {
    return generateSpinnerHtml();
  }

  if(state.messages.length == 0) {
    return `<p class="no-data">No Message</p>`;
  }

  const listHtml = state.messages.map( msg => `
    <li>
      <div class="message">
        <div class="message-info">
          <img class="messages-avatar" alt="avatar of ${msg.username}" src="images/cat.png"/>
          <span class="messages-username">${msg.username}</span>
        </div>
        <p class="message-text">${msg.message}</p>
      </div>
    </li>
  `).join('');
  return `
    <ul class="messages-list">
      ${listHtml}
    </ul>
  `;
}

function generateUserListHtml(state) {
  if(state.isUsersPending) {
    return generateSpinnerHtml();
  }

  if(state.users.length == 0) {
    return `<p class="no-data">No Message</p>`;
  }

  const listHtml = state.users.map((user) => `
    <li>
      <div class="user">
        <img class="user-avatar" alt="avatar of ${user.username}" src="images/cat.png"/>
        <span class="user-username">${user.username}</span>
      </div>
    </li>
  `).join('');

  return `
    <ul class="users-list">
      ${listHtml}
    </ul>
  `;
}

function generateOutgoingHtml() {
  return `<div class="outgoing">
    <form class="outgoing-form" action="#/add">
      <input type="text" name="text" class="outgoing-to-send" value="" placeholder="Enter message to send"/>
      <button type="submit" class="outgoing-to-submit" disabled>Send</button>
    </form>
  </div>`;
}

function generateLoginPageHtml(state) {
  if(state.isLoginPending) {
    return generateSpinnerHtml();
  }
  return `
    <div class="login">
      <p class="login-greeting">Welcome to JS Chat!</p>
      <div class="login-main">
        ${state.error ? `<p class="login-error">${state.error}</p>` : ""}
        <form class="login-form" action="#/login">
          <label class="login-label">
            <span>Username:</span>
            <input type="text" name="username" class="login-to-send" value="" placeholder="Enter your username"/>
          </label>
          <button type="submit" class="login-to-submit" disabled>Login</button>
        </form>
      </div>
    </div>
  `;
}

function generateSpinnerHtml() {
  return `
    <div class="spinner">
      <img class="spinner-img" alt="loading" src="images/loading.gif"/>
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