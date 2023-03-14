import {renderHomePage, renderLoginPage} from './render'; // Offer the render methods to generate HTML
import state from './state'; // 'state' holds the user's state
import {fetchSession, fetchLogin, fetchLogout} from './services'; // Offer fetch() calls to communicate with the server
// import MESSAGES from './constants'; // 'MESSAGES' translate the server's Error Messages to user friendly
import { MESSAGES, SERVER, CLIENT } from './constants';

import {
    addListenerToLogin,
    addListenerToLogout,
    addListenerToOutgoing
  } from './listeners';

const rootEl = document.querySelector('.root');

addListenerToLogin({ state,  rootEl });
addListenerToLogout({ state,  rootEl });
addListenerToOutgoing({ state,  rootEl });


function load() {

    // Check for an existing session
    fetchSession()
    // .then( res => {
    //     // If there is a session, call to get the stored word
    //     return fetchWord();
    // })
    .then((res) => {
        // If the call to get stored word is successful, update the user's state and show the Word View  

        renderHomePage({state, rootEl});
    })
    .catch( err => {
        // If there is not an existing session or the call to get stored word is unsuccessful, show Login Page
        renderLoginPage({state, rootEl});
    });

}

/* Runs on load */
load();