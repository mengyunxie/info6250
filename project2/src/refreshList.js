import {
  waitOnUsers,
  setUsers,
  waitOnMessages,
  setMessages,
  logout,
  setError
} from './state';
import {renderLoginPage, renderUserList, renderMessageList} from './render'; // Offer the render methods to generate HTML
import {fetchLoggedInUsers, fetchMessages} from './services'; // Offer fetch() calls to communicate with the server

export default function refreshList({ state, rootEl }) {

  // Check for an existing session
  const usersEl = rootEl.querySelector('.users');
  const messagesEl = rootEl.querySelector('.messages');
  waitOnUsers();
  renderUserList({state, usersEl});
  fetchLoggedInUsers()
  .then( users => {
    setUsers(users);
    renderUserList({state, usersEl});
    usersEl.scrollTop = usersEl.scrollHeight; // scrollIntoBottom
    waitOnMessages();
    renderMessageList({state, messagesEl});
    return fetchMessages(); 
  })
  .then( messages => {
    setMessages(messages);
    renderMessageList({state, messagesEl});
    messagesEl.scrollTop = messagesEl.scrollHeight; // scrollIntoBottom
    })
  .catch( err => {
    logout();
    setError(err?.error || 'ERROR');
    renderLoginPage({state, rootEl});
  });
}