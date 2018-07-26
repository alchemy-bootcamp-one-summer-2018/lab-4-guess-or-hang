/*global words*/
/* exported guess*/
var guesses = 0;
var getArray = words.slice();
var word = '';

function loadWord() {
    var index = getRandomIndex(getArray.length);
    word = getArray[index];
    getArray.splice(index, 1);
    console.log('word', word);
        
    return word;
}

loadWord();
function guess() {
    
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));
console.log('app.js is called');