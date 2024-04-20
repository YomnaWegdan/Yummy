import React from 'react'
import { getCategories, useMeal } from './Hooks/useMeals';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function Categories() {
    const { data , isLoading } = useMeal("categories", getCategories);
    console.log(data?.data?.categories)

    if (isLoading) return <Loading/>

  return (
    <div>
      <div className='row '>
      { data?.data?.categories.map((category)=> 
      <div className="col-xl-3 col-lg-6 text-white mt-5">
      <Link to={`/categories/${category.strCategory}`} >
      <div id='imgCat' className="img imgCat " >
        <img src={category.strCategoryThumb} alt='' class='w-100 rounded-3' /> 
        <div className='img-overlay rounded-2 overflow-hidden p-4'>
          <h3 className='position-absolute mt-5 start-50 top-0 text-black translate-middle'>{category.strCategory}</h3>
          <p className='position-absolute top-50   text-black mb-3 '>{category.strCategoryDescription}</p>
        </div>
      </div></Link>
    </div>)   }
      </div>
    </div>
  )
}
