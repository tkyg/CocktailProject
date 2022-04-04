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
  const drinksCollection = document.createElement('div')
  drinksCollection.setAttribute ('id', 'drinks-collection')

  document.body.appendChild(drinksCollection)
  
  const drinkCard = document.createElement('ul')
  drinkCard.className = "card";
  
  //Add cocktail information
  // 1a. cocktail image - strDrinkThumb
  const drinkImage = document.createElement('img')
  drinkImage.src = cocktail.strDrinkThumb
  drinkImage.className = 'drink-image';
  
  // 1b. cocktail name - strDrink
  const drinkName = document.createElement('p')
  drinkName.innerText = cocktail.strDrink
  
  // 1c. cocktail glass - strGlass
  const drinkGlassType = document.createElement('p')
  drinkGlassType.innerText = cocktail.strGlass
  
  // 1d. cocktail instruction - strInstructions
  const drinkInstructions = document.createElement('p')
  drinkInstructions.innerText = cocktail.strInstructions
  
  drinkCard.append(drinkImage, drinkName, drinkGlassType, drinkInstructions )

  drinksCollection.append(drinkCard)

}