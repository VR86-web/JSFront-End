function addressBook(arr) {
    let addresses = {}

    for(let address of arr){
        let [name, location] = address.split(':')
        addresses[name] = location
    }

    let entries = Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0]))

    for(let [name, location] of entries){
        console.log(`${name} -> ${location}`)
    }
    
}

addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing', 'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])