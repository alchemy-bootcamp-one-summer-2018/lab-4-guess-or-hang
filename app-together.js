/* exported loadWord, guess, resetGame */

var word = ''; // this will be the answer word
var userWord = []; // this will be the partial answer word
var letterList = []; // this will be the list of letters guessed
var wrongGuess = 0; // number of wrong guess
var bodyParts = ['head', 'body', 'left arm', 'right arm', 'left leg', 'right leg'];
var gallows = [];

function loadWord(words) {
    // choose random word
    console.log('what words?', words);
    var randNum = getRandInteger(0, words.length);
    word = words[randNum];
    console.log('random word:', word);
    //insert random word but keep it hidden
    var wordResult = document.getElementById('word-results');
    wordResult.innerText = word;
    //make blank string with same length as word
    wordBuild();
    console.log('userWord:', userWord);

    //dispay blanks
    var guessResult = document.getElementById('guess-results');
    guessResult.innerText = userWord.join('');

    return false;
}

function guess(){
    // takes in guess letter and stores it
    var submit = document.getElementById('guess-submit');
    var form = document.getElementById('playgame');
    var elements = form.elements;
    var guess = elements.guessletter.value;
    console.log('guess:', guess);

    // make sure guess is a letter
    checkLetter(guess);

    // check guess is a repeat (true or false)
    var repeat = checkRepeat(guess);

    // if not a repeat, add to letterList
    if(repeat === false){
        letterList.push(guess);
        console.log('letterList:', letterList);
    }
    // clear guess box after each guess
    document.getElementById('guessletter').value = '';

    //split word into letters
    var wordLetters = word.split('');
    if(wordLetters.includes(guess)){
        //if word includes letter, reveal letter in word
        for(var i = 0; i < word.length; i++){
            if(guess === wordLetters[i]){
                userWord[i] = guess;
            }
        }

        var guessResult = document.getElementById('guess-results');
        guessResult.innerText = userWord.join('');
        console.log('userWord:', userWord);


        // check to see if we have won
        if(userWord.join('') === word) {
            console.log('You won!');

            setTimeout(function() {
                alert('You won!');}, 100);
            submit.disabled = true;
        }
    }
    else {
        // add body parts
        gallows.push(bodyParts[wrongGuess]);
        var bodyPartsDisplay = document.getElementById('body-parts');
        bodyPartsDisplay.innerText = gallows.join(' ');
        console.log('gallows:', gallows);
        // increment guess count
        wrongGuess = wrongGuess + 1;
        console.log('wrongGuess is:', wrongGuess);
        // check to see if lost game
        if(wrongGuess === bodyParts.length){
            console.log('you lose!');
            setTimeout(function() {
                alert('You loose!');}, 100);
            submit.disabled = true;
        }
    }
    return false; // make sure screen doesn't clear
}

function getRandInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

function wordBuild(){
    // make a string with the same number of spaces as the word we need to guess
    for(var i = 0; i < word.length; i++){
        userWord.push('_ ');
    }
}

function checkLetter(character)
{
    var regex = /^[a-zA-Z]+$/;
    if(!character.match(regex))
    {
        console.log('Must input letters');
        // alert("Must input letters");
    }
}

function checkRepeat(guess){
    if(letterList.includes(guess)){
        console.log('You already guessed this letter!');
        // alert("You already guessed this letter!");
        return true;
    }
    else {
        return false;
    }
}

function resetGame() {
    word = '';
    userWord = [];
    letterList = [];
    wrongGuess = 0;
    gallows = [];
    var submit = document.getElementById('guess-submit');
    submit.disabled = false;
}