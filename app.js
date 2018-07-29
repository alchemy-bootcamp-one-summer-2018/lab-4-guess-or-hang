/* exported loadWord, guess, copy */
/* global words */


var index = null;
var selectedWord = '';
var copy = words.slice();
var SplitRandomWord;

//choose random word
function loadWord() {
    index = getRandomIndex(words.length);
    console.log(index);

    selectedWord = words[index];
    console.log(selectedWord);

    SplitRandomWord = selectedWord.split('');
    console.log('letters:\n', SplitRandomWord);

    function blankSpaces() {

        for(var i = 0; i < selectedWord.length; i++) {
            document.getElementById('word-' + i).innerText = '_';
        }

        return false;       
    }

    function getRandomIndex(max) { 
        return Math.floor(Math.random() * max);
    }

    var guessForm = document.getElementById ('guess-form');
    var guessResult = document.getElementById ('guess-result');

    // letter they guess
    function guess(){

        var letterTheyGuessed = guessForm.elements.guessLetter.value;
        console.log (letterTheyGuessed);

        var wordToGuess = selectedWord[i];
        var display = '';

        for(i = 0; i < selectedWord.length; i++){
            console.log('they chose word', selectedWord[i]);
        }

        if(wordToGuess) {
            display = wordToGuess(' ');
        } 
 
    
    // blank letter spots 
    var letterSpots = [];
    for(i = 0; i < words.length; i++) {

        var spotOne = SplitRandomWord;
        var spotTwo = SplitRandomWord;
        var spotThree = SplitRandomWord;
        var spotFour = SplitRandomWord;

        var letterSpot = [spotOne, spotTwo, spotThree, spotFour];
        letterSpots.push(letterSpot);
     
    }

    return false;    
}
   

    
    
//     else {

//         totalGuesses = totalGuesses + 1;
//         console.log (totalGuesses);
//         guessResult.innerText = 'Whomp Whomp... a ' + letterTheyGuessed +
//         ' is not my favorite. You\'re closer though. You\'ve guessed ' +
//         totalGuesses + ' times try again!';