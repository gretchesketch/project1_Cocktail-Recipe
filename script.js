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
<<<<<<< HEAD

// function to fetch api
// function getApi(event) {
//   var requestUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php";
  // var apikey = '9973533'
  
//   fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//           for (var i = 0; i < data.length; i++) {
//               var listItem = document.createElement("li");
//               listItem.textContent = data[i].html_url;i
//               cockTails.appendChild(listItem);
//             }
//         });

//   event.preventDefault();
//   document.getElementById('img').style.display = 'none';
// }; 


//searchBtn.addEventListener("click", jason);



=======
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
>>>>>>> e52220b6f1a529da0bdc5c10cb1a74447110c078
/////////////////////////////////////////////////////////////////////
var baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/";
var apiKey = "9973533";
var searchInput = document.getElementsByClassName("input");
var searchBtn = document.getElementById("searchBtn");
var glass = document.getElementById("glass");
var ingredients = document.getElementById("ingred");
var instructions = document.getElementById("instruct");
var cocktailSearch = document.querySelector("cocktailSearch"); // input value from user
// var cocktailContainerEl = document.querySelector('cocktail')

/////////////////// sample code from activity
// var formSubmitHandler = function (event) {
//   event.preventDefault();

<<<<<<< HEAD
//var glass = strGlass.glass
//var temp = day.temp.day;
//var windSpeed = day.wind_speed;
//var humidity = day.humidity;

// in order to have the api only called on during a search we need to add an event listener to the search button
// create a variale to save the input value create another variable for your search button element.
// add an event listener to the variable created to trigger the search button to call the api. 

=======
//   var cocktailResults = cocktailSearch.value.trim();
>>>>>>> e52220b6f1a529da0bdc5c10cb1a74447110c078

//   if (cocktailResults) {
//     getUserRepos(cocktailResults);

<<<<<<< HEAD
//fetching random cocktail
// this is just a sample currently: revise later
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      console.log(response)
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
=======
//     cocktailContainerEl.textContent = '';
//     cocktailSearch.value = '';
//   } else {
//     alert('Please enter a Cocktail name');
//   }
// };
>>>>>>> e52220b6f1a529da0bdc5c10cb1a74447110c078

// var getCocktailRecipes = function (cocktailName) {
//   var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName;

//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, cocktailName);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to Database');
//     });
// };
//////////////////
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
// display cards
function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");
  cocktailDiv.innerHTML = "";
  const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h3");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  const cocktailIngredients = document.createElement("dl");
  cocktailDiv.appendChild(cocktailIngredients);
  const cocktailMeasures = document.createElement;
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
    listItem = document.createElement("dt");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }
  var cocktailEl = document.getElementById("cocktail1");
  var str1 = `
  <div class="card large"> 
  <div class="card-content">
  <dl>
    <dt>Type of Glass:</dt>
    <dd id="glass1">${data.drinks[0].strGlass}</dd>
    <dt>Ingredients:</dt>
    <dd id="ingred1"></dd>
    <dt>
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
}
