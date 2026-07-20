function storeProvision(currentStock, orderedProducts) {
    let store = {}

    for(let index = 0; index < currentStock.length; index += 2){
        let productName = currentStock[index]
        let productQuantity = Number(currentStock[index + 1]) 
        
        store[productName] = productQuantity
    }

    for(let index = 0; index < orderedProducts.length; index += 2){
        let productName = orderedProducts[index]
        let productQuantity = Number(orderedProducts[index + 1])
        
        if(productName in store){
            store[productName] += productQuantity
        }else{
            store[productName] = productQuantity
        }
        
    }

    let entries = Object.entries(store)

    for(let [name, quantity] of entries){
        console.log(`${name} -> ${quantity}`)
    }
    
}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas',
'14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7',
'Tomatoes', '70', 'Bananas', '30'
])