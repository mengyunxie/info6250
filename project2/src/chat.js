import { SERVER, CLIENT } from './constants';
import {fetchSession} from './services'; // Offer fetch() calls to communicate with the server
import state, { login, logout, setError } from './state'; // The user's state in client side
import {renderHomePage, renderLoginPage} from './render'; // Offer the render methods to generate HTML
import polling from './polling'; // Set a polling to refresh the list of message and user
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

/* Check for an existing session */
function checkForSession() {

  fetchSession()
  .catch( err => {
    if( err?.error === SERVER.AUTH_MISSING ) {
      return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
    }
    return Promise.reject(err); // Pass any other error unchanged
  })
  .then( res => {

    // Login successful, show home page
    login(res.username);
    renderHomePage({state, rootEl});

    // Set polling
    polling({state, rootEl, isFirstTime: false});
  })
  .catch( err => {

    // If there is an error, update state and show login page
    logout();
    if( err?.error != CLIENT.NO_SESSION ) { // For unexpected errors, report them
      setError(err?.error || 'ERROR');
    }
    renderLoginPage({state, rootEl});
  });
}