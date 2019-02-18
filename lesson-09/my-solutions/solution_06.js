function countWords(inputWords) {
    return inputWords.reduce((words, inWord) => {
        if (inWord in words)
            ++ words[inWord] ;
        else words[inWord] = 1;
            return words;
        }, {} );
}

module.exports = countWords;

