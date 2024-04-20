import React from 'react'
import { useParams } from 'react-router-dom'
import { Meals } from './Home';
import { getAreaMeals, getCategory, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
export default function AreaMeals() {

    
  let {name} = useParams();
    const { data , isLoading } = useMeal("getAreaMeals", ()=>getAreaMeals(name));

    console.log(name)

    if (isLoading) return <Loading/>

  return (
    <>
    <div className='row'>

    {data.data.meals.map((meal) => ( 
        <Meals key={meal.idMeal} meal={meal} />        ))}
</div>
    </>
  )
}
