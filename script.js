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
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail"); 
  }   