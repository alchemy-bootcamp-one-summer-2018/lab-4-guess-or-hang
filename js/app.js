/* exported loadWord, guess */
/* globals word */

function loadWord(event, words) {
    //event.preventDefault();

    console.log('length of word list', words.length);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;}

    var word = words[getRndInteger(0, words.length)];
    console.log('random word', word);
    return word;
}

function guess(event, words){
    console.log('guess running');
    //event.preventDefault();

    word = loadWord(event, words);
    var wordResult = document.getElementById('word-results');
    wordResult.innerText = word;

    var list_of_letters = [];

    var i = 0;
    var correct = 0;
    while(i < word.length){
        var form = document.getElementById('hangman');
        var elements = form.elements;
        var guess1 = elements.guessletter.value;
        console.log('guess', guess1);
        i++;

        checkInp(guess1);
        var repeat = checkRepeat(guess1, list_of_letters);
        list_of_letters.push(guess1);
        if(repeat === false){
            list_of_letters.push(guess1);
            if(word.split('').includes(guess1))
            {
                console.log('Correct!');
                correct = correct + 1; //   alert("Correct!");
            }
            else {
                console.log('False!'); //  alert("False!");
            }
        }
        

        console.log('list', i, list_of_letters);
    }
}

function checkInp(x)
{
    var regex = /^[a-zA-Z]+$/;
    if(!x.match(regex))
    {
        console.log("Must input letters"); // alert("Must input letters");
    }
}

function checkRepeat(letter, list_of_letters)
{
    if(list_of_letters.includes(letter))
    {
        console.log("You already guessed this one");
        // alert("You already guessed this one");
        return true;
    }
    else {
        return false;
    }
}