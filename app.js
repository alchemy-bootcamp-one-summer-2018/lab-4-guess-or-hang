/*global words*/
/* exported guess*/
var guesses = 0;

function loadWord() {
    var pullWord = words.slice();

    guesses += 1;

    function getRandomWord (){
        var index = getRandomIndex(pullWord.length);
        var words = pullWord[index];
        pullWord.splice(index, 1);

        return words;
    }
}

function guess() {
    
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

console.log('random index', getRandomIndex(5));
console.log('app.js is called');