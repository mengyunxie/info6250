

import { SERVER, CLIENT } from './constants';
import {fetchSession} from './services'; // Offer fetch() calls to communicate with the server
import refreshList from './refreshList';
import {renderHomePage, renderLoginPage} from './render'; // Offer the render methods to generate HTML

import state, {
  waitOnLogin,
  login,
  logout,
  setError
} from './state';

import { 
  addListenerToLogin,
  addListenerToLogout,
  addListenerToOutgoing,
  addListenerToLoginSend,
  addListenerToOutgoingSend 
} from './listeners';


const rootEl = document.querySelector('.root');

addListenerToLogin({ state,  rootEl });
addListenerToLogout({ state,  rootEl });
addListenerToOutgoing({ state,  rootEl });
addListenerToLoginSend(rootEl);
addListenerToOutgoingSend(rootEl);
checkForSession();

function checkForSession() {
  // Check for an existing session
  waitOnLogin();
  renderHomePage({ state, rootEl }); // show loading state
  fetchSession()
  .catch( err => {
    if( err?.error === SERVER.AUTH_MISSING ) {
      return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
    }
    return Promise.reject(err); // Pass any other error unchanged
  })
  .then( res => {
    login(res.username);
    renderHomePage({state, rootEl});
    refreshList({state, rootEl});
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