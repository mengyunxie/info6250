import {renderHomePage, renderLoginPage} from './view';
import state from './state';
import {fetchSession, fetchLogin, fetchWord, updateWord, fetchLogout} from './services';
import MESSAGES from './message';

const rootEl = document.querySelector('.root');

function init() {
    // Below runs on load
    fetchSession()
    .then( res => {
        return fetchWord();
    })
    .then((res) => {
        state.storedWord = res.storedWord;
        state.username = res.username;
        renderHomePage({username: state.username, storedWord: state.storedWord, rootEl});
    })
    .catch( err => {
        logout();
    });
}

/* Load the page */
init();

rootEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('login-to-submit')) {
    fetchLogin(state.username)
    .then( res => {
        return fetchWord();
    })
    .then((res) => {
        state.storedWord = res.storedWord;
        state.username = res.username;
        renderHomePage({username: state.username, storedWord: state.storedWord, rootEl});
    })
    .catch( err => {
        const message = MESSAGES[err.error] || MESSAGES.default;
        logout(message);
    });
    return;
  }
  if(e.target.classList.contains('word-to-submit')) {
    updateWord(state.storedWord)
    .then((res) => {
        renderHomePage({username: state.username, storedWord: state.storedWord, rootEl});
    })
    .catch( err => {
        const message = MESSAGES[err.error] || MESSAGES.default;
        logout(message);
    });
    return;
  }

  if(e.target.classList.contains('logout-to-submit')) {
    fetchLogout()
    .then((res) => {
        const message = MESSAGES[err.error] || MESSAGES.default;
        logout(message);
    })
    .catch( err => {
        const message = MESSAGES[err.error] || MESSAGES.default;
        logout(message);
    });
    return;
  }
});

rootEl.addEventListener('input', (e) => {
    if(e.target.classList.contains('login-to-send')) {
        state.username = e.target.value;
        return;
    }
    if(e.target.classList.contains('word-to-send')) {
        state.storedWord = e.target.value;
        return;
    }
  });

  function logout(message) {
    state.clear();
    renderLoginPage({message, rootEl});
  }