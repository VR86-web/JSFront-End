function palindromeIntegers(arr) {

    arr.forEach(element => {

        let original = element.toString();

        let reversed = original
            .split('')
            .reverse()
            .join('');

        console.log(original === reversed);

    });

}

palindromeIntegers([123, 323, 421, 121]);