import {
    fetchLogin,
    fetchLogout,
    fetchLoggedInUsers,
    fetchMessages,
    fetchAddMessage
  } from './services';
  import {
    waitOnUsers,
    setUsers,
    waitOnMessages,
    setMessages,
    addMessage,
    waitOnLogin,
    login,
    logout,
    setError,
  } from './state';
  import {renderHomePage, renderLoginPage} from './render';
  
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
        login(username);
        waitOnUsers();
        renderHomePage({ state, rootEl });
        return fetchLoggedInUsers();
      })
      .then( users => {
        setUsers(users);
        waitOnMessages();
        renderHomePage({ state, rootEl });
        return fetchMessages();
      })
      .then( messages => {
        setMessages(messages);
        renderHomePage({ state, rootEl });
      })
      .catch( err => {
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
  
      const message = rootEl.querySelector('.outgoing-to-send').value;
      waitOnMessages();
      renderHomePage({ state, rootEl }); // show loading state
      fetchAddMessage( message )
      .then( newMessage => {
        addMessage(newMessage);
        renderHomePage({ state, rootEl });
      })
      .catch( err => {
        setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
        renderLoginPage({ state, rootEl });
      });
  
    });
  }