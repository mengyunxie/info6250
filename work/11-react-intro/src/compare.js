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
export default compare;