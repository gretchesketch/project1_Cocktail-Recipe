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

function changeIcon() {
  if (document.getElementById("favbtn").textContent == "favorite_border") {
    document.getElementById("favbtn").textContent = "favorite";
  } else if ((document.getElementById("favbtn").textContent = "favorite")) {
    document.getElementById("favbtn").textContent = "favorite_border";
  }

  favorite();
}
// favorites to local storage function
if (!localStorage.getItem("favorites")) {
  localStorage.setItem("favorites", JSON.stringify([]));
}

let currentDrink;
function favorite() {
  let favoriteStorage = JSON.parse(localStorage.getItem("favorites"));
  let removed = false; // if something is deleted it shouldnt save to local
  for (let i = 0; i < favoriteStorage.length; i++) {
    if (favoriteStorage[i].idDrink === currentDrink.idDrink) {
      favoriteStorage.splice(i, 1); // affecting original arrays length
      localStorage.setItem("favorites", JSON.stringify(favoriteStorage));
      removed = true;
    }
  }

  if (!removed) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favoriteStorage, currentDrink])
    );
  }
  console.log("FAVORITE");
  console.log(JSON.parse(localStorage.getItem("favorites")));
}

$(document).ready(function () {
  $("#favbtn").on("click", function () {
    localStorage.setItem("Favorites", $("#cocktail-name"));
    localStorage.getItem("Favorites");
  });
});
// API functions
var baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var apiKey = "9973533";
var searchInput = document.getElementsByClassName("input");
var searchBtn = document.getElementById("searchBtn");
var cocktailSearch = document.querySelector("cocktailSearch");
var searchResult = document.querySelector(".search-results");
searchResult.style.display = "none";

// fetching API
searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  searchResult.style.display = "block";
  img.style.display = "none";
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
      currentDrink = data.drinks[0]; //only stores first index
    })
    .catch((error) => console.error("FETCH ERROR:", error));
});

// display card one.
// Gets the data from the drink index
function displayCocktail(data) {
  // const cocktailDiv = document.getElementById("cocktail");
  // cocktailDiv.innerText = "";
  // const heading = document.createElement("h3");
  // heading.innerText = cocktailName;
  // cocktailDiv.appendChild(heading);
  // cocktailDiv.appendChild(cocktailImg);
  // const cocktailIngredients = document.createElement("dl");
  // cocktailDiv.appendChild(cocktailIngredients);
  // const getIngredients = Object.keys(cocktail)
  
  // // the filter method creates an array from an existing array.
  // // In this case the array of drinks
  // //proper syntax: .filter(function(item))
  // .filter(function (ingredient) {
    //   return ingredient.indexOf("strIngredient") == 0;
    // })
    // //Only display the ingredients that dont have a value of null
    // .reduce(function (ingredients, ingredient) {
      //   if (cocktail[ingredient] != null) {
        //     ingredients[ingredient] = cocktail[ingredient];
        //   }
        //   return ingredients;
        // }, {});
        
        // for (let key in getIngredients) {
          //   let value = getIngredients[key];
          //   listItem = document.createElement("dt");
          //   listItem.innerHTML = value;
          //   cocktailIngredients.appendChild(listItem);
          // }
          
          // Display Card two
          // using inner HTML to display data from the index
  const cocktail = data.drinks[0];
  const cocktailName = cocktail.strDrink;
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  var cocktailEl = document.getElementById("cocktail1");
  var str1 = `
  <div class="col s6 push-s6 m6">
  <div class="card large">
    <h4>${cocktailName}</h4>
    <img id="cardImg" src="${cocktailImg.src}" />
    <div class="card-content">
      <dl>
        <dt>Type of Glass:</dt>
        <dd>${data.drinks[0].strGlass}</dd>
        <dt>Ingredients:</dt>
        <dd>
          ${data.drinks[0].strIngredient1}, ${data.drinks[0].strIngredient2}, ${data.drinks[0].strIngredient3}, ${data.drinks[0].strIngredient4}
        </dd>
        <dt>Measurements:</dt>
        <dd>${data.drinks[0].strMeasure1}, ${data.drinks[0].strMeasure2}, ${data.drinks[0].strMeasure3}, ${data.drinks[0].strMeasure4}</dd>
        <dt>Instruction:</dt>
        <dd>${data.drinks[0].strInstructions}</dd>
      </dl>
    </div>
    <button class="favbtn">
      <i onclick="changeIcon()" class="material-icons left" id="favbtn"
        >favorite_border</i
      >Favorite
    </button>
  </div>
</div>`;
  cocktailEl.innerHTML = str1;
}
