// images display on landing page
const img = document.querySelector(".img");
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
//               listItem.textContent = data[i].html_url;
//               cockTails.appendChild(listItem);
//             }
//         });

//   event.preventDefault();
//   document.getElementById('img').style.display = 'none';
// }; 


//searchBtn.addEventListener("click", jason);



/////////////////////////////////////////////////////////////////////
//Gretchen experiementing with fetch

// var googleApiKey = (AIzaSyAHn5BUjeKUprcZG2E8m24ynnZIT2avTPk)
// var googleUrl = 

// function jason(event) {
//   event.preventDefault();
//   document.querySelector('.description').style.display = 'none';
// }

var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
var apiKey = "9973533";

var glass = document.getElementById("glass")
var ingredients = document.getElementById("ingred")
var instructions = document.getElementById("instruct")

var glass = strGlass.glass
var temp = day.temp.day;
var windSpeed = day.wind_speed;
var humidity = day.humidity;


//fetching random cocktail
// this is just a sample currently: revise later
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
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
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
    const cocktail = data.drinks[2];
    const cocktailDiv = document.getElementById("cocktail"); 
  }   




  //dateModified: "2016-08-28 18:35:32"
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