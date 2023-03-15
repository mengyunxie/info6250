import {
    fetchLogin,
    fetchLogout,
    fetchAddMessage
  } from './services';

  import {
    waitOnMessages,
    addMessage,
    waitOnLogin,
    login,
    logout,
    setError,
    setTimeoutId
  } from './state';

  import {renderHomePage, renderLoginPage, renderMessageList} from './render';
  import loadList from './loadList';
  
  function load({ state, rootEl }) {
    loadList({ state,  rootEl }); // fetch and use data
    const id = setTimeout( load, 5000, { state, rootEl } );
    setTimeoutId(id);
  }

  export function addListenerToLogin({ state,  rootEl }) {
    // Using 'submit' so we can get both submit via button-click and by "enter"
    rootEl.addEventListener('click', (e) => {
      if(!e.target.classList.contains('login-to-submit')) {
        return;
      }
  
      const username = rootEl.querySelector('.login-to-send').value;
      waitOnLogin();
      renderLoginPage({ state, rootEl }); // show loading state
      fetchLogin( username )
      .then( res => {
        login(res.username);
        renderHomePage({ state, rootEl });
        load({ state, rootEl });
      })
      .catch( err => {
        logout();
        setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
        renderLoginPage({ state, rootEl });
      });
    });
  }
  
  export function addListenerToLogout({ state, rootEl }) {
    rootEl.addEventListener('click', (e) => {
      if(!e.target.classList.contains('logout-to-submit')) {
        return;
      }
      logout();
      renderLoginPage({ state, rootEl });
      fetchLogout() // We don't really care about results
      .catch( err => {
        setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
        renderLoginPage({ state, rootEl });
      });
    });
  }

  export function addListenerToOutgoing({ state,  rootEl }) {
    // Using 'submit' so we can get both submit via button-click and by "enter"
    rootEl.addEventListener('click', (e) => {
      if(!e.target.classList.contains('outgoing-to-submit')) {
        return;
      }
  
      const toSendEl = rootEl.querySelector('.outgoing-to-send');
      const message = toSendEl.value;
      const messagesEl = rootEl.querySelector('.messages');
      waitOnMessages();
      renderMessageList({ state, messagesEl}); // show loading state
      fetchAddMessage( message )
      .then( newMessage => {
        addMessage(newMessage);
        renderMessageList({ state, messagesEl});
        toSendEl.value = '';
      })
      .catch( err => {
        logout();
        setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
        renderLoginPage({ state, rootEl });
      });
  
    });
  }