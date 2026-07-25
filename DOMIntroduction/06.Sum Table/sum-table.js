function sumTable() {
    const priceTdElements = document.querySelectorAll('tbody tr td:nth-child(2)')
    
    let priceIdElementsArr = Array.from(priceTdElements)
    let sumElement = priceIdElementsArr.pop()

    let sum = 0

    for (let tdEl of priceIdElementsArr){
        let price = Number(tdEl.textContent)

        sum += price
    }

    sumElement.textContent = sum
    
}