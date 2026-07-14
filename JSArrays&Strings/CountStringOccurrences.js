function countStringOccurrences(text, wordToSearch) {
    let arr = text.split(' ').filter(word => word === wordToSearch)

    console.log(arr.length);
    
}

countStringOccurrences('This is a word and it also is a sentence', 'is')