// images display on landing page
const img = document.querySelector('.img');
const cycleImages = [
    './images/bluedrink.jpg', './images/greendrink.jpg', './images/pinkdrink.jpg', './images/2drinks.jpg', './images/2drinksGreenAndRed.jpg'
];

// carousel
async function cycle() {
  img.src = cycleImages[0];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[1];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[2];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[3];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[4];
  await new Promise(r => setTimeout(r, 2000));
  cycle();
}
cycle();


var cockTails = document.querySelector('ul');
var searchBtn = document.querySelector('searchbtn')


const searchResultsArray = [
  {
    id: 1,
    Cocktail: "",
    ingredients: "brown",
    favorite: 8,
    pictureUrl:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
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
function getApi() {
    var requestUrl = '';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                cockTails.appendChild(listItem);
            }
        });
};

searchBtn.addEventListener('click', getApi);