
import state, {
  waitOnUsers,
  setUsers,
  waitOnMessages,
  setMessages,
  waitOnLogin,
  login,
  logout,
  setError,
  } from './state';
import {renderHomePage, renderLoginPage} from './render'; // Offer the render methods to generate HTML
import {fetchSession, fetchLoggedInUsers, fetchMessages} from './services'; // Offer fetch() calls to communicate with the server
import { SERVER, CLIENT } from './constants';

import {
    addListenerToLogin,
    addListenerToLogout,
    addListenerToOutgoing
  } from './listeners';

const rootEl = document.querySelector('.root');

addListenerToLogin({ state,  rootEl });
addListenerToLogout({ state,  rootEl });
addListenerToOutgoing({ state,  rootEl });


function checkForSession() {
    // Check for an existing session
    waitOnLogin();
    renderLoginPage({ state, rootEl }); // show loading state
    fetchSession()
    .then( res => { // The returned object from the service call
      login(res.username);
      waitOnUsers();
      renderHomePage({state, rootEl});          // Show we are logged in but don't have todos
      return fetchLoggedInUsers(); // By returning this promise we can chain the original promise
    })
    .catch( err => {
        if( err?.error === SERVER.AUTH_MISSING ) {
          return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
        }
        return Promise.reject(err); // Pass any other error unchanged
    })
    .then( users => {
        setUsers(users);
        waitOnMessages();
        renderHomePage({state, rootEl});
        return fetchMessages(); 
    })
    .then( messages => {
        setMessages(messages);
        renderHomePage({state, rootEl});
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

function load() {
  checkForSession(); // fetch and use data
  setTimeout( load, 5000 );
}

/* Runs on load */
load();