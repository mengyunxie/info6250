"use strict";

function start(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function takeTurn(game) {
  console.log("-- takeTurn -- ");
  game.turns++;

  const filteredList = game.wordList.filter(function(value, index, arr){ 
      return value != game.guessWord;
  });
  game.wordList = filteredList;
  if(exactMatch(game.secretWord, game.guessWord)) {
    // console.log(`CORRECT!  You won in ${turns} turns!`);
    // readline.close();
    game.win = true;
    const { turns, numberOfGames, numberOfWinGames, bestScoreOfWinGames} = game;
    game.numberOfGames = numberOfGames + 1;
    game.numberOfWinGames =  numberOfWinGames + 1;
    game.bestScoreOfWinGames = bestScoreOfWinGames == 0 ? turns : Math.min(turns, bestScoreOfWinGames);
    return;
  }
  game.win = false;
  const match = compare(game.secretWord, game.guessWord);
  // if valid, append to guessed
  game.recentGuess = {
    isValid: true,
    guess: game.guessWord,
    match,
  }

  game.previousGuesses[game.guessWord] = match;
  game.guessWord = "";
  // console.log(`You matched ${match} letters out of ${word.length}`);
  // prompt();
  // return game;
}

function isValidGuess(game) {

  return game.wordList.includes(game.guessWord);
}

function exactMatch(word, guess) {
  return word.toUpperCase() === guess.toUpperCase(); // Case-insensitive compare
}

function compare( word, guess ) {
  let matches = 0;
  const wordUpperCase = word.toLowerCase();
  const guessUpperCase = guess.toLowerCase();
  const letterCount = {};

  for( let letter of wordUpperCase ) {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }
  for( let letter of guessUpperCase ) {
    if( letterCount[letter] ) {
      letterCount[letter] -= 1;
      matches += 1;
    }
  }

  return matches;
}

module.exports = {
  start,
  takeTurn,
  isValidGuess
};
