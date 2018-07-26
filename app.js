/*global words*/
/* exported guess*/
var guesses = 0;
var getArray = words.slice();
var selectedWord = '';
var wordToGuess = [];

function loadWord() {
    var index = getRandomIndex(getArray.length);
    selectedWord = getArray[index];
    getArray.splice(index, 1);
    console.log('word', selectedWord);
        
    return selectedWord;
}
function showBlanks() {
    for(var i = 0; i < selectedWord.length; i++) {
        console.log('selected word letters:', selectedWord.length);
        //var lettersToDisplay = wordToGuess[i];
        //var display = selectedWord;
        document.getElementById('letter-' + i).innerText = '_';
    }
}
loadWord();
showBlanks();
function guess() {
    
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));
console.log('app.js is called');