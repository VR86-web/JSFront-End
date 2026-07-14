function arrayRotation(arr, rotations) {
    for (let iteration = 0; iteration < rotations; iteration++) {
        let first_num = arr.shift()
        arr.push(first_num)
    }
    console.log(arr.join(' '));
    
}

arrayRotation([2, 4, 15, 31], 5)