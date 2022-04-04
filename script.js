// Get data from local API to show up on DOM
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
  .then (response => response.json())
  .then(allCocktailObj => {
    allCocktailObj.drinks.forEach(cocktail => renderOneDrink(cocktail))
  })
})

// Section 1: Displaying single data on DOM
const renderOneDrink = (cocktail) =>{
  const drinkCard = document.createElement('div')
  drinkCard.className = "card";
  
}