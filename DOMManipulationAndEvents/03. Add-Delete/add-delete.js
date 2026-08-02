function addItem() {
    let inputEl = document.getElementById('newItemText').value
    const ulItemsElement = document.getElementById('items')
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')

    liElement.textContent = inputEl
    aElement.href = '#'
    aElement.textContent = '[Delete]'
    liElement.appendChild(aElement)

    ulItemsElement.append(liElement)

    aElement.addEventListener('click', deleteAElement)

    function deleteAElement(e){
        e.preventDefault()
        e.target.parentElement.remove()
    }

}
