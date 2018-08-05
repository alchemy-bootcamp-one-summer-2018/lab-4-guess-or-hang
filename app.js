/* exported loadWord, blankSpaces, letters */



/* global words */

let blankSpaces;
let answerArray = [];
let letterGuesses = 0;


let wordToGuess = words[Math.floor(Math.random() * words.length)]; 

let lettersInWord = wordToGuess.split('');

function loadWord(){
    for(let i = 0; i < wordToGuess.length; i++) {
        answerArray[i] = '_';
    }

    blankSpaces = answerArray.join (' ');
    document.getElementById('word-to-guess').interHTML = blankSpaces;

    console.log(answerArray);

    console.log(wordToGuess);


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
        letterGuesses++;
        document.getElementById('letter-guesses').innerHTML = 'Number of Letters guessed ' + letterGuesses;
        document.getElementById('word-to-guess').innerHTML = answerArray.join(' ');

        if(letterGuesses === lettersInWord.length) {
            document.getElementById('status-win').innerHTML = 'yay!';
        }
    
        if(letterGuesses > 7) {
            document.getElementById('status-lose').innerHTML = 'Oh No! You ran out of guesses'; 
        }
    }

   
}