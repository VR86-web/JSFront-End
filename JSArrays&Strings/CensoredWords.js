function censoredWords(text, word) {

    let starTemplate = '*'.repeat(word.length)
    let replacedText = text.replaceAll(word, starTemplate)

    console.log(replacedText);
        
}

censoredWords('A small sentence with some words', 'small')