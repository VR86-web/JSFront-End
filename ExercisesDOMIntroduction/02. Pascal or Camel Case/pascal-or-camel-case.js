function solve(string, condition) {
  const stringEl = document.getElementById('text').value
  const conditionEl = document.getElementById('naming-convention').value
  const result = document.getElementById('result')

  let strinfElString = stringEl.split(' ')

  let finalString = ''

  for (let word of strinfElString) {
    finalString += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  switch (conditionEl) {
    case 'Camel Case':
      result.textContent = finalString[0].toLowerCase() + finalString.slice(1)
      break;

    case 'Pascal Case':
      result.textContent = finalString
      break;
    default:
      result.textContent = 'Error!'

  }


}