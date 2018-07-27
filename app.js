/*global words*/
/* exported guess*/

var numberOfGuesses = 0;
var getArray = words.slice();
var selectedWord = '';
var lettersGuessed = [];
var correctGuesses = [];
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
        document.getElementById('letter-' + i).innerText = '_';
    }
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
        document.getElementById('body-').hidden = false;
    }
    
    console.log('letter guessed:', lettersGuessed);
    document.getElementById('guessed-letter').innerText = lettersGuessed;

    for(var i = 0; i < selectedWord.length; i++) {

        console.log('test-letter', selectedWord[0]);

        if(selectedWord[i] === guessedLetter) {
            document.getElementById('letter-' + i).innerText = guessedLetter;
        }        
    }
    return false;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));