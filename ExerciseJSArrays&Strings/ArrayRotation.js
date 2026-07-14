function arrayRotation(arr, rotations) {
    for (let iteration = 0; iteration < rotations; iteration++) {
        let poped_num = arr.shift()
        arr.push(poped_num)
    }
    console.log(arr.join(' '));
    
}

arrayRotation([2, 4, 15, 31], 5)