import { useState } from 'react';
import logo from './logo.png';

import Status from './Status';

function Login({ onLogin, error, onClearStatus }) {
  const [username, setUsername] = useState('');

  // Using 'onSubmit' to get both submit via button-click and by "enter"
  function handleLogin(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    
    // Don't allow blank username to try login
    if(username) {
      onLogin(username);
      setUsername(''); // Clear the username after clicking
    }
  }

  return (
    <main className="login">
      <div className="login-logo">
        <img src={logo} className="login-logo-img" alt="logo"/>
        <p className="login-logo-title">Passerby</p>
      </div>
      <p className="login-greeting">Welcome to Passerby!</p>
      <div className="login-main">
        <form className="login-form" method="post" onSubmit={handleLogin}>
          <input
            className="login-to-send"
            placeholder="Enter your username"
            value={username}
            maxLength={20}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="login-to-submit"
            disabled={!username}
          >
            Login
          </button>
        </form>
        { error && <Status  error={error} onClearStatus={onClearStatus} /> }
      </div>
    </main>
  );
}

export default Login;