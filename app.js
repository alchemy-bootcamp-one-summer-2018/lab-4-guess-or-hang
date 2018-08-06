/* exported loadWord, blankSpaces, letters */

/* global words */

let blankSpaces;
let answerArray = [];
let letterGuesses = 0;
// let wrong = ['wrong_1','wrong_2', 'wrong_3', 'wrong'];
// let gallows = [];

window.onload = function() {
    loadWord();
};

let wordToGuess = words[Math.floor(Math.random() * words.length)]; 
console.log(wordToGuess);

let lettersInWord = wordToGuess.split('');


function loadWord(){
    for(let i = 0; i < wordToGuess.length; i++) {
        answerArray[i] = '_';
    }

    blankSpaces = answerArray.join (' ');
    document.getElementById('word-to-guess').interHTML = blankSpaces;
}

function letters(){
    let letter = document.getElementById('letter').value;

    //Number of guesses
    if(letter.length > 0){
        for(let i = 0; i < wordToGuess.length; i++) {
            if(wordToGuess[i] === letter) {
                answerArray[i] = letter;
            }
        }

        if(letterGuesses === lettersInWord.length) {
            document.getElementById('status-win').innerHTML = 'yay! You won!';
        }

        letterGuesses++;
        document.getElementById('letter-guesses').innerHTML = 'You have already guessed ' + letterGuesses + ' times';
        document.getElementById('word-to-guess').innerHTML = answerArray.join(' ');

        if(letterGuesses > 5) {
            document.getElementById('status-lose').innerHTML = 'Oh No! You ran out of guesses'; 
        }

        

       
    }}