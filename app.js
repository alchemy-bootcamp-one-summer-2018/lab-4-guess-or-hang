/*global words*/
/* exported guess*/

var numberOfGuesses = 0;
var getArray = words.slice();
var selectedWord = '';
var checkCorrect = [];
var lettersGuessed = [];
var correctLetters = [];
var guessedLetter = ''; 
var incorrectGuesses = 0;


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
        //correctLetters.join(checkCorrect);
        //console.log('spelling-word', correctLetters.join(checkCorrect));
    }
}
loadWord();
showBlanks();

function guess() {
    guessedLetter = document.querySelector('input').value;
    console.log('GUESSED LETTER: ', guessedLetter);
    
    if(selectedWord.includes(guessedLetter)) {
        
        lettersGuessed.push(guessedLetter);
        document.getElementById('guessed-letter').innerText = lettersGuessed;
        console.log('letter pressed:', guessedLetter);
        
        console.log('reached correct guess');
        //show in correct blank space 
        //find matching index for correct letter guessed
        letterLocation();
        
        // count as a guess
        handleCorrectGuesses();
        console.log('correct letters', correctLetters);
        console.log('number of guesses', numberOfGuesses);
        //show the letter in guessed letters
        document.getElementById('number-of-guesses').innerText = numberOfGuesses;
        
        //check for win
        correctLetters.join('');
        console.log('spelling word: ', correctLetters.join(''));
        //alert for win
    }
    
    else {
        //count as guess
        document.getElementById('number-of-guesses').innerText = numberOfGuesses;
        //show the letter in guessed letters
        lettersGuessed.push(guessedLetter); 
        document.getElementById('guessed-letter').innerText = lettersGuessed;
        //put into array of incorrect guesses (6)
        incorrectGuesses++;
        console.log('incorrect guesses:', incorrectGuesses);
        //reveal a body part
        document.getElementById('body-' + incorrectGuesses).hidden = false;
        //check for loss
        //alert loss
    }
    return false;
}

function handleCorrectGuesses() {
    correctLetters.push(guessedLetter);
    numberOfGuesses ++; 
}

function letterLocation() {
    for(var i = 0; i < selectedWord.length; i++) {
                
        console.log('test-letter', selectedWord[0]);
                
        if(selectedWord[i] === guessedLetter) {
            lettersGuessed.push(guessedLetter);
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