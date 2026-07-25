function editElement(htmlEl, match, replacer) {
    let reference = htmlEl.textContent
    let updatedReference = reference.replaceAll(match, replacer)
    
    htmlEl.textContent = updatedReference
    
}