import { useState, useEffect } from 'react';

import './App.css';
import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchWord,
  updateWord,
  fetchDeleteWord
} from './services';

import Dashboard from './Dashboard';
import Login from './Login';
import Loading from './Loading';
import Status from './Status';

function App() {
  const [ error, setError ] = useState('');
  const [ username, setUsername] = useState('');
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING);
  const [ isWordPending, setIsWordPending ] = useState(false);
  const [ storedWord, setStoredWord] = useState('');

  function onLogin(username) {
    setError(''); // Clear the error status
    setIsWordPending(true); // Show loading state
    setLoginStatus(LOGIN_STATUS.PENDING);
    fetchLogin(username)
    .then( res => {
      setStoredWord(res.storedWord);
      setIsWordPending(false);
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
      setIsWordPending(false);
      setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    });
  };

  function onLogout() {
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setStoredWord('');
    fetchLogout() // We don't really care about results
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  };

  /* Rmove the Status component and clear the error message */
  function onClearStatus() {
    setError('');
  }

  function onUpdateWord(word) {
    setError(''); // Clear the error status
    setIsWordPending(true); // Show loading state
    updateWord(word)
    .then( res => { 
      setIsWordPending(false);
      setStoredWord(res.storedWord);
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
      setIsWordPending(false);
      if( err?.error === SERVER.AUTH_MISSING ) {
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
      }
    });
  }

  function onDeleteWord() {
    setError(''); // Clear the error status
    setIsWordPending(true); // Show loading state
    fetchDeleteWord()
      .then( res => {
        setStoredWord(res.storedWord);
        setIsWordPending(false);
      })
      .catch( err => {
        setError(err?.error || 'ERROR');
        setIsWordPending(false);
        if( err?.error === SERVER.AUTH_MISSING ) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        }
      });
  }

  function checkForSession() {
    fetchSession()
    .then( session => { // The returned object from the service call
      setUsername(session.username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setIsWordPending(true); // Show loading state
      return fetchWord(); // By returning this promise we can chain the original promise
    })
    .catch( err => {
      setIsWordPending(false);
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .then( res => {
      setIsWordPending(false);
      setStoredWord(res.storedWord);
    })
    .catch( err => {
      setIsWordPending(false);
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        return;
      }
      // For unexpected errors, report them
      setError(err?.error || 'ERROR'); // Ensure that the error ends up truthy
    });
  }

  // Here we use a useEffect to perform the initial loading
  // Initial loading isn't triggered by an event like most service calls
  useEffect(
    () => {
      checkForSession();
    },
    [] // Only run on initial render
  );

  return (
    <div className="app">
     {/* { error && <Status  error={error} onClearStatus={onClearStatus} /> } */}
      { loginStatus === LOGIN_STATUS.PENDING && <Loading>Loading user...</Loading> }
      { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <Login onLogin={onLogin} error={error} onClearStatus={onClearStatus}/> }
      { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <Dashboard
            username={username}
            storedWord={storedWord}
            isWordPending={isWordPending}
            onLogout={onLogout}
            onUpdateWord={onUpdateWord}
            onDeleteWord={onDeleteWord}
          />
      }
    </div>
  );
}

export default App;