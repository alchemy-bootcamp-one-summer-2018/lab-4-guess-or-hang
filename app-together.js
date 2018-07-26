

function loadWord(words) {
    console.log('what words?', words);
    var randNum = getRanInteger(0, words.length);

    var word = words[randNum];
    console.log('random word:', word);

    var wordResult = document.getElementById('word-results');
    wordResult.innerText = word;

    function getRanInteger(min, max) {
        
        return Math.floor(Math.random() * (max - min)) + min;

    }

    return false;
}