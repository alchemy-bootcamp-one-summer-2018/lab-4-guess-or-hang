var letterList = [];

function loadWord(words) {
    console.log('what words?', words);
    var randNum = getRanInteger(0, words.length);

    var word = words[randNum];

    var wordResult = document.getElementById('word-results');
    wordResult.innerText = word;

    function getRanInteger(min, max) {
        
        return Math.floor(Math.random() * (max - min)) + min;

    }

    return word;
}

function guess(words){
    //picked a word
    var word = loadWord(words); 
    console.log('random word:', word);

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
        console.log('letterList:', letterList)
    }

    return false; // doesnt clear
}

function checkLetter(character)
{
    var regex = /^[a-zA-Z]+$/;
    if(!character.match(regex))
    {
        console.log("Must input letters"); 
        // alert("Must input letters");

    }
}

function checkRepeat(guess){
    if(letterList.includes(guess)){
        console.log("You already guessed this letter!"); 
        // alert("You already guessed this letter!");
        return true;
    }
    else {
        return false;
    }
}