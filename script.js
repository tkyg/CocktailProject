// Get data from local API to show up on DOM
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
  .then (response => response.json())
  .then(data => console.log(data))
})