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
    <Link to={`/ingredient/${meal.strIngredient}`} className=' text-de'>
    <div id='imgIngredients' class="img imgIngredients text-center">
                <FaDrumstickBite className='fs-90'/>
                <h3 class=' mt-2 '>{meal.strIngredient}</h3>
                </div>
    </Link>
    </div>
    )}</div>
    </div>
  )
}
