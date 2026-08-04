document.addEventListener('DOMContentLoaded', solve);

function solve() {

   let products = new Set()
   let totalPrice = 0

   const addButtonsEl = document.querySelectorAll('.add-product')
   const textAreaEl = document.querySelector('textarea')
   const checkoutBtnEl = document.querySelector('.checkout')

   addButtonsEl.forEach(element => {
      element.addEventListener('click', addTextHandler)

   });

   checkoutBtnEl.addEventListener('click', handleraddTotalListProducts)

   function handleraddTotalListProducts(e) {
      const productsArr = Array.from(products)

      textAreaEl.value += `You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkoutBtnEl.disabled = true

      addButtonsEl.forEach(element => {
         element.disabled = true
      });
   }

   function addTextHandler(e) {
      const fullProductDivEl = e.target.parentElement.parentElement
      const productTitleDivEl = fullProductDivEl.querySelector('.product-title')
      const productTitle = productTitleDivEl.textContent
      const productPriceDivEl = fullProductDivEl.querySelector('.product-line-price')
      const productPrice = Number(productPriceDivEl.textContent)

      totalPrice += productPrice
      products.add(productTitle)
      textAreaEl.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`

   }

}
