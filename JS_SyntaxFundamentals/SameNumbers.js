function sameNumbers(number) {
    let numberToString = number.toString()
    let sumNumbers = 0
    let isAllSame = true
    const numberToStringLength = numberToString.length
    const firstDigit = numberToString[0]

    for(let current_index = 0; current_index < numberToStringLength; current_index++) {
        let currentSymbolAsNumber = Number(numberToString[current_index])
        sumNumbers += currentSymbolAsNumber

        if (numberToString[current_index] !== firstDigit) {
            isAllSame = false
            }
    }

    console.log(isAllSame);
    console.log(sumNumbers)
            
}

sameNumbers(22222)

