
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
    import { SERVER, CLIENT } from './constants';
  
  export default function loadList({ state, rootEl }) {
    
      // Check for an existing session
      const usersEl = rootEl.querySelector('.users');
      const messagesEl = rootEl.querySelector('.messages');
      waitOnUsers();
      renderUserList({state, usersEl});
      fetchLoggedInUsers()
      .catch( err => {
          if( err?.error === SERVER.AUTH_MISSING ) {
            return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
          }
          return Promise.reject(err); // Pass any other error unchanged
      })
      .then( users => {
          setUsers(users);
          renderUserList({state, usersEl});
          // TODO---: scrollIntoBottom
          waitOnMessages();
          renderMessageList({state, messagesEl});
          return fetchMessages(); 
      })
      .then( messages => {
          setMessages(messages);
          renderMessageList({state, messagesEl});
          // TODO---: scrollIntoBottom
        })
      .catch( err => {
        logout();
        if( err?.error == CLIENT.NO_SESSION ) { // expected "error"
           // No longer waiting, set to logged out case
          renderLoginPage({state, rootEl});
          return;
        }
        // For unexpected errors, report them
        setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
        renderLoginPage({state, rootEl});
      });
  }