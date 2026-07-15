function stringSubstring(substring, string) {
    let string_arr = string.toLowerCase().split(' ')

    if (string_arr.includes(substring.toLowerCase())) {
        console.log(substring);

    } else {
        console.log(`${substring} not found!`)
    }

}
stringSubstring('javaScript', 'JavaScript is the best programming language')