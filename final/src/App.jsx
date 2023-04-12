import { useState, useEffect } from 'react';

import './App.css';
import './icons.css';
import {
  SIDE_MENU,
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchDiaries,
  fetchPasserbyDiaries
} from './services';

import Dashboard from './Dashboard';
import Login from './Login';
import Loading from './Loading';

function App() {
  const [ error, setError ] = useState('');
  const [ username, setUsername] = useState('');
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING);
  const [menu, setMenu] = useState(SIDE_MENU.PASSERBY);

  function onLogin(username) {
    setError(''); // Clear the error status
    setLoginStatus(LOGIN_STATUS.PENDING);
    fetchLogin(username)
    .then( res => {
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return fetchPasserbyDiaries();
    })
    .then( res => {
      console.log(res);
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
      setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    });
  };

  function onLogout() {
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    fetchLogout() // We don't really care about results
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  };

  /* Rmove the Status component and clear the error message */
  function onClearStatus() {
    setError('');
  }

  function onSetMenu(menu) {
    setMenu(menu);
  }

  function checkForSession() {
    fetchSession()
    .then( session => { // The returned object from the service call
      setUsername(session.username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return fetchPasserbyDiaries(); // By returning this promise we can chain the original promise
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .then( res => {
      console.log(res);
    })
    .catch( err => {
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
            onLogout={onLogout}
            menu={menu}
            onSetMenu={onSetMenu}
          />
      }
    </div>
  );
}

export default App;