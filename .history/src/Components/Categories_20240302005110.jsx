import React from 'react'
import { getCategories, useMeal } from './Hooks/useMeals';
import { Link } from 'react-router-dom';

export default function Categories() {
    const { data , isLoading } = useMeal("categories", getCategories);
    console.log(data?.data?.categories)

  return (
    <div>
      <div className='row g-5'>
      { data?.data?.categories.map((category)=> 
      <div class="col-xl-3 col-lg-6 text-white">
      <Link to={`/categories/${category.strCategory}`} ></Link>
      <div id='imgCat' class="img imgCat " >
        <img src={category.strCategoryThumb} alt='' class='w-100 rounded-3' /> 
        <div class='img-overlay rounded-2 overflow-hidden p-4'>
          <h3 class='position-absolute mt-5 start-50 top-0 text-black translate-middle'>{category.strCategory}</h3>
          <p class='position-absolute top-50   text-black mb-3 '>{category.strCategoryDescription}</p>
        </div>
      </div>
    </div>)   }
      </div>
    </div>
  )
}
