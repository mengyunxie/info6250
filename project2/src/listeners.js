import { fetchLogin, fetchLogout, fetchAddMessage } from './services'; // Offer fetch() calls to communicate with the server
import { waitOnMessages, addMessage, waitOnLogin, login, logout, setError } from './state'; // The user's state in client side
import {renderHomePage, renderLoginPage, renderMessageList} from './render'; // Offer the render methods to generate HTML
import polling from './polling'; // Set a polling to refresh the list of message and user

/* Listen to the submit event of login form */
export function addListenerToLogin({ state,  rootEl }) {

  // Using 'submit' to get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('login-form')) {
      return;
    }
    const username = rootEl.querySelector('.login-to-send').value;

    // Show loading state
    waitOnLogin();
    renderLoginPage({ state, rootEl });

    // Make a login call
    fetchLogin( username )
    .then( res => {

      // Login successful, show home page and set polling
      login(res.username);
      renderHomePage({ state, rootEl });
      polling({ state, rootEl });
    })
    .catch( err => {

      // If there is an error, update state and show login page
      logout();
      setError(err?.error || 'ERROR');
      renderLoginPage({ state, rootEl });
    });
  });
}

/* Listen to the click event of logout button */
export function addListenerToLogout({ state, rootEl }) {
  rootEl.addEventListener('click', (e) => {
    if(!e.target.classList.contains('logout-to-submit')) {
      return;
    }

    // Update state and show login page
    logout();
    renderLoginPage({ state, rootEl });

    // Make a logout call
    fetchLogout()
    .catch( err => {
      setError(err?.error || 'ERROR');
      renderLoginPage({ state, rootEl });
    });
  });
}

/* Listen to the submit event of outgoing form */
export function addListenerToOutgoing({ state,  rootEl }) {

  // Using 'submit' to get both submit via button-click and by "enter"
  rootEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('outgoing-form')) {
      return;
    }

    // Get the element of the send message input
    const toSendEl = rootEl.querySelector('.outgoing-to-send');

    // Get the element of the send message button
    const sendButtonEl = rootEl.querySelector('.outgoing-to-submit');

    // Get the element of messages' list
    const messagesEl = rootEl.querySelector('.messages');

    // Show loading state of messages' list
    waitOnMessages();
    renderMessageList({ state, messagesEl});

    // Make a call to send a new message
    fetchAddMessage( toSendEl.value )
    .then( newMessage => {

      // Show messages' list
      addMessage(newMessage);
      renderMessageList({ state, messagesEl});

      // See the most recent messages
      messagesEl.scrollTop = messagesEl.scrollHeight;

      // Clear the value of the send message input
      toSendEl.value = '';

      // Set the disabled attribute of the send message button
      sendButtonEl.disabled = !toSendEl.value;
    })
    .catch( err => {

      // If there is an error, update state and show login page
      logout();
      setError(err?.error || 'ERROR');
      renderLoginPage({ state, rootEl });
    });

  });
}

/* Update the disabled attribute of the login button */
export function addListenerToLoginSend(rootEl) {
  rootEl.addEventListener('input', (e) => {
    if(!e.target.classList.contains('login-to-send')) {
      return;
    }
    const sendButtonEl = rootEl.querySelector('.login-to-submit');
    sendButtonEl.disabled = !e.target.value; // If it has a value, set "disabled" to false
  });
}

/* Update the disabled attribute of the send message button */
export function addListenerToOutgoingSend(rootEl) {
  rootEl.addEventListener('input', (e) => {
    if(!e.target.classList.contains('outgoing-to-send')) {
      return;
    }
    const sendButtonEl = rootEl.querySelector('.outgoing-to-submit');
    sendButtonEl.disabled = !e.target.value; // If it has a value, set "disabled" to false
  });
}