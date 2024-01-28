// Categories.js
import { categoryRes, displayMeal, getData, row } from "./index.js";

const categoriesApi = `https://www.themealdb.com/api/json/v1/1/categories.php`;
let categoryRow = document.getElementById('categorySec');


export function categoryData() {
  document.getElementById('categoryLink').addEventListener('click', async function (e) {
    e.preventDefault();
    


    row.classList.add('d-none');
    detailSec.classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('categories').classList.remove('d-none');
    document.getElementById('categoryMeals').classList.add('d-none');
    document.getElementById('area').classList.add('d-none');
    document.getElementById('areaMeals').classList.add('d-none');
    document.getElementById('ingredients').classList.add('d-none');
    document.getElementById('ingredientsMeals').classList.add('d-none');
    document.getElementById('contacts').classList.add('d-none');




    await getData(categoriesApi, categoryRow, displayCategories);
    console.log('categoryRes', categoryRes);

    specialCategory()
  });
}

export function displayCategories(targetSection) {
  let box = '';

  if (categoryRes && categoryRes.length) {
    for (let i = 0; i < categoryRes.length; i++) {
      box += `
        <div class="col-xl-3 col-lg-6 text-white">
          <div id='imgCat' class="img imgCat " data-meal-id="${categoryRes[i].idCategory}">
            <img src=${categoryRes[i].strCategoryThumb} alt='' class='w-100 rounded-3' /> 
            <div class='img-overlay rounded-2 overflow-hidden p-4'>
              <h3 class='position-absolute mt-5 start-50 top-0 text-black translate-middle'>${(categoryRes[i].strCategory)}</h3>
              <p class='position-absolute top-50   text-black mb-3 '>${categoryRes[i].strCategoryDescription}</p>
            </div>
          </div>
        </div>
      `;
    }
  } else {
    console.error("categoryRes is undefined or has no length property.");
  }
  targetSection.innerHTML = box;
}
//.split(' ').splice(0,10).join(' ')
//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

let categoryName='';
let categoryNameApi = ''
let categoryMealRow = document.getElementById('categoryMealSec');

function specialCategory() {
  const categoryElements = document.querySelectorAll('.imgCat');

  categoryElements.forEach((element) => {
    element.addEventListener('click', async function (e) {
      if (e.target.closest('.imgCat')) {
        const categoryName = element.querySelector('h3').innerHTML;
        console.log(categoryNameApi);
        categoryNameApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
      }
      document.getElementById('categories').classList.add('d-none');
      document.getElementById('categoryMeals').classList.remove('d-none');

      await getData(categoryNameApi, categoryMealRow, displayMeal);
    });
  });
}













/*
// Categories.js
import { categoryRes, getData, res, row } from "./index.js";

const categoriesApi = `https://www.themealdb.com/api/json/v1/1/categories.php`;
let categoryRow = document.getElementById('categorySec');

export function categoryData() {
  document.getElementById('categoryLink').addEventListener('click', async function (e) {
    e.preventDefault();
    row.classList.add('d-none');
    detailSec.classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('categories').classList.remove('d-none');
    
    await getData(categoriesApi, categoryRow, displayCategories);
    console.log('categoryRes', categoryRes);
  });
}

export function displayCategories(targetSection) {
  let box = '';

  // Check if categoryRes is defined and has a length property
  if (categoryRes && categoryRes.length) {
    for (let i = 0; i < categoryRes.length; i++) {
      box += `
        <div class="col-xl-3 col-lg-6 text-white">
          <div class="img" data-meal-id="${categoryRes[i].idCategory}">
            <img src=${categoryRes[i].strCategoryThumb} alt='' class='w-100 rounded-3' /> 
            <div class='img-overlay rounded-2 overflow-hidden p-4'>
              <h3 class='position-absolute mt-5 start-50 top-0 text-black translate-middle'>${(categoryRes[i].strCategory).split(' ').splice(0,10).join(' ')}</h3>
              <p class='position-absolute top-50   text-black mb-3 '>${categoryRes[i].strCategoryDescription}</p>
            </div>
          </div>
        </div>
      `;
    }
  } else {
    console.error("categoryRes is undefined or has no length property.");
  }

  targetSection.innerHTML = box;
}



*/