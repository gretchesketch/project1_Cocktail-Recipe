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

var cockTails = document.querySelector("ul");
var searchBtn = document.querySelector("searchbtn");


<<<<<<< HEAD
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
=======
>>>>>>> 9990f8d1635063f6d8f96000d9bbf15d2ebd0457

// function to fetch api
function getApi(event) {
  var requestUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php";
  // var apikey = '9973533'
  
  fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          for (var i = 0; i < data.length; i++) {
              var listItem = document.createElement("li");
              listItem.textContent = data[i].html_url;
              cockTails.appendChild(listItem);
            }
        });

  event.preventDefault();
  document.getElementById('img').style.display = 'none';
}; 


searchBtn.addEventListener("click", jason);