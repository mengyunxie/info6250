"use strict";

function pickWord(wordList) {
  // Pick a random word from the list of available words
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function takeTurn(user) {
  // This is a valid guess, turns increases one
  user.turns++;

  // Remove the current guess from the list of possible words
  user.wordList = user.wordList.filter(function(value){ 
    return value.toLowerCase() != user.guessWord.toLowerCase();
  });

  // If it is a correct guess, update the user's data
  if(exactMatch(user.secretWord, user.guessWord)) {
    // If win is true, the user can't continue to guess in this same game
    user.win = true;
    user.recentGuess = {
      isValid: true,
      guess: user.guessWord,
      match: user.guessWord.length
    }
    user.previousGuesses[user.guessWord] = user.guessWord.length;

    // Update the statistics
    const { turns, numberOfGames, numberOfWinGames, bestScoreOfWinGames} = user;
    user.numberOfGames = numberOfGames + 1;
    user.numberOfWinGames =  numberOfWinGames + 1;

    // If it's the first time, the best score is the current turns
    user.bestScoreOfWinGames = bestScoreOfWinGames == 0 ? turns : Math.min(turns, bestScoreOfWinGames);
    return;
  }

  // If it is a incorrect guess, find the match letters and update the user's data
  user.win = false;
  const match = compare(user.secretWord, user.guessWord);
  user.recentGuess = {
    isValid: true,
    guess: user.guessWord,
    match
  }
  user.previousGuesses[user.guessWord] = match;

  // After this turn, reset the guess to empty
  user.guessWord = "";
}

function isValidGuess(user) {
  // Return true, if the current list of possible words contains the guess
  return user.wordList.filter((word) => word.toLowerCase()).includes(user.guessWord.toLowerCase())
}

function exactMatch(word, guess) {
  return word.toLowerCase() === guess.toLowerCase(); // Case-insensitive compare
}

function compare( word, guess ) {
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
