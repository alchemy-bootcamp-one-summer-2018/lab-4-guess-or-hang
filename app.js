/* exported getRandomWord */
/* global words */


// these are our global words that we can use anywhere we need them. You want
// to make sure that global elements are null or blank so that they can have different 
// values. 

var index = null;
var selectedWord = '';

//Choosing a random word. line 13 is creating a variable that is taking the function getRandomIndex and are 
// array of words line 17 we created a  
function getRandomWord() {
    var index = getRandomIndex(words.length);
    console.log(index);

    var selectedWord = words[index];
    console.log(selectedWord);
    
    for(var i = 0; i < 4; i++) {
        var showRandomWord = getRandomWord[i];
        var display = '';
    
        if(showRandomWord) {
            display = showRandomWord(' - ');
        } 

        document.getElementById('word-' + i).innerText = display;}

    
    return false;

}

// This  picks a random word from the array. Math.floor(Math.random) created 
//random picking 

function getRandomIndex(max) {
   
    return Math.floor(Math.random() * max);
}

//This shows the the random word





//Loop: an empty array called answerArray and fill it with
//underscores (_) to match the number of letters in the word.