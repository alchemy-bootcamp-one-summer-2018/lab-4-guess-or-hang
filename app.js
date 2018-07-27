/*global words*/
/* exported guess*/

var numberOfGuesses = 0;
var getArray = words.slice();
var selectedWord = '';
var lettersGuessed = [];
var correctLetters = [];
var guessedLetter = document.querySelector('input').value;
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
document.getElementById('number-of-guesses').innerText = numberOfGuesses;
//document.getElementById('body-').hidden = false;

function guess() {
    
    console.log('letter pressed:', guessedLetter);
    
    if(selectedWord.includes(guessedLetter)) {
        
        //show in correct blank space 
        //find matching index for correct letter guessed
        letterLocation();
        
        //put into array of correct guesses
        
        // count as a guess
        
        //show the letter in guessed letters
        document.getElementById('guessed-letter').innerText = lettersGuessed;
        
        //check for win
        //alert for win
    }
    
    else {
        //count as guess
        //show the letter in guessed letters
        //put into array of incorrect guesses (6)
        //reveal a body part
        //check for loss
        //alert loss
    }
    
}

function handleCorrectGuesses() {
    correctLetters.push(guessedLetter);
    numberOfGuesses ++; 
}

function letterLocation() {
    for(var i = 0; i < selectedWord.length; i++) {
                
        console.log('test-letter', selectedWord[0]);
                
        if(selectedWord[i] === guessedLetter) {
            document.getElementById('letter-' + i).innerText = guessedLetter;
        }        
    }
    return false;
}

function isPreviouslyGuessed() {
    if(lettersGuessed.includes(guessedLetter)) {
        alert('ERROR: Travis noticed you have already used ' + guessedLetter);
    }
   
    else {
        lettersGuessed.push(guessedLetter);
    }
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}