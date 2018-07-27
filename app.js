/*global words*/
/* exported guess*/
var guesses = 0;
var getArray = words.slice();
var selectedWord = '';
var wordToGuess = [];
var lettersGuessed = [];
//var span = document.getElementById('guessed-letter-one');

function loadWord() {
    var index = getRandomIndex(getArray.length);
    selectedWord = getArray[index];
    getArray.splice(index, 1);
    console.log('word', selectedWord);
    
    return selectedWord;
}
function showBlanks() {
    console.log('selected word letters:', selectedWord.length);
    for(var i = 0; i < selectedWord.length; i++) {
        //var lettersToDisplay = wordToGuess[i];
        //var display = selectedWord;
        document.getElementById('letter-' + i).innerText = '_';
    }
    //return false;
}
loadWord();
showBlanks();
function guess() {
    var guessedLetter = document.querySelector('input').value;
    console.log('letter pressed:', guessedLetter);
    lettersGuessed.push(guessedLetter);
    console.log('letter guessed:', lettersGuessed);
    //for or while loop to get it to show all of the letters guessed?
    document.getElementById('guessed-letter').innerText = lettersGuessed;
    return false;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));
console.log('app.js is called');