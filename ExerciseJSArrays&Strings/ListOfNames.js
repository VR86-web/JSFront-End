function listOfNames(arr) {
    arr.sort((a,b) => a.localeCompare(b))
    let arr_length = arr.length
    for(let num = 0; num < arr_length; num++) {
        console.log(`${num + 1}.${arr[num]}`);
        
    }
    
}

listOfNames(["John", "Bob", "Christina", "Ema"])