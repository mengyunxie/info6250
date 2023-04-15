import { useState } from 'react';

function Login({ onLogin }) {
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
      <p className="login-greeting">Welcome to React Services!</p>
      <div className="login-main">
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