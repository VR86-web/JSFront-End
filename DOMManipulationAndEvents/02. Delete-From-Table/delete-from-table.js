function deleteByEmail() {
    const input = document.querySelector('label input').value
    const rowElement = document.querySelectorAll('#customers tbody tr')
    const resultElement = document.getElementById('result')

    rowElement.forEach(element => {
        const emailContent = element.querySelector('td:nth-child(2)');
        if (emailContent && emailContent.textContent === input) {
            element.remove();
        }else{
            resultElement.textContent = 'Not found.'
        }
    });
    
}
