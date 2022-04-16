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

console.log("after carousel");

var cockTails = document.querySelector("ul");

console.log("after vars on line 28 and 29");

const searchResultsArray = [
  {
    id: 1,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl: "./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail",
  },
  {
    id: 2,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl: "./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail",
  },
  {
    id: 3,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl: "./images/2drinks.jpg",
    imageAlt: "your favorite cocktail",
  },
  {
    id: 4,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl: "./images/2drinks.jpg,",
    imageAlt: "your favorite cocktail",
  },
];

console.log("after search results array");

/////////////////////////////////////////////////////////////////////

var baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var apiKey = "9973533";

var searchInput = document.getElementsByClassName("input");
var searchBtn = document.getElementById("searchBtn");

var glass = document.getElementById("glass");
var ingredients = document.getElementById("ingred");
var instructions = document.getElementById("instruct");

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

console.log(searchBtn);
//fetching random cocktail
searchBtn.addEventListener("click", displayCocktail);

//display function
function displayCocktail(event) {
    console.log(event)
    event.preventDefault()
  fetch("https://www.thecocktaildb.com/api/json/v2/9973533/random.php")
    .then((response) => response.json())
    .then((data) => {
        const cocktails = data.drinks;
        console.log("cocktails:", cocktails);
        return;
    })
};
 


function changeIcon() {
  if (document.getElementById("favbtn").textContent == "favorite_border")
    document.getElementById("favbtn").textContent = "favorite";
  else if ((document.getElementById("favbtn").textContent = "favorite"))
    document.getElementById("favbtn").textContent = "favorite_border";
};
