import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { FaDrumstickBite } from "react-icons/fa";

export default function Ingredients() {
    const { data , isLoading } = useMeal("getIngredients", getIngredients);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>
  return (
    <div>
    <div className='row '>
    { data?.data?.meals.map((meal)=> 
    <div className="col-xl-3 col-lg-6 text-white mt-5">
    <Link to={`/categories/${meal.strIngredient}`} >
    <div id='imgIngredients' class="img imgIngredients text-center">
                <FaDrumstickBite/>
                <h3 class=' mt-2 '>{meal.strIngredient}</h3>
                <p>{m}</p>
                </div>
    </Link>
    </div>
    )}</div>
    </div>
  )
}
