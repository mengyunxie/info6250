import {renderHomePage, renderLoginPage, renderErrorPage} from './view';
import state from './state';
import {fetchSession, fetchLogin, fetchWord, updateWord, fetchLogout} from './services';

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
    .catch( error => {
        logout();
        console.warn("replace this with actual error reporting", error);
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
    .catch( error => {
        logout();
        console.warn("replace this with actual error reporting", error);
    });
    return;
  }
  if(e.target.classList.contains('word-to-submit')) {
    updateWord(state.storedWord)
    .then((res) => {
        // TODO--: update the word string html
        renderHomePage({username: state.username, storedWord: state.storedWord, rootEl});
    })
    .catch( error => {
        // TODO---: Error message
        logout();
        console.warn("replace this with actual error reporting", error);
    });
    return;
  }

  if(e.target.classList.contains('logout-to-submit')) {
    fetchLogout()
    .then((res) => {
        logout();
    })
    .catch( error => {
        logout();
        console.warn("replace this with actual error reporting", error);
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

  function logout() {
    state.clear();
    renderLoginPage(rootEl);
  }