/*global words*/
/* exported guess*/

var numberOfGuesses = 0;
var getArray = words.slice();
var selectedWord = '';
var lettersGuessed = [];
var correctLetters = [];
var guessedLetter = ''; 
var incorrectGuesses = 0;
var targetLettersArr = [];

function getUniqueChars(word) {
    var wordArr = word.split('');
    var uniqueLetters = [];
    wordArr.forEach(char => {
        if(uniqueLetters.indexOf(char) === -1) {
            uniqueLetters.push(char);
        }
    });
    return uniqueLetters.sort();
}

function loadWord() {
    var index = getRandomIndex(getArray.length);
    selectedWord = getArray[index];
    getArray.splice(index, 1);
    targetLettersArr = getUniqueChars(selectedWord);
    console.log('word', selectedWord);
    
    return selectedWord;
}
function showBlanks() {
    console.log('selected word letters:', selectedWord.length);
    for(var i = 0; i < selectedWord.length; i++) {
        document.getElementById('letter-' + i).innerText = '_';
    }
    for(var j = selectedWord.length; j < 9; j++) {
        document.getElementById('letter-' + j).innerText = '';
    }
}

function startNewGame() {
    numberOfGuesses = 0;
    getArray = words.slice();
    selectedWord = '';
    lettersGuessed = [];
    correctLetters = [];
    guessedLetter = ''; 
    incorrectGuesses = 0;
    targetLettersArr = [];
    document.getElementById('submit-button').disabled = false;
    document.getElementById('play-again').hidden = true;
    document.getElementById('number-of-guesses').innerText = numberOfGuesses;
    document.getElementById('guessed-letter').innerText = lettersGuessed;
    document.getElementById('letter-guess-field').value = null;
    var bodyParts = document.getElementsByClassName('body-part');
    for(var i = 0; i < bodyParts.length; i++){
        bodyParts[i].hidden = true;
    }
    loadWord();
    showBlanks();

}

function guess() {
    guessedLetter = document.querySelector('input').value;
    console.log('GUESSED LETTER: ', guessedLetter);
    
    if(!lettersGuessed.includes(guessedLetter)) {
    
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
            console.log('correct letters', correctLetters.sort());
            console.log('target letters', targetLettersArr);
            console.log('number of guesses', numberOfGuesses);
            //show the letter in guessed letters
            document.getElementById('number-of-guesses').innerText = numberOfGuesses;
            
            //check for win
            
            if(correctLetters.sort().join() === targetLettersArr.join()) {
                console.log('you won');
                alert('You Won!!');
                document.getElementById('submit-button').disabled = true;
                document.getElementById('play-again').hidden = false;
                
            }
            //correctLetters.join('');
            //console.log('spelling word: ', correctLetters.join(''));
            //alert for win
            
        }
        
        else {
            //count as guess
            numberOfGuesses++;
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
            if(incorrectGuesses === 6) {
                alert('ERROR Travis didn\'t get a match, Try Again?');
                document.getElementById('submit-button').disabled = true;
                document.getElementById('play-again').hidden = false;
            }
            //alert loss
        }
    }
    document.getElementById('letter-guess-field').value = null;
    document.getElementById('letter-guess-field').focus();
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
            document.getElementById('letter-' + i).innerText = guessedLetter;

        }        
    }
    return false;
}

startNewGame();

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}