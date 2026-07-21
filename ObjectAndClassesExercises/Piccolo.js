function piccolo(arr) {
    let carArr = new Map()

    arr.forEach(element => {
        let [direction, carNumber] = element.split(', ')
        if(direction === 'IN'){
            carArr.set(carNumber)
        }else if(direction === 'OUT'){
            if(carArr.has(carNumber)){
                carArr.delete(carNumber)
            }
        }
        
    });

    let sorted = Array.from(carArr).sort((a,b) => a[0].localeCompare(b[0]))

    if(sorted.length > 0){
        for(let car of sorted){
            console.log(car[0])
        }
    }else{
        console.log(`Parking Lot is Empty`)
    }
    
    

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])