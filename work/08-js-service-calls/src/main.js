import {renderHomePage, renderLoginPage} from './view'; // Offer the render methods to generate HTML
import state from './state'; // 'state' holds the user's state
import {fetchSession, fetchLogin, fetchWord, updateWord, fetchLogout} from './services'; // Offer fetch() calls to communicate with the server
import MESSAGES from './message'; // 'MESSAGES' translate the server's Error Messages to user friendly

const rootEl = document.querySelector('.root');

rootEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('login-to-submit')) { // Click the "Login" button

        fetchLogin(state.username)
        .then( res => {
            // If the call to login is successful, call to get the stored word
            return fetchWord();
        })
        .then((res) => {    
            // If the call to get stored word is successful, update the user's state and show the Word View  
            state.clear();
            state.storedWord = res.storedWord;
            state.username = res.username;
            renderHomePage({state, rootEl});
        })
        .catch( err => {
            // If the call to login or get stored word is unsuccessful, show Login Page with an error message
            let message = MESSAGES[err.error] || MESSAGES.default;
            if(err.error == 'required-username') { // User-friendly error messages for 'required-username' error
                const isEmpty = !state.username || !(state.username.trim());
                message = (isEmpty ? "Empty Username. " : "Invalid Username. ") + message;
            }
            goLoginPage(message);
        });

        return;
    }

    if(e.target.classList.contains('word-to-submit')) { // Click the "Save" word button

        updateWord(state.updatedWord)
        .then((res) => {
            // If the call to update the word is successful, update the user's state and show the Word View
            state.storedWord = res.storedWord;
            state.updatedWord = ""; // After update the word, the updatedWord need to be reset to ""
            renderHomePage({state, rootEl});
        })
        .catch( err => {
            let message = MESSAGES[err.error] || MESSAGES.default;
            if(err.error == 'invalid-word') { // If it is the server's 'invalid-word' Error Messages, stay in the Word View with an user-friendly error message
                const isEmpty = !state.updatedWord || !(state.updatedWord.trim());
                message = (isEmpty ? "Empty word. " : "Invalid word. ") + message;
                state.updatedWord = "";
                renderHomePage({state, message, rootEl});
            } else if(err.error == 'required-word') { // If it is the server's 'required-word' Error Messages, stay in the Word View with an error message
                state.updatedWord = "";
                renderHomePage({state, message, rootEl});
            } else { // Otherwise, show Login Page with an error message
                goLoginPage(message);
            }
        });

        return;
    }

    if(e.target.classList.contains('logout-to-submit')) { // Click the "Logout" button

        fetchLogout()
        .then((res) => {
            // If the call to logout is successful, show Login Page
            goLoginPage();
        })
        .catch( err => {
            // If the call to logout is unsuccessful, show Login Page with an error message
            const message = MESSAGES[err.error] || MESSAGES.default;
            goLoginPage(message);
        });

        return;
    }
});

rootEl.addEventListener('input', (e) => {
    if(e.target.classList.contains('login-to-send')) { // The value of the username input has changed
        state.username = e.target.value;
        return;
    }

    if(e.target.classList.contains('word-to-send')) { // The value of the word input has changed
        state.updatedWord = e.target.value;
        return;
    }
});

function goLoginPage(message) {
    state.clear(); // Clear the user's state
    renderLoginPage({message, rootEl}); // Render the Login Page
}


function init() {

    // Check for an existing session
    fetchSession()
    .then( res => {
        // If there is a session, call to get the stored word
        return fetchWord();
    })
    .then((res) => {
        // If the call to get stored word is successful, update the user's state and show the Word View  
        state.storedWord = res.storedWord;
        state.username = res.username;
        renderHomePage({state, rootEl});
    })
    .catch( err => {
        // If there is not an existing session or the call to get stored word is unsuccessful, show Login Page
        goLoginPage();
    });

}

/* Runs on load */
init();