function extractText() {
    let liItems = document.getElementsByTagName('li')
    let textareaEl = document.querySelector('#result')

    for(liItem of liItems) {
        let liText = liItem.textContent
        textareaEl.textContent += liText + '\n'

    }

}