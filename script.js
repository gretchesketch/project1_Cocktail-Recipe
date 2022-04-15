// images display on landing page
const img = document.querySelector(".carousel-img");
const cycleImages = [
  "./images/bluedrink.jpg",
  "./images/greendrink.jpg",
  "./images/pinkdrink.jpg",
  "./images/2drinks.jpg",
  "./images/2drinksGreenAndRed.jpg",
];

// carousel
async function cycle() {
  img.src = cycleImages[0];
  await new Promise((r) => setTimeout(r, 2000));
  img.src = cycleImages[1];
  await new Promise((r) => setTimeout(r, 2000));
  img.src = cycleImages[2];
  await new Promise((r) => setTimeout(r, 2000));
  img.src = cycleImages[3];
  await new Promise((r) => setTimeout(r, 2000));
  img.src = cycleImages[4];
  await new Promise((r) => setTimeout(r, 2000));
  cycle();
}
cycle();

  console.log("after carousel")

var cockTails = document.querySelector("ul");
var searchBtn = document.querySelector("searchbtn");

  console.log("after vars on line 28 and 29")

const searchResultsArray = [
  {
    id: 1,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl:
    "./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail"
  },
  {
    id: 2,
    Cocktail: "",
   ingredients: "brown",
    favorite: 8,
    pictureUrl:
      "./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail"
  },
  {
    id: 3,
   Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl:"./images/2drinks.jpg",
    imageAlt: "your favorite cocktail"
  },
  {
    id: 4,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl:"./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail"
  }
];


console.log("after search results array")

/////////////////////////////////////////////////////////////////////
//Gretchen experiementing with fetch

// var googleApiKey = (AIzaSyAHn5BUjeKUprcZG2E8m24ynnZIT2avTPk)
// var googleUrl = 

// function jason(event) {
//   event.preventDefault();
//   document.querySelector('.description').style.display = 'none';
// }

var baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var apiKey = "9973533";

var searchInput = document.getElementsByClassName("input")
var searchBtn = document.getElementsByClassName("searchBtn")

var glass = document.getElementById("glass")
var ingredients = document.getElementById("ingred")
var instructions = document.getElementById("instruct")

// var glass = [strGlass];
// var instructions = strInstructionsDE.instructions
// var ingredients = [
//     {strIngredient1},
//     {strIngredient2},
//     {strIngredient3},
//     {strIngredient4},
//     {strIngredient5},
//     {strIngredient6},
//     {strIngredient7},
//     {strIngredient8}
//  ];






//fetching random cocktail
// this is just a sample currently: revise later
searchBtn.addEventListener("click", fetch("https://www.thecocktaildb.com/api/json/v2/9973533/random.php ")
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then(data => {
  console.log(data);
  displayCocktail(data)
})

  .catch((error) => console.error("FETCH ERROR:", error)));

  
  
  
  
  //display function
  function displayCocktail(data) {
    const cocktail = data.drinks;
    const cocktailDiv = document.getElementById("card-content"); 
  };

  //exporting data
const cocktailName = cockTails.strDrink;
drinkname.innerHTML = cocktailName;
cocktailDiv.appendChild(span);




//looping through ingredients to display on the slots that are not null
const cocktailIngredients = document.createElement("ul");
cocktailDiv.appendChild(cocktailIngredients);  

const getIngredients = Object.keys(cocktail)
  .filter(function (ingredient) {
    return ingredient.indexOf("strIngredient") == 0;
  })
  .reduce(function (ingredients, ingredient) {
    if (cocktail[ingredient] != null) {
      ingredients[ingredient] = cocktail[ingredient];
    }
    return ingredients;
  }, {});

for (let key in getIngredients) {
  let value = getIngredients[key];
  listItem = document.createElement("li");
  listItem.innerHTML = value;
  cocktailIngredients.appendChild(listItem);
}









  //drink charactersists that showed up in the console
// idDrink: "12528"
// strAlcoholic: "Alcoholic"
// strCategory: "Ordinary Drink"
// strCreativeCommonsConfirmed: "No"
// strDrink: "White Russian"
// strDrinkAlternate: null
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg"
// strGlass: "Old-fashioned glass"
// strIBA: null
// strImageAttribution: null
// strImageSource: null
// strIngredient1: "Vodka"
// strIngredient2: "Coffee liqueur"
// strIngredient3: "Light cream"
// strIngredient4: null
// strIngredient5: null
// strIngredient6: null
// strIngredient7: null
// strIngredient8: null
// strIngredient9: null
// strIngredient10: null
// strIngredient11: null
// strIngredient12: null
// strIngredient13: null
// strIngredient14: null
// strIngredient15: null
// strInstructions: "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve."
// strInstructionsDE: "Gießen Sie Wodka und Kaffeelikör über Eiswürfel in einem old-fashioned Glas. Mit Sahne auffüllen und servieren."
// strInstructionsES: null
// strInstructionsFR: null
// strInstructionsIT: "Versare la vodka e il liquore al caffè sui cubetti di ghiaccio in un bicchiere vecchio stile.Farcite con crema leggera e servite."
// strInstructionsZH-HANS: null
// strInstructionsZH-HANT: null
// strMeasure1: "2 oz "
// strMeasure2: "1 oz "
// strMeasure3: null
// strMeasure4: null
// strMeasure5: null
// strMeasure6: null
// strMeasure7: null
// strMeasure8: null
// strMeasure9: null
// strMeasure10: null
// strMeasure11: null
// strMeasure12: null
// strMeasure13: null
// strMeasure14: null
// strMeasure15: null
// strTags: null
// strVideo: null

function changeIcon() {
  if (document.getElementById('favbtn').textContent == 'favorite_border') document.getElementById('favbtn').textContent = 'favorite';
  else if (document.getElementById('favbtn').textContent = 'favorite') document.getElementById('favbtn').textContent = 'favorite_border';
};

