import React from 'react'
import { useParams } from 'react-router-dom'
import { Meals } from './Home';
import {  getIngredientsMeals, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import MealsItem from './MealsItem';
export default function IngredientsMeals() {
    let {name} = useParams();
    const { data , isLoading } = useMeal("getIngredientsMeals", ()=>getIngredientsMeals(name));
    console.log(data)

    console.log(name)

    if (isLoading) return <Loading/>
  return (
    <>
    <div className='row'>

    {data.data.meals.map((meal) => ( 
        <MealsItem key={meal.idMeal} meal={meal} />        ))}
</div>
    </>
  )
}
