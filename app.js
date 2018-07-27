/*global words*/
/* exported guess*/
var numberOfGuesses = 0;
var getArray = words.slice();
var selectedWord = '';
//var wordToGuess = [];
var lettersGuessed = [];
//var span = document.getElementById('guessed-letter-one');
console.log('app.js is working');

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
    if(lettersGuessed.includes(guessedLetter)) {
        alert('ERROR: Travis noticed you have already used ' + guessedLetter);
    }
    else {
        lettersGuessed.push(guessedLetter);
        numberOfGuesses ++; 
        document.getElementById('number-of-guesses').innerText = numberOfGuesses;
    }
    console.log('letter guessed:', lettersGuessed);
    //for or while loop to get it to show all of the letters guessed?
    document.getElementById('guessed-letter').innerText = lettersGuessed;
    return false;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));