/* exported getRandomWord, guess */
/* global words */



// these are our global words that we can use anywhere we need them. You want
// to make sure that global elements are null or blank so that they can have different 
// values. 

var index = null;
var selectedWord = '';



//Choosing a random word. line 13 is creating a variable that is taking the function getRandomIndex and are 
// array of words line 17 we created a  
function getRandomWord() {
    index = getRandomIndex(words.length);
    console.log(index);

    selectedWord = words[index];
    console.log(selectedWord);
    
    for(var i = 0; i < 5; i++) {
        var wordToGuess = getRandomWord[i];
        var display = '';
    
        if(wordToGuess) {
            display = wordToGuess(' - ');
        } 
        document.getElementById('word-' + i).innerText = display;}

    var word = getRandomWord();
    for(i = 0; i < word.length; i++){
        console.log(word[i]);
    }
    var letter = words.split('');
    console.log('letters:\n', letter);
    return false;
        
}
// This  picks a random word from the array. Math.floor(Math.random) created 
//random picking 

function getRandomIndex(max) {
   
    return Math.floor(Math.random() * max);
}

//This is the guess form function

var guessForm = document.getElementById ('guess-form');
var guessResult = document.getElementById ('guess-result');
// var totalGuesses = 0;

function guess(){

    var letterTheyGuessed = guessForm.elements.guessLetter.value;
    console.log (letterTheyGuessed);

    if(letterTheyGuessed === 'cat') {
        guessResult.innerText = 'That\'s right! An ' + letterTheyGuessed;
        console.log ('this is what user guessed', letterTheyGuessed);
    }
    
    
    return false;

}








//     else {

//         totalGuesses = totalGuesses + 1;
//         console.log (totalGuesses);
//         guessResult.innerText = 'Whomp Whomp... a ' + letterTheyGuessed +
//         ' is not my favorite. You\'re closer though. You\'ve guessed ' +
//         totalGuesses + ' times try again!';
//     }
// }




//Loop: an empty array called answerArray and fill it with
//underscores (_) to match the number of letters in the word.