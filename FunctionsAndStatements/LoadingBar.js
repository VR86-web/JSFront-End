function loadingBar(num) {
    let barsNumber = num / 10
    let barsNumberPercent = '%'.repeat(barsNumber)
    let dotsNumber = 10 - barsNumber
    let dotsNumberDots = '.'.repeat(dotsNumber)

    if(num < 100){
        console.log(`${num}% [${barsNumberPercent}${dotsNumberDots}]`);
        console.log(`Still loading...`)
    }else{
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    }
    
}

loadingBar(100)