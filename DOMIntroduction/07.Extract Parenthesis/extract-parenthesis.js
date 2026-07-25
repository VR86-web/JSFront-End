function extract(content) {
    const el = document.getElementById('content')

    let elText = el.textContent
    const regex = /\(.*?\)/g
    
    const matches = elText.match(regex)

    return matches.map(match => match.slice(1, -1)).join('; ');
    
    
}