function city(cityInfo) {

    let entries = Object.entries(cityInfo)

    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

city({name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000"})