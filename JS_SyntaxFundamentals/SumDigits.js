function sumDigits(number){
    let digitsSum = 0
    let numberAsString = number.toString()
    const stringLength = numberAsString.length

    for(let index = 0; index < stringLength; index++){
        let currentSymbol = numberAsString[index]
        digitsSum += Number(currentSymbol)
        
    }
    console.log(digitsSum);
    
}

sumDigits(245678)