function modernTimes(sentence) {
    let specialWords = []
    let sentence_arr = sentence.split(' ')

    for(let word of sentence_arr) {
        if(word.startsWith('#') && word.length > 1) {
            let asciiCode = word.charCodeAt(1)
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if(isLetter) {
                console.log(word.substring(1));
                
            }
        }
    }
    
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')