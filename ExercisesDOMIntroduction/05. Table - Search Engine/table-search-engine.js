function solve() {
   const tdEl = document.querySelectorAll('tbody tr')
   const searchEl = document.getElementById('searchField').value.toLowerCase()

   if (!searchEl) return;

   for(let element of tdEl){
      element.classList.remove('select')
      if(element.textContent.toLowerCase().includes(searchEl)){
         element.classList.add('select')
      }
         
   }

   document.getElementById('searchField').value = '';
   
}