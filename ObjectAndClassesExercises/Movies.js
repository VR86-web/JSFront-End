function movies(arr) {

    let moviesList = [];

    arr.forEach(command => {

        if (command.includes('addMovie')) {

            let movieName = command.substring('addMovie '.length);

            moviesList.push({
                name: movieName
            });

        } else if (command.includes('directedBy')) {

            let [movieName, director] = command.split(' directedBy ');

            let movie = moviesList.find(m => m.name === movieName);

            if (movie) {
                movie.director = director;
            }

        } else if (command.includes('onDate')) {

            let [movieName, date] = command.split(' onDate ');

            let movie = moviesList.find(m => m.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }

    });

    moviesList.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);