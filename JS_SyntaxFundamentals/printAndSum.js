function printAndSum(start, end) {
    let sum = 0
    let allNumbersString = ''

    for(let currentNumber = start; currentNumber <= end; currentNumber ++) {
        sum += currentNumber
        allNumbersString += `${currentNumber} `
    }

    console.log(allNumbersString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10)