//https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
//https://www.themealdb.com/api/json/v1/1/list.php?i=list

import { data, displayMeal,getData,row } from "./index.js";

const ingredientsApi = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
let ingredientsRow = document.getElementById('ingredientsSec');


export function ingredientsData() {
    document.getElementById('ingredientsLink').addEventListener('click', async function (e) {
      e.preventDefault();
      row.classList.add('d-none');
      detailSec.classList.add('d-none');
      document.getElementById('search').classList.add('d-none');
      document.getElementById('categories').classList.add('d-none');
      document.getElementById('categoryMeals').classList.add('d-none');
      document.getElementById('area').classList.add('d-none');
      document.getElementById('areaMeals').classList.add('d-none');
      document.getElementById('ingredients').classList.remove('d-none');
      document.getElementById('ingredientsMeals').classList.add('d-none');
      document.getElementById('contacts').classList.add('d-none');



    


  
      await getData(ingredientsApi, ingredientsRow, displayIngredients);
      console.log('ingredientsData', data);
  
      ingredients()
    });
  }

  export function displayIngredients(targetSection) {
    let box = '';
  
    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        const description = data[i].strDescription || '';
        box += `
          <div class="col-xl-3 col-lg-6 text-white">
            <div id='imgIngredients' class="img imgIngredients text-center">
                <i class="fa fa-solid fa-drumstick-bite fa-4x text-white"></i>
                <h3 class=' mt-2 '>${(data[i].strIngredient)}</h3>
                <p>${description.split(' ').splice(0, 20).join(' ')}</p>
                </div>
          </div>
        `;
      }
    } else {
      console.error("ingredientsData is undefined or has no length property.");
    }
    targetSection.innerHTML = box;
  }


  let ingredientsMealRow = document.getElementById('ingredientsMealSec');
  let ingredientsNameApi = ''


  function ingredients(){


    const ingredientsElements = document.querySelectorAll('.imgIngredients');
    ingredientsElements.forEach((element) => {
        element.addEventListener('click', async function (e) {
          if (e.target.closest('.imgIngredients')) {
            const ingredientsName = element.querySelector('h3').innerHTML;
            ingredientsNameApi = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`;
            console.log(ingredientsNameApi);

          }
          document.getElementById('ingredients').classList.add('d-none');
          document.getElementById('ingredientsMeals').classList.remove('d-none');
    
          await getData(ingredientsNameApi, ingredientsMealRow, displayMeal);
        });
      });


  }