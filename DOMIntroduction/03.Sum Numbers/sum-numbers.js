function calc() {
    let num1El = document.querySelector('#num1')
    let num2El = document.getElementById('num2')
    let resultEl = document.querySelector('#sum')

    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)
    resultEl.value = num1 + num2
    
}