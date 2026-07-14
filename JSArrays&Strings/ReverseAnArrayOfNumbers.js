function reverse(num,arr) {
    let numbers = arr.slice(0, num)
    let reverced_numbers = numbers.reverse()

    console.log(reverced_numbers.join(' '));
    
}

reverse(3, [10, 20, 30, 40, 50])