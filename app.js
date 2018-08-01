/* globals words */
/* exported loadWord */
/* exported guess */
/* exported reset */

var correctCounter = 0;
var word;
var letters;

var guessButton = document.getElementById('guess-button');
var startButton = document.getElementById('start-button');
var guessesNum = document.getElementById('guesses-left');
var guessesMade = document.getElementById('guesses-made');
var badGuesses = document.getElementById('wrong-list');
var gameWins = document.getElementById('wins');
var gameLosses = document.getElementById('losses');
var gallows1 = document.getElementById('gallows1');
var gallows2 = document.getElementById('gallows2');
var gallows3 = document.getElementById('gallows3');
var gallows4 = document.getElementById('gallows4');
var gallows5 = document.getElementById('gallows5');
var gallows6 = document.getElementById('gallows6');
var gallows7 = document.getElementById('gallows7');

var guessesLeft = 6;
var correctGuesses = 0;
var totalGuesses;
var totalWins = 0;
var totalLosses = 0;
var inputTried;
var lettersTried = [];

function loadWord(){

    function getWordIndex(max){
        return Math.floor(Math.random() * max);
    }

    var copy = words.slice();
    var index = getWordIndex(copy.length);
    word = copy[index];
    letters = word.split('');
    var html = '';
    console.log(letters);

    for(var i = 0; i < letters.length; i++){
        html += `<label id = ${i}> _ </label>`;
    }
    console.log(html);

    var displayWord = document.getElementById ('hidden-letters');
    displayWord.innerHTML = html;
    gallows1.innerText = '  +---+  ';
    gallows2.innerText = '  |   |  ';
    gallows3.innerText = '      |  ';
    gallows4.innerText = '      |  ';
    gallows5.innerText = '      |  ';
    gallows6.innerText = '      |  ';
    gallows7.innerText = '=========';
    startButton.disabled = true;

    return false;
}

function guess(){
    var userInput = document.getElementById('letter-guessed').value;
    console.log('The user entered: ' + userInput);
    var userMessage = document.getElementById('message');
    correctGuesses = false;

    function isLetter(str) {
        //Regular expression that tests the beginning, then the end of input for A-Z & a-z
        var testInput = /^[A-Za-z]+$/; //I might want to re-use this for other input later
        if(str.match(testInput)) {
            return true;
        }
        else {
            return false;
        }
    }

    if(isLetter(userInput) === false) {
        console.log('woof woof');
        userMessage.innerText = 'Hey! You need to enter a LETTER!';
        return false;
    }

    for(var k = 0; k < lettersTried.length; k++) {
        if(userInput === lettersTried[k]) {
            console.log('ding dong');
            userMessage.innerText = 'Hey! You already tried that! Pick another letter...';
            return false;
        }
    }

    for(var j = 0; j < letters.length; j++) {

        var displayCharacters = document.getElementById(j);
        if(userInput === letters[j]){
            correctCounter++;
            correctGuesses = true;
            displayCharacters.innerHTML = letters[j];
            userMessage.innerText = 'Good job! That letter was a match!';
            lettersTried.push(userInput);
            console.log('Number of letters in WORD correctly guessed: ' + correctCounter);
        }

    }

    if(correctCounter === letters.length){
        userMessage.innerText = 'Congratulations! You\'ve escaped the hangman\'s noose! Click the "Reset Game" button to play again.';
        guessButton.disabled = true;
        totalWins++;
        inputTried.clear();
        gameWins.innerText = `Wins: ${totalWins}`;
        console.log(correctCounter);//win condition
    }

    if(correctGuesses === false){
        console.log('User made an incorrect guess!');
        userMessage.innerText = 'Sorry, not a match!';
        badGuesses.innerText += ' ' + userInput;
        guessesLeft--;
        lettersTried.push(userInput);
        console.log(guessesLeft);

        switch(guessesLeft) {
            case 5:
                gallows1.innerText = '  +---+  ';
                gallows2.innerText = '  |   |  ';
                gallows3.innerText = '  o   |  ';
                gallows4.innerText = '      |  ';
                gallows5.innerText = '      |  ';
                gallows6.innerText = '      |  ';
                gallows7.innerText = '=========';
                break;
            case 4:
                gallows4.innerText = '  |   |  ';
                break;
            case 3:
                gallows4.innerText = ' /|   |  ';
                break;
            case 2:
                gallows4.innerText = ' /|\\  |  ';
                break;
            case 1:
                gallows5.innerText = ' /    |  ';
                break;
            case 0:
                gallows5.innerText = ' / \\  |  ';
                break;
        }

    }

    inputTried = new Set(lettersTried);
    console.log('This is the array of all letters tried so far... ' + [...inputTried]);
    totalGuesses = inputTried.size;
    guessesMade.innerText = totalGuesses;
    guessesNum.innerText = guessesLeft;

    if(guessesLeft === 0) {
        userMessage.innerText = 'You ran out of guesses... You are DEAD! You lose! Click the "Reset Game" button to play again.';
        guessButton.disabled = true;
        totalLosses++;
        inputTried.clear();
        gameLosses.innerText = `Losses: ${totalLosses}`;
    }

    return false;
}

function reset() {
    guessesLeft = 6;
    //correctGuesses = 0;
    //correctCounter = 0;
    //guessesMade.innerText = '';
    //guessesNum.innerText = '';
    //badGuesses.innerText = '';

    loadWord();
    guessButton.disabled = false;

    return false;
}
