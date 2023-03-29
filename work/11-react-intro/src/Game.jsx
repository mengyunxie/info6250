import { useState } from 'react';
import compare from './compare';

function Game({ username, onLogout }) {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function makeGuess(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const SECRETWORD = 'RECAT'; // This is secret word
    setGuess(''); // Clear the input field of guess 

    if(!guess.match(/^[A-Za-z]{5}$/)) { // If the guess is not valid, show the message
      setMessage(`${guess} was not a valid word`);
      return;
    }

    if(guess.toUpperCase() === SECRETWORD) { // If the guess is identical (regardless of case) to the secret word, show the message
      setMessage(`${guess} is the secret word!`);
      return;
    }

    // If the guess is valid but not the secret word, show the message
    const match = compare(SECRETWORD, guess);
    setMessage(`${guess} had ${match} letters in common`);
  }

  return (
    <main className="game">
      <p className="game-greeting">Hello <span className="game-name">{username}</span></p>
      <div className="logout-form">
        <button 
          type="button" 
          className="logout-to-submit" 
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div className="guess">
        <p className="guess-message">{message}</p>
        <form className="guess-form" method="post" onSubmit={makeGuess}>
          <label className="guess-label">
            <span>Guess Word:</span>
            <input
              className="guess-to-send"
              placeholder="Enter a 5 letter word"
              maxLength={5}
              value={guess}
              onInput={(e) => setGuess(e.target.value)}
          />
          </label>
          <button 
            type="submit" 
            className="guess-to-submit" 
            disabled={!guess}
          >
            Make a Guess
          </button>
        </form>
      </div>
    </main>
  );
}

export default Game;
