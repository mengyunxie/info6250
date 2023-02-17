
// const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
// const wordList = require('./words');

// const game = {
//   word: process.env.OVERRIDE || pickWord(wordList),
//   turns: 0
// };

// if(process.env.DEBUG) { console.log(`PSST!  The word is ${game.word}`); }

// console.log(`The word is ${game.word.length} letters`);
// prompt();

// function prompt() {
//   // readline.question('your guess? ', guess => takeTurn(game, guess) );
//   console.log("give a message in here")
// }

function start(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function takeTurn(game) {
  console.log("-- takeTurn -- ");
  game.currentGame.turns++;

  const filteredList = game.wordList.filter(function(value, index, arr){ 
      return value != game.currentGame.guessWord;
  });
  game.wordList = filteredList;
  if(exactMatch(game.currentGame.secretWord, game.currentGame.guessWord)) {
    // console.log(`CORRECT!  You won in ${turns} turns!`);
    // readline.close();
    game.currentGame.win = true;
    return;
  }
  game.currentGame.win = false;
  const match = compare(game.currentGame.secretWord, game.currentGame.guessWord);
  // if valid, append to guessed
  game.currentGame.recentGuess = {
    isValid: true,
    guess: game.currentGame.guessWord,
    match,
  }

  game.currentGame.previousGuesses[game.currentGame.guessWord] = match;
  game.currentGame.guessWord = "";
  // console.log(`You matched ${match} letters out of ${word.length}`);
  // prompt();
  // return game;
}

function isValidGuess(game) {

  return game.wordList.includes(game.currentGame.guessWord);
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
