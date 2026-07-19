function manageSong(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];

    let songCount = arr.shift();

    let searchedListType = arr.pop();

    for (let currentSong = 1; currentSong <= songCount; currentSong++) {

        let songStr = arr.shift();
        let [listType, songName, time] = songStr.split('_');

        let songObj = new Song(listType, songName, time);

        songsArr.push(songObj);
    }

    if (searchedListType === 'all') {

        for (let songObject of songsArr) {
            console.log(songObject.name);
        }

    } else {

        let filteredSongs = songsArr.filter(song => song.typeList === searchedListType);

        for (let singleSong of filteredSongs) {
            console.log(singleSong.name);
        }

    }

}

manageSong([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);