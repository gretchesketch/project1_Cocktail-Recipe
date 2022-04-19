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



console.log("after search results array");
function changeIcon() {
  if (document.getElementById("favbtn").textContent == "favorite_border")
    document.getElementById("favbtn").textContent = "favorite";
  else if ((document.getElementById("favbtn").textContent = "favorite"))
    document.getElementById("favbtn").textContent = "favorite_border";
}
$(document).ready(function () {
  $("#favbtn").on("click", function () {
    localStorage.setItem("Favorites", $("#cocktail-name"));
    localStorage.getItem("Favorites");
  });
});
/////////////////////////////////////////////////////////////////////
var baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var apiKey = "9973533";
var searchInput = document.getElementsByClassName("input");
var searchBtn = document.getElementById("searchBtn");
var glass = document.getElementById("glass");
var ingredients = document.getElementById("ingred");
var instructions = document.getElementById("instruct");
var cocktailSearch = document.querySelector("cocktailSearch"); // input value from user

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var userSearch = document.getElementById("cocktailSearch").value;
  console.log(userSearch);
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayCocktail(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
});
// display card one.
// Gets the data from the drink index
function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");
  cocktailDiv.innerText = "";
  const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h3");
  heading.innerText = cocktailName;
  cocktailDiv.appendChild(heading);
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  const cocktailIngredients = document.createElement("dl");
  cocktailDiv.appendChild(cocktailIngredients);
  const getIngredients = Object.keys(cocktail)

// the filter method creates an array from an existing array.
// In this case the array of drinks
//proper syntax: .filter(function(item))
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    //Only display the ingredients that dont have a value of null
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("dt");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  };

    // Display Card two
    // using inner HTML to display data from the index
    var cocktailEl = document.getElementById("cocktail1");
  var str1 = `
  <div class="card large"> 
  <h3>${cocktailName}</h3>
  <img id="cardTwo" src="${cocktailImg.src}">
  <div class="card-content">
  <dl>
    <dt>Type of Glass:</dt>
    <dd id="glass1">${data.drinks[0].strGlass}</dd>
    <dt>Ingredients:</dt>
    <dd id="ingred1"></dd>
    <dt></dt>
    <dt>Instruction:</dt>
    <dd id="instruct1">${data.drinks[0].strInstructions}</dd>
  </dl>
</div>
<div class="card-action">
  <a class="waves-effect waves-light btn favbtn"
    ><i onclick="changeIcon()" class="material-icons left" id='favbtn'>favorite_border</i>Favorite</a
  >
</div>
</div>
</div> `;
  cocktailEl.innerHTML = str1;
};

const favoritesBar = document.getElementsByClassName("favorites-bar")
