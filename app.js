const inputField = document.querySelector('.recipename');
const searchMealButton = document.querySelector('.search');
const searchResultsSection = document.querySelector('.searchresultssection');



let singleRandomMealApi = 'https://www.themealdb.com/api/json/v1/1/random.php';

let listAllMealCategoriesApi = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function creatingSearchMealApi(name) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
}

function creatingFilterMealApi(ingredient) {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
}



function getSingleRandomRecipe() {
    fetch(singleRandomMealApi)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function getAllMealCategories() {
    fetch(listAllMealCategoriesApi)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function getSearchMealByName() {
    let userInputMealName = prompt('Enter meal name you want to search: ');
    fetch(creatingSearchMealApi(userInputMealName))
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function getFilterMealByIngredientName() {
    let userIngredientInput = prompt('Input ingredient for which you want to search meal.')
    fetch(creatingFilterMealApi(userIngredientInput))
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

}

function selectoption() {
    switch(inputField.value) {
        case 'singlerandommeal':
            getSingleRandomRecipe();
            break;
        case 'singlemeal':
            getSearchMealByName();
            break;
        case 'filtermeal':
            getFilterMealByIngredientName();
            break;
        case 'listcategories':
            getAllMealCategories();
            break;            
        default:
            return    
    }
}

searchMealButton.addEventListener('click', selectoption);