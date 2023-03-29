import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  function handleLogin(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if(!username.match(/^[A-Za-z0-9]+$/)) { // If it is an invalid username, show the message
      setMessage(`${username} is not made up of valid characters. Username must be letters or numbers. Please try again!`);
      setUsername('');
      return;
    }

    if(username === 'dog') { // If it is 'dog', show the message
      setMessage(`${username} is not a valid user. Please try again!`);
      setUsername('');
      return;
    }

    onLogin(username);
  }

  return (
    <main className="login">
      <p className="login-greeting">Welcome to React!</p>
      <div className="login-main">
        <p className="login-message">{message}</p>
        <form className="login-form" method="post" onSubmit={handleLogin}>
          <label className="login-label">
            <span>Username:</span>
            <input
              className="login-to-send"
              placeholder="Enter your username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="login-to-submit"
            disabled={!username}
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
