/* exported loadWord, guess, copy */
/* global words */



        
var index = null;
var selectedWord = '';
var copy = words.slice();
var SplitRandomWord;

 
function loadWord() {
    index = getRandomIndex(words.length);
    console.log(index);

    selectedWord = words[index];
    console.log(selectedWord);

    SplitRandomWord = selectedWord.split('');
    console.log('letters:\n', SplitRandomWord);

    //new from Kayla
    document.getElementById('letters').value = '';

    letters = document.getElementById('letters');
    letters.innerHTML = ('<li>Selected word:</li>' + SplitRandomWord);

    var letter, i;
    for(i = 0; i < selectedWord.length; i++) {
        letter = '<li class="letter letter' + 
            selectedWord.charAt(i).toUpperCase() + '">' +
            selectedWord.charAt(i).toUpperCase() + '</li>';
    }
    return false;       
}

function getRandomIndex(max) { 
    return Math.floor(Math.random() * max);

}

var guessForm = document.getElementById ('guess-form');
var guessResult = document.getElementById ('guess-result');

function guess(){

    var letterTheyGuessed = guessForm.elements.guessLetter.value;
    console.log (letterTheyGuessed);

    var wordToGuess = selectedWord[i];
    var display = '';

    for(i = 0; i < selectedWord.length; i++){
        console.log('they selected word', selectedWord[i]);
    }

    if(wordToGuess) {
        display = wordToGuess(' ');
    } 
 
    document.getElementById('word-' + i).innerText = display;

    var letterSpots = [];
    for(i = 0; i < words.length; i++) {

        var spotOne = SplitRandomWord;
        var spotTwo = SplitRandomWord;
        var spotThree = SplitRandomWord;
        var spotFour = SplitRandomWord;

        var letterSpot = [spotOne, spotTwo, spotThree, spotFour];
        letterSpots.push(letterSpot);
    }

    for(var i = 0; i < words.length; i++) {

        if(letterTheyGuessed === 'cat') {
            guessResult.innerText = 'That\'s right! An ' + letterTheyGuessed;
            console.log ('this is what user guessed', letterTheyGuessed);
        }
        
    }
    return false;  
}
    
    
//     else {

//         totalGuesses = totalGuesses + 1;
//         console.log (totalGuesses);
//         guessResult.innerText = 'Whomp Whomp... a ' + letterTheyGuessed +
//         ' is not my favorite. You\'re closer though. You\'ve guessed ' +
//         totalGuesses + ' times try again!';