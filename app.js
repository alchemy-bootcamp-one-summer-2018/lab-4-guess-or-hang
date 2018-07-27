/* exported getRandomWord */
/* global words */

var index = null

function getRandomWord() {
    var index = getRandomIndex(words.length);
    console.log(index);

    var selectedWord = words[index];
    console.log(selectedWord);

    console.log(words);
    return false;
}

function getRandomIndex(max){

    return Math.floor(Math.random() * max);

}
