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
    //document.querySelector.form.elements;
    //console.log('letter pressed:', document.querySelector('form').elements);
    console.log('letter pressed:', document.querySelector('input').value);

    return false;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));
console.log('app.js is called');