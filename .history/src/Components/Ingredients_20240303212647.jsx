import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { FaDrumstickBite } from "react-icons/fa";

export default function Ingredients() {
    const { data , isLoading } = useMeal("getIngredients", getIngredients);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>

    function getFirst10Words(description) {
      return description.split(' ').splice(0, 20).join(' ')
  }
  return (
    <div>
    <div className='row '>
    { data?.data?.meals.map((meal)=> 
    <div className="col-xl-3 col-lg-6 text-white mt-5">
    <Link to={`/ingredients/${meal.strIngredient}`} className=' text-decoration-none text-white'>
    <div  class="img text-center">
                <FaDrumstickBite className='fs-90'/>
                <h3 class=' mt-2 '>{meal.strIngredient}</h3>
                <p>{getFirst10Words(meal.strDescription) || ''}</p>
                </div>
    </Link>
    </div>
    )}</div>
    </div>
  )
}
