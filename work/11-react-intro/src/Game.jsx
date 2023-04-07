import { useState } from 'react';
import compare from './compare';

function Game({ username, onLogout }) {

  const [guess, setGuess] = useState({
    word:'',
    isWin: false, // True means the guess is correct
    isValid: false // True means the guess did not contain a 5 character word
   });
  const [message, setMessage] = useState('');

  const gameState = guess.isValid ? "error" : (guess.isWin ? "success" : ""); // The dynamic className of the message

  // Using 'onSubmit' to get both submit via button-click and by "enter"
  function makeGuess(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const SECRETWORD = 'RECAT'; // This is secret word

    if(!guess.word.match(/^[A-Za-z]{5}$/)) { // If the guess is not valid, show the message
      setMessage(`${guess.word} was not a valid word`);
      setGuess({word: '', isWin: false, isValid: true}); // Clear the input field of guess and update 'isValid' to true
      return;
    }

    if(guess.word.toUpperCase() === SECRETWORD) { // If the guess is identical (regardless of case) to the secret word, show the message
      setMessage(`${guess.word} is the secret word!`);
      setGuess({word: '', isWin: true, isValid: false}); // Clear the input field of guess and update 'isWin' to true
      return;
    }

    // If the guess is valid but not the secret word, show the message
    const match = compare(SECRETWORD, guess.word);
    setMessage(`${guess.word} had ${match} letters in common`);
    setGuess({word:'', isWin: false, isValid: false}); // Reset the guess state
  }

  return (
    <main className="game">
      <p className="game-greeting">Hello <span className="game-username">{username}</span></p>
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
        <p className={`guess-message ${gameState}`}>{message}</p>
        <form className="guess-form" method="post" onSubmit={makeGuess}>
          <label className="guess-label">
            <span>Guess Word:</span>
            <input
              className="guess-to-send"
              placeholder="Enter a 5 letter word"
              maxLength={5}
              value={guess.word}
              onInput={(e) => setGuess({...guess, word: e.target.value})}
          />
          </label>
          <button 
            type="submit" 
            className="guess-to-submit" 
            disabled={!guess.word}
          >
            Make a Guess
          </button>
        </form>
      </div>
    </main>
  );
}

export default Game;
