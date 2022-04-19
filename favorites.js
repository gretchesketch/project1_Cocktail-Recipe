function renderFavorites(){
    console.log('HERE')
    let favoritesArr = JSON.parse(localStorage.getItem('favorites'))
    console.log(favoritesArr)
    for(let i = 0; i < favoritesArr.length; i++){
        console.log(i)
        document.querySelector('#favoritesContainer').innerHTML += `
            <div class="card large"> 
            <img src="${favoritesArr[i].strDrinkThumb}">
            <div class="card-content">
            <h3>${favoritesArr[i].strDrink}</h3>
            </div>

            <div class="card-action">
            <a class="waves-effect waves-light btn favbtn"
            ><i onclick="changeIcon()" class="material-icons left" id='favbtn'>favorite_border</i>Favorite</a
            >
            </div>            
            </div> `;
            
    }
}

console.log('CONNECTED')

// <dl>
//     <dt>Type of Glass:</dt>
//     <dd id="glass1">${favorites[i].strGlass}</dd>
//     <dt>Ingredients:</dt>
//     <dd id="ingred1"></dd>
//     <dt>${cocktailIngredients.appendChild(listItem)}</dt>
//     <dt>Instruction:</dt>
//     <dd id="instruct1">${data.drinks[0].strInstructions}</dd>
// </dl>
renderFavorites()