function inventory(arr) {

    let heroesArr = [];

    arr.forEach(heroInfo => {

        let [heroName, heroLevel, items] = heroInfo.split(' / ');

        heroesArr.push({
            hero: heroName,
            level: Number(heroLevel),
            items: items
        });

    });

    let orderedHeroesArr = heroesArr.sort((a, b) => a.level - b.level)

    orderedHeroesArr.forEach(element => {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`)
        console.log(`items => ${element.items}`)
    });

    

}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])