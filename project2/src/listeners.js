import { fetchLogin, fetchLogout, fetchAddMessage } from './services';
import refreshList from './refreshList';
import {renderHomePage, renderLoginPage, renderMessageList} from './render';

import {
  waitOnMessages,
  addMessage,
  waitOnLogin,
  login,
  logout,
  setError,
  setTimeoutId
} from './state';

function load({ state, rootEl }) {
  refreshList({ state,  rootEl }); // fetch and use data
  const id = setTimeout( load, 5000, { state, rootEl } );
  setTimeoutId(id);
}

export function addListenerToLogin({ state,  rootEl }) {
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('login-form')) {
      return;
    }
    const username = rootEl.querySelector('.login-to-send').value;
    waitOnLogin();
    renderLoginPage({ state, rootEl }); // show loading state
    fetchLogin( username )
    .then( res => {
      login(res.username);
      renderHomePage({ state, rootEl });
      load({ state, rootEl });
    })
    .catch( err => {
      logout();
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
      renderLoginPage({ state, rootEl });
    });
  });
}

export function addListenerToLogout({ state, rootEl }) {
  rootEl.addEventListener('click', (e) => {
    if(!e.target.classList.contains('logout-to-submit')) {
      return;
    }
    logout();
    renderLoginPage({ state, rootEl });
    fetchLogout() // We don't really care about results
    .catch( err => {
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
      renderLoginPage({ state, rootEl });
    });
  });
}

export function addListenerToOutgoing({ state,  rootEl }) {
  // Using 'submit' so we can get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('outgoing-form')) {
      return;
    }

    const toSendEl = rootEl.querySelector('.outgoing-to-send');
    const sendButtonEl = rootEl.querySelector('.outgoing-to-submit');
    const messagesEl = rootEl.querySelector('.messages');
    waitOnMessages();
    renderMessageList({ state, messagesEl}); // show loading state
    fetchAddMessage( toSendEl.value )
    .then( newMessage => {
      addMessage(newMessage);
      renderMessageList({ state, messagesEl});
      messagesEl.scrollTop = messagesEl.scrollHeight;
      toSendEl.value = '';
      sendButtonEl.disabled = !toSendEl.value;
    })
    .catch( err => {
      logout();
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
      renderLoginPage({ state, rootEl });
    });

  });
}

export function addListenerToLoginSend(rootEl) {
  rootEl.addEventListener('input', (e) => {
    if(!e.target.classList.contains('login-to-send')) {
      return;
    }
    const sendButtonEl = rootEl.querySelector('.login-to-submit');
    sendButtonEl.disabled = !e.target.value;
  });
}

export function addListenerToOutgoingSend(rootEl) {
  rootEl.addEventListener('input', (e) => {
    if(!e.target.classList.contains('outgoing-to-send')) {
      return;
    }
    const sendButtonEl = rootEl.querySelector('.outgoing-to-submit');
    sendButtonEl.disabled = !e.target.value;
  });
}