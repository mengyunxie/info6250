import { fetchLoggedInUsers, fetchMessages} from './services'; // Offer fetch() calls to communicate with the server
import { waitOnUsers, setUsers, waitOnMessages, setMessages, logout, setError } from './state'; // The user's state in client side
import { renderLoginPage, renderUserList, renderMessageList } from './render'; // Offer the render methods to generate HTML


/* Make calls to get the lists of logged-in users and messages, then show html for these lists */
export default function refreshList({ state, rootEl }) {

  const usersEl = rootEl.querySelector('.users');
  const messagesEl = rootEl.querySelector('.messages');

  // Show loading state of users' list
  waitOnUsers();
  renderUserList({state, usersEl});

  // Make a call to get the logged-in users' list
  fetchLoggedInUsers()
  .then( users => {

    // Show users' list
    setUsers(users);
    renderUserList({state, usersEl});

    // Show loading state of messages' list
    waitOnMessages();
    renderMessageList({state, messagesEl});

    // Make a call to get the messages' list
    return fetchMessages(); 
  })
  .then( messages => {

    // Show messages' list
    setMessages(messages);
    renderMessageList({state, messagesEl});

    // See the most recent messages
    messagesEl.scrollTop = messagesEl.scrollHeight;
  })
  .catch( err => {

    // If there is an error, update state and show login page
    logout();
    setError(err?.error || 'ERROR');
    renderLoginPage({state, rootEl});
  });
}