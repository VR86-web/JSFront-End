function phoneBook(arr) {
    let contacts = {}

    for(let contact of arr){
        let [name, phoneNum] = contact.split(' ')
        contacts[name] = phoneNum
    }

    let entries = Object.entries(contacts)

    for(let [name, phoneNum] of entries){
        console.log(`${name} -> ${phoneNum}`)
    }
    
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])