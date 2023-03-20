import { setTimeoutId } from './state'; // The user's state in client side
import { fetchLoggedInUsers, fetchMessages } from './services'; // Offer fetch() calls to communicate with the server
import { waitOnUsers, setUsers, waitOnMessages, setMessages, logout, setError } from './state'; // The user's state in client side
import { renderLoginPage, renderUserList, renderMessageList } from './render'; // Offer the render methods to generate HTML

/* Every 5 seconds (roughly) refresh the list of message and users */
export default function pollingRefreshList({ state, rootEl, isFirstTime }) {

  // Refresh the list of message and users
  refreshUserList({state, rootEl});
  refreshMessageList({state, rootEl, forceScrollToBottom: isFirstTime});

  // Update the Timeout Id into state
  const id = setTimeout( pollingRefreshList, 5000, { state, rootEl, isFirstTime: false } );
  setTimeoutId(id);
}

/* Make a call to get the lists of logged-in user, then show lists */
function refreshUserList({ state, rootEl }) {
  const usersEl = rootEl.querySelector('.users');

  // Show loading state of users' list
  waitOnUsers();
  renderUserList({state, usersEl});

  // Make a call to get the logged-in users' list
  fetchLoggedInUsers()
  .then( users => {

    // Show users' list
    setUsers(users);
    renderUserList({state, usersEl});
  })
  .catch( err => {

    // If there is an error, update state and show login page
    logout();
    setError(err?.error || 'ERROR');
    renderLoginPage({state, rootEl});
  });
}

/* Make a call to get the lists of message, then show lists */
function refreshMessageList({ state, rootEl, forceScrollToBottom }) {
  const messagesEl = rootEl.querySelector('.messages');

  // Check the scrolling status of messages' list
  const needScrollToBottom = forceScrollToBottom ? true : (messagesEl.scrollHeight - messagesEl.scrollTop) < (messagesEl.clientHeight + 33);

  // Save the previous scrollTop of messagesEl
  const preScrollTop = messagesEl.scrollTop;

  // Show loading state of messages' list
  waitOnMessages();
  renderMessageList({state, messagesEl});

  // Make a call to get the messages' list
  fetchMessages()
  .then( messages => {

    // Show messages' list
    setMessages(messages);
    renderMessageList({state, messagesEl});

    if(needScrollToBottom) { // Scroll to the bottom
      messagesEl.scrollTop = messagesEl.scrollHeight;
    } else { // Keep in the same position
      messagesEl.scrollTop = preScrollTop;
    }
  })
  .catch( err => {

    // If there is an error, update state and show login page
    logout();
    setError(err?.error || 'ERROR');
    renderLoginPage({state, rootEl});
  });
}