document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.getElementById('task-input')
   const contentEl = document.getElementById('content')

   formEl.addEventListener('submit', (e) =>{
      e.preventDefault()
      contentEl.innerHTML = ''

      const inputEl = document.querySelector('input[type="text"]').value.split(', ')

      inputEl.forEach(element => {
         const divEL = document.createElement('div')
         const pEl = document.createElement('p')

         pEl.textContent = element

         divEL.append(pEl)

         pEl.style.display = 'none'

         divEL.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block'
         })

         contentEl.append(divEL)
      });

   })
}