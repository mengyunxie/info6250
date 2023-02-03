"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
  
  const wordUpperCase = word.toUpperCase();
  const guessUpperCase = guess.toUpperCase();
  
  /* Initializes two arrays to store letter frequencies */
  const wordLetterCounts = [], guessLetterCounts = [];
  for(let i = 0; i < 26; i++) {
    wordLetterCounts[i] = 0;
    guessLetterCounts[i] = 0;
  }

  /* Count letter frequencies */
  const charCodeOfLetterA = 65;
  for(let i = 0; i < wordUpperCase.length; i++) {
    wordLetterCounts[wordUpperCase.charCodeAt(i) - charCodeOfLetterA]++;
  }
  for(let i = 0; i < guessUpperCase.length; i++) {
    guessLetterCounts[guessUpperCase.charCodeAt(i) - charCodeOfLetterA]++;
  }

  /* Count the number of letters in common */
  let commonCount = 0;
  for(let i = 0; i < 26; i++) {
    commonCount += Math.min(wordLetterCounts[i], guessLetterCounts[i]);
  }

  return commonCount;
}
