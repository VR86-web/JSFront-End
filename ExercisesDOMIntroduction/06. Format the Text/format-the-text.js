function solve() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    output.innerHTML = '';

    const sentences = input
        .split('.')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraph = document.createElement('p');

        paragraph.textContent = sentences
            .slice(i, i + 3)
            .join('. ') + '.';

        output.appendChild(paragraph);
    }
}