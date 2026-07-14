function printElement(arr, number) {
    let arr_length = arr.length
    let new_arr = []
    for (let index = 0; index < arr_length; index++) {
        if (index % number === 0) {
            new_arr.push(arr[index])
        }

    }

    return new_arr
}

printElement(['1', '2', '3', '4', '5'], 6)