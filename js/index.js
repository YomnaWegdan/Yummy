//index.js
import { areaData } from "./Areas.js"
import { categoryData, displayCategories } from "./Categories.js"
import { contactsData } from "./contacts.js"
import { ingredientsData } from "./ingredients.js"

//loading
$(function(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').slideUp(1000 , function(){
            $('body').css('overflow' , 'auto' )
            $('.loading').remove()
        })})
    })
//sidebar
$('#icon').on('click' , function(){
    $('.sidebar-box ul').animate({width:'toggle'} , 1000)

})


export let data = [];
let mealId;
let response;
export let res;
export let categoryRes 

const mainApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=`


export let row = document.getElementById('Row');
let searchRow = document.getElementById('search').querySelector('#Row');

export async function getData(api, targetSection , display) {
    const response = await fetch(api);
    res = await response.json();
    data = res.meals;
    categoryRes = res.categories
    console.log('data', data);
    display(targetSection) ;
}

getData(mainApi , row , displayMeal);

export function displayMeal(targetSection) {
    let box = '';

    for (let i = 0; i < data.length; i++) {
        if(i>=0 && i<20){
        mealId = data[i].idMeal;

        box += `
            <div class="col-xl-3 col-lg-6">
                <div class="img" data-meal-id="${mealId}">
                    <img src=${data[i].strMealThumb} alt='' class='w-100 rounded-3' /> 
                    <div class='img-overlay'>
                        <h3 class='position-absolute top-50 start-50 text-black translate-middle'>${data[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }}


    targetSection.innerHTML = box;

    const cards = targetSection.querySelectorAll('.img');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const clickedMealId = card.dataset.mealId;
            navigateToDetailsPage(clickedMealId);
        });
    });
}



 let rowDetails = document.getElementById('rowDetails');
export let detailSec = document.getElementById('detailSec'); 

async function getDetails(mealId) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const res = await api.json();
    response = res.meals;
    console.log('res', response);
    displayDetails(response);
}

async function navigateToDetailsPage(mealId) {
    await getDetails(mealId);
    row.classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categoryMeals').classList.add('d-none');
    document.getElementById('area').classList.add('d-none');
    document.getElementById('areaMeals').classList.add('d-none');
    document.getElementById('ingredientsMeals').classList.add('d-none');
    document.getElementById('ingredients').classList.add('d-none');   
    document.getElementById('contacts').classList.add('d-none');    
 
    detailSec.classList.remove('d-none');


}


function displayDetails(response) {
    let boxDetails = '';
    

    if (rowDetails) {
        let tagsSpans = '';

        if (response[0].strTags !== null) {
            const tagsArray = response[0].strTags.split(',').map(tag => tag.trim());
            tagsSpans = tagsArray.map(tag => `<span class='alert alert-info m-2 p-1'>${tag}</span>`).join(' ');
        } else {
            tagsSpans = `<span class='alert alert-info m-2 p-1'>null</span>`;
        }
        boxDetails = `
            <div class="img col-xl-4 col-md-12 ">
                <h2>${response[0].strMeal}</h2>
                <img src=${response[0].strMealThumb} alt="img-meal" class="w-100"/>
            </div>
            <div class="details col-xl-8 col-md-12 ">
                <div> 
                    <h2>Instructions</h2>
                    <p>${response[0].strInstructions}</p>
                </div>
                <div><h2>Area : ${response[0].strArea}</h2></div>
                <div><h2>Category : ${response[0].strCategory}</h2></div>
                <div>
                    <h2>Recipes : </h2>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        ${generateIngredientsList(response[0])}
                    </ul>
                </div>
                <div class='d-flex'>
                    <h2>Tags :</h2>
                    ${tagsSpans}
                </div>
                <div class='mt-2'>
                    <button class='btn btn-success mx-2' ><a class='text-white text-decoration-none' href=${response[0].strSource}>Source</a></button> 
                    <button class='btn btn-danger'><a class='text-white text-decoration-none' href=${response[0].strYoutube}>Youtube</a></button> 
                </div>
            </div>
        `;
        rowDetails.innerHTML = boxDetails;
    } else {
        console.error('Element with ID "rowDetails" not found.');
    }
}

function generateIngredientsList(meal) {
    let ingredientsList = '';

    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        // Check if the property exists in the object
        if (meal.hasOwnProperty(ingredientKey)) {
            const ingredient = meal[ingredientKey];
            const measure = meal[measureKey];

            // Check if either ingredient or measure is not an empty string
            if ((ingredient && ingredient.trim() !== '') || (measure && measure.trim() !== '')) {
                ingredientsList += `
                    <li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>
                `;
            }
        }
    }

    return ingredientsList;
}




//search
document.getElementById('searchLink').addEventListener('click', function (e) {
    e.preventDefault();
    row.classList.add('d-none');
    detailSec.classList.add('d-none');
    document.getElementById('search').classList.remove('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categoryMeals').classList.add('d-none');
    document.getElementById('area').classList.add('d-none');
    document.getElementById('areaMeals').classList.add('d-none');
    document.getElementById('ingredients').classList.add('d-none');
    document.getElementById('ingredientsMeals').classList.add('d-none');
    document.getElementById('contacts').classList.add('d-none');
});

document.getElementById('inputName').addEventListener('input', function (e) {
    console.log(e.target.value);
    const searchNameApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`;
    console.log(searchNameApi);
    getData(searchNameApi, searchRow , displayMeal); 
});

document.getElementById('inputChar').addEventListener('input', function (e) {
    console.log(e.target.value);
    const searchCharApi = `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`;
    console.log(searchCharApi);
    getData(searchCharApi, searchRow , displayMeal); 
});


categoryData();
areaData()
ingredientsData();
contactsData()



