import React from 'react'
import { useParams } from 'react-router-dom'
import { Meals } from './Home';
import { getCategory, useMeal } from './Hooks/useMeals';
import Loading from './Loading';

export default function Category() {
    let {name} = useParams();
    const { data , isLoading } = useMeal("getCategory", ()=>getCategory(name));

    console.log(name)

    if (isLoading) return <Loading/>

  return (
    <>
    <div className=''></div>

    {data.data.meals.map((meal) => ( 
        <Meals key={meal.idMeal} meal={meal} />        ))}

    </>
  )
}
