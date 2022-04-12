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

// function start() {
//   // 2. Initialize the JavaScript client library.
//   gapi.client.init({
//     'apiKey': 'AIzaSyAHn5BUjeKUprcZG2E8m24ynnZIT2avTPk',
//     // Your API key will be automatically added to the Discovery Document URLs.
//     'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//     // clientId and scope are optional if auth is not required.
//     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     return gapi.client.people.people.get({
//       'resourceName': 'people/me',
//       'requestMask.includeField': 'person.names'
//     });
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);