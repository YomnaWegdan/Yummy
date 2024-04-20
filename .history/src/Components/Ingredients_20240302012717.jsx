import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default function Ingredients() {
    const { data , isLoading } = useMeal("categories", getIngredients);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>
  return (
    <div>
    <div className='row '>
    { data?.data?.meals.map((category)=> 
    <div className="col-xl-3 col-lg-6 text-white mt-5">
    <Link to={`/categories/${category.strCategory}`} >
    </Link>
    </div>
    )}</div>
    </div>
  )
}
