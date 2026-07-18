function oddAndEvenSum(num) {

    let numAsString = num.toString()

    let oddSum = 0
    let evenSum = 0

    for(let index = 0; index < numAsString.length; index++){
        let currentDigit = Number(numAsString[index])
        
        if(currentDigit % 2 === 0){
            evenSum += currentDigit
        }else{
            oddSum += currentDigit
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

oddAndEvenSum(1000435)