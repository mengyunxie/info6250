import { useState } from 'react';

function Home({ username, onLogout, onUpdateWord }) {

  const [word, setWord] = useState('');
  const [message, setMessage] = useState('');

  // Using 'onSubmit' to get both submit via button-click and by "enter"
  function updateWord(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    
    onUpdateWord(word);

    setMessage('');
    setWord(''); // Reset the guess state
  }

  return (
    <main className="user">
      <p className="user-greeting">Hello <span className="user-title">{username}</span></p>
      <div className="logout-form">
        <button 
          type="button" 
          className="logout-to-submit" 
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div className="word">
        <div className="stored-word">
          <span>Stored word:</span>{word ? <span className="stored-word-content">{word}</span> : <span className="no-data">No word, please update your word.</span>}
        </div>
        <form className="word-form" method="post" onSubmit={updateWord}>
            {message ? <p className="word-message">{message}</p> : ""}
            <label className="word-label">
                <span>Your Word:</span>
                <input
                    className="word-to-send"
                    placeholder="Enter your word"
                    value={word}
                    onInput={(e) => setWord(e.target.value)}
                />
            </label>
            <button 
                type="submit" 
                className="word-to-submit" 
                disabled={!word}
            >
                Make a Guess
            </button>
        </form>
      </div>
    </main>
  );
}

export default Home;