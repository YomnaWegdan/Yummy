import { data, displayMeal,getData,row } from "./index.js";

const areaApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
let areaRow = document.getElementById('areaSec');


export function areaData() {
    document.getElementById('areaLink').addEventListener('click', async function (e) {
      e.preventDefault();

    row.classList.add('d-none');
    detailSec.classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categoryMeals').classList.add('d-none');
    document.getElementById('area').classList.remove('d-none');
    document.getElementById('areaMeals').classList.add('d-none');
    document.getElementById('ingredients').classList.add('d-none');
    document.getElementById('ingredientsMeals').classList.add('d-none');
    document.getElementById('contacts').classList.add('d-none');



      // row.classList.add('d-none');
      // detailSec.classList.add('d-none');
      // document.getElementById('search').classList.add('d-none');
      // document.getElementById('categories').classList.add('d-none');
      // document.getElementById('categoryMeals').classList.add('d-none');
      // document.getElementById('area').classList.remove('d-none');

  
      await getData(areaApi, areaRow, displayArea);
      console.log('areaRes', data);
  
      area()
    });
  }

  export function displayArea(targetSection) {
    let box = '';
  
    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        box += `
          <div class="col-xl-3 col-lg-6 text-white">
            <div id='imgArea' class="img imgArea text-center">
                <i class="fa fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class=' mt-2 '>${(data[i].strArea)}</h3>
            </div>
          </div>
        `;
      }
    } else {
      console.error("area is undefined or has no length property.");
    }
    targetSection.innerHTML = box;
  }


  let areaMealRow = document.getElementById('areaMealSec');
  let areaNameApi = ''


  function area(){


    const areaElements = document.querySelectorAll('.imgArea');
    areaElements.forEach((element) => {
        element.addEventListener('click', async function (e) {
          if (e.target.closest('.imgArea')) {
            const areaName = element.querySelector('h3').innerHTML;
            areaNameApi = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;
            console.log(areaNameApi);

          }
          document.getElementById('area').classList.add('d-none');
          document.getElementById('areaMeals').classList.remove('d-none');
    
          await getData(areaNameApi, areaMealRow, displayMeal);
        });
      });


  }