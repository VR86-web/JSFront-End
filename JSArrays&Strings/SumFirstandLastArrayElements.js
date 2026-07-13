function numbers(input) {
    let first_num = input.pop()
    let last_num = input.shift()

    let result = first_num + last_num

    console.log(result);
    
    
}

numbers([10, 17, 22, 33])