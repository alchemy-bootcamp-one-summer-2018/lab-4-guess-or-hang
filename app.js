/* exported loadWord */


let answerArray = [];

let letterGuesses = 0;

let blankSpaces;

var words = ['cats', 'duck', 'hats', 'bird', 'love'];

//randomizing a word through the length of the list of words
let wordToGuess = words[Math.floor(Math.random() * words.length)]; 
//loading the wordToGuess with underscores

function loadWord(){
    for(let i = 0; i < wordToGuess.length; i++) {
        answerArray[i] = '_';
    }

    // take the answerArray of the wordToGuess 
    //and create a string of letters 

    //joining the answerArray of the WordToGuess and displaying 
    //in the HTML where the id word-to-guess is
    blankSpaces = answerArray.join (' ');
    document.getElementById('word-to-guess').interHTML = letter;
}

function letter(){
    let letter = document.getElementById('letter').value;

    if(letter.length > 0){
        for(let i = 0; i < wordToGuess.length; i++) {
            if(wordToGuess[i] === letter) {
                answerArray[i] = letter;
            }
        }
        document.getElementById('word-to-guess').innerHTML = answerArray.join(' ');
    }
    if(letterGuesses > 5) {
        document.getElementById('stat').innerHTML = ' WRONG';
    }
}
    

//Show Random word



// var progressWord = [];
// for(var i = 0; i < selectedWord.length; i ++)
//     progressWord.push('-');
// console.log ('progress word', progressWord);


// if(selectedWord.index(words) !== -1){ 
//      for(var j = 0; i < selectedWord; i ++){ 
// //         if(selectedWord[i] === words) 
// //             progressWord[i] = selectedWord[j];
//     }
// } 
// else {
//     if(progressWord.indexOf('-') === -1){ // if there are no dashes left
//         //win!
//     } else if(guessesLeft <= 0){
//         //player has lost
//     }
//     progressWord.join(' '); }