function addItem() {
    let inputEl = document.getElementById('newItemText').value
    const ulItemsElement = document.getElementById('items')
    const liElement = document.createElement('li')

    liElement.textContent = inputEl

    ulItemsElement.append(liElement)

}
