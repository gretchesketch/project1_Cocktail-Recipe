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