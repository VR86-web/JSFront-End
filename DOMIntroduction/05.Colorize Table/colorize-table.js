function colorize() {
    let evenTrElements = document.querySelectorAll('tbody tr:nth-child(even)')

    for (let trEl of evenTrElements){
        trEl.style.backgroundColor = 'teal'
    }
}