var letterList = [];
var guessCount = 0;
var word = '';
var userWord = [];

function loadWord() {
    console.log('what words?', words);
    var randNum = getRanInteger(0, words.length);

    word = words[randNum];

    var wordResult = document.getElementById('word-results');
    wordResult.innerText = word;

    function getRanInteger(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log('random word:', word);
    wordBuild();   
    console.log('userWord:', userWord);
    return false;
}

function wordBuild(){
    // make a string with the same number of spaces as the word we need to guess
    for(var i = 0; i < word.length; i++){
        console.log('sloooooowwwwww');
        userWord.push('X');
    }
}


function guess(){

    console.log('word:', word);

    // takes in guess letter and stores it
    var form = document.getElementById('hangman'); 
    var elements = form.elements;
    var guess = elements.guessletter.value;
    console.log('guess:', guess);

    // make sure guess is a letter
    checkLetter(guess);

    // check guess is a repeat (true or false)
    var repeat = checkRepeat(guess);
    console.log('repeat:', repeat);

    // if not a repeat, add to letterList
    if(repeat === false){
        letterList.push(guess);
        console.log('letterList:', letterList);
    }

    // incrementing guess count
    guessCount = guessCount + 1;
    console.log('guessCount is:', guessCount);

    // clearing guess box after each guess
    document.getElementById('guessletter').value = '';

    //split word into letters
    var wordLetters = word.split('');
    console.log('split word into letters:', wordLetters);

    //if word includes letter, reveal letter in word
    for(var i = 0; i < word.length; i++){
        if(guess === wordLetters[i]){
            userWord[i] = guess;
        }
    }
    console.log('userWordprogress', userWord, guess);
    console.log('make list a word', userWord.join(''));

    // check to see if we have won
    if(userWord.join('') === word) {
        console.log('you won!');
        alert('You got it!');
    }

    return false; // doesnt clear
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