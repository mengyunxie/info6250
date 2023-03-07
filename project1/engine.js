"use strict";

/* Pick a random word from the list of available words */
function pickWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function takeTurn(secretWord, guessWord) {
  const result = {
    win: false,
    match: 0
  }
  if(exactMatch(secretWord, guessWord)) {
    result.win = true;
    result.match = guessWord.length;
  } else {
    result.match = compare(secretWord, guessWord);
  }
  
  return result;
}

function isValidGuess(wordList, guess) {
  // Return true, if the current list of possible words contains the guess
  return wordList.filter((word) => word.toLowerCase()).includes(guess.toLowerCase());
}

function exactMatch(word, guess) {
  return word.toLowerCase() === guess.toLowerCase(); // Case-insensitive compare
}

function compare(word, guess) {
  let matches = 0;
  const wordLowerCase = word.toLowerCase();
  const guessLowerCase = guess.toLowerCase();
  const letterCount = {};

  for( let letter of wordLowerCase ) {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }

  for( let letter of guessLowerCase ) {
    if( letterCount[letter] ) {
      letterCount[letter] -= 1;
      matches += 1;
    }
  }

  return matches;
}

module.exports = {
  pickWord,
  takeTurn,
  isValidGuess
};
