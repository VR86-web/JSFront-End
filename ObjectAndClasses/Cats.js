function cats(arr) {
    class Cat{
        constructor(catName, catAge){
            this.catName = catName
            this.catAge = catAge
        }

        meow(){
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
            
        }

    }

    for(let catStr of arr){
        let [name, age] = catStr.split(' ')
        let catObj = new Cat(name, age)
        catObj.meow()
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])