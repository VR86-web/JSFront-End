function pascalCase(text) {
    let result = "";

    for (let index = 0; index < text.length; index++) {
        let letter = text[index];

        if (index > 0 && letter === letter.toUpperCase()) {
            result += ", ";
        }

        result += letter;
    }

    console.log(result);
}

pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");