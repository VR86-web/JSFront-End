document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const allInputElements = document.querySelectorAll('input[type="text"]')

    for(const inputElement of allInputElements){
        inputElement.addEventListener('focus', addClass)
        inputElement.addEventListener('blur', removeClass)

    }

    function addClass(e){
            e.target.parentElement.classList.add('focused')
        }

    function removeClass(e){
            e.target.parentElement.classList.remove('focused')
        }

}
