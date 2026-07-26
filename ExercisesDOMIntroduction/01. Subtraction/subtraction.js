function subtract(num1, num2) {
    const numEl = document.getElementById('firstNumber')
    const num2El = document.querySelector('#secondNumber')
    const result = document.getElementById('result')

    let firstNum = Number(numEl.value)
    let secondNum = Number(num2El.value)

    result.textContent = firstNum - secondNum

}