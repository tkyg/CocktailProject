// Get data from local API to show up on DOM
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submit-btn')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
  })
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
  .then (response => response.json())
  .then(allCocktailObj => {
    allCocktailObj.drinks.forEach(cocktail => renderOneDrink(cocktail))
  })
})

const createHeading = document.createElement('h1')
document.body.appendChild(createHeading)
createHeading.setAttribute('id', 'heading')
createHeading.innerText = "COCKTAIL RECIPES"

const createSubHeading = document.createElement('h2')
document.body.appendChild(createSubHeading)
createSubHeading.setAttribute('id', 'subHeading')
createSubHeading.innerText = "SEARCH YOUR NEXT COCKTAIL"

const createFormSubmit = document.createElement('form')
document.body.appendChild(createFormSubmit)
createFormSubmit.setAttribute('id', 'drinks')

const createInputSubmit = document.createElement('input')
createInputSubmit.setAttribute('id', 'search')
createInputSubmit.setAttribute('type', 'text')
createInputSubmit.setAttribute('name', 'Search')
createFormSubmit.appendChild(createInputSubmit)

const createInputForSubmit = document.createElement('input')
createInputForSubmit.setAttribute('type', 'submit')
createInputForSubmit.setAttribute('name', 'Submit')
createInputForSubmit.setAttribute('id', 'submit-btn')
createFormSubmit.appendChild(createInputForSubmit)

const drinksCollection = document.createElement('div')
drinksCollection.setAttribute ('id', 'drinks-collection')
document.body.appendChild(drinksCollection)


// Section 1: Displaying single data on DOM
const renderOneDrink = (cocktail) =>{
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