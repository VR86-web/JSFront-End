function sortingNumbers(arr) {
    let sorted = arr.sort((a,b) => a - b)
    let sorted_length = sorted.length
    let new_arr = []

    for(let index = 0; index < sorted_length; index++) {
        if(index % 2 === 0){
            let num = sorted.shift()
            new_arr.push(num)
        }else{
            new_arr.push(sorted.pop())
        }
    }

    return new_arr
    
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])