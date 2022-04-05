// Get data from local API to show up on DOM
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submit-btn')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const searchTerm = document.querySelector('#search').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then (response => response.json())
    .then(allCocktailObj => {
      drinksCollection.innerHTML = " ";
      allCocktailObj.drinks.forEach(cocktail => renderOneDrink(cocktail))
    })
  })
})

// Create Tags and Elements for heading and sub-heading
const createHeading = document.createElement('h1')
createHeading.setAttribute('id', 'heading')
createHeading.innerText = "COCKTAIL RECIPES"

const createSubHeading = document.createElement('h2')
createSubHeading.setAttribute('id', 'subHeading')
createSubHeading.innerText = "SEARCH YOUR NEXT COCKTAIL"

// Create tags and elements for submit button
const createFormSubmit = document.createElement('form')
createFormSubmit.setAttribute('id', 'drinks')

const createInput = document.createElement('input')
createInput.setAttribute('id', 'search')
createInput.setAttribute('type', 'text')
createInput.setAttribute('name', 'Search')

const createButton = document.createElement('button')
createButton.setAttribute('type', 'submit')
createButton.innerText = "Submit"
createButton.setAttribute('id', 'submit-btn')

// append input and button to form
createFormSubmit.append(createInput, createButton)

// Create tag and element to uphold data
const drinksCollection = document.createElement('div')
drinksCollection.setAttribute ('id', 'drinks-collection')

// append h1, h2, form, drinksCollection to body
document.body.append(createHeading, createSubHeading, createFormSubmit, drinksCollection)

//Combine ingredient and measurement into an Array
function combineIngredientsAndMeasurements(cocktail) {
let ingredientsAndMeasurementsArr = []
for(let i=1; i<=15; i++){
  let ingredient = `strIngredient${i}`;
  let measurement = `strMeasure${i}`;

  if(!cocktail[ingredient] && !cocktail[measurement]) {
    break;
  }

  ingredientsAndMeasurementsArr.push({
    ingredient: cocktail[ingredient],
    measurement: cocktail[measurement]
  })
}
console.log(ingredientsAndMeasurementsArr)
cocktail.newIngredientsAndMeasurements = ingredientsAndMeasurementsArr;
}


// Section 1: Displaying single data on DOM
const renderOneDrink = (cocktail) =>{
  combineIngredientsAndMeasurements(cocktail)

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

  // 1e. create like button, to make it interactive
  const likeBtn = document.createElement('button')
  likeBtn.innerText = `Like`
  likeBtn.dataset.likes = 0;
  likeBtn.id = cocktail.idDrink

  likeBtn.addEventListener('click', (e) => {
    e.target.innerText = `${parseInt(e.currentTarget.dataset.likes) +1} Likes`;
    e.currentTarget.dataset.likes++;
  })
  
  drinkCard.append(drinkImage, drinkName, drinkGlassType, drinkInstructions )
  // display ingredients and measurement
  displayIngredientsAndMeasurements(cocktail, drinkCard);
  
  drinkCard.append(likeBtn)
  drinksCollection.append(drinkCard)
}

function displayIngredientsAndMeasurements(cocktail, drinkCard){
  cocktail.newIngredientsAndMeasurements.forEach((ingredientsAndMeasurement) => {
  const recipeDiv = document.createElement('div');
  recipeDiv.innerText = `Ingredient: ${ingredientsAndMeasurement.ingredient}`;
  if(ingredientsAndMeasurement.measurement) {
    recipeDiv.innerText += `.... Measurement: ${ingredientsAndMeasurement.measurement}`
  }
  drinkCard.append(recipeDiv)
})
}