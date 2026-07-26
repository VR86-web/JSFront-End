function solve() {
    const listItems = document.querySelectorAll('#towns li');
    const input = document.getElementById('searchText').value.toLowerCase();
    const result = document.getElementById('result');

    let matches = 0;

    for (let li of listItems) {
        li.style.fontWeight = 'normal';
        li.style.textDecoration = 'none';

        if (li.textContent.toLowerCase().includes(input)) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            matches++;
        }
    }

    result.textContent = `${matches} matches found`;
}