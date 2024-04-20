import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default function Ingredients() {
    const { data , isLoading } = useMeal("getIngredients", getIngredients);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>
  return (
    <div>
    <div className='row '>
    { data?.data?.meals.map((meal)=> 
    <div className="col-xl-3 col-lg-6 text-white mt-5">
    <Link to={`/categories/${meal.strCategory}`} >
    <div id='imgIngredients' class="img imgIngredients text-center">
                <i class="fa fa-solid fa-drumstick-bite fa-4x text-white"></i>
                <h3 class=' mt-2 '>${(data[i].strIngredient)}</h3>
                <p>${meal.split(' ').splice(0, 20).join(' ')}</p>
                </div>
    </Link>
    </div>
    )}</div>
    </div>
  )
}
