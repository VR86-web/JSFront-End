function charactersInRange(char1, char2) {
    const charCode1 = char1.charCodeAt(0)
    const charCode2 = char2.charCodeAt(0)

    let start 
    let end

    if(charCode1 < charCode2) {
        start = charCode1
        end = charCode2
    }else{
        start = charCode2
        end = charCode1
    }

    let result = ''

    for(let code = start + 1; code < end; code++){
        result += String.fromCharCode(code) + ' '
    }

    console.log(result);
    
}

charactersInRange('C', '#')