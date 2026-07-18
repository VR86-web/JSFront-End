function perfectNumber(num) {
    let sumNum = 0
    for(let number = 1; number < num/2 + 1; number++) {
        if(num % number === 0){
            sumNum += number
        }
    }

    if(sumNum === num){
            console.log(`We have a perfect number!`)
        }else{
            console.log(`It's not so perfect.`)
        }

}

perfectNumber(28)