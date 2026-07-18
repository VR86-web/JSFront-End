function matrix(n) {

    for (let row = 0; row < n; row++) {

        let line = "";

        for (let col = 0; col < n; col++) {
            line += n + " ";
        }

        console.log(line);
    }
}

matrix(3);