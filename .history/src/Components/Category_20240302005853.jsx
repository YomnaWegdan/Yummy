import React from 'react'
import { useParams } from 'react-router-dom'
import { Meals } from './Home';
import { getCategory, useMeal } from './Hooks/useMeals';

export default function Category() {
    let {name} = useParams();
    const { data , isLoading } = useMeal("getCategory", getCategory);

    console.log(name)
  return (
    <div>
    {data.data.meals.map((meal) => ( 
        <Meals key={meal.idMeal} meal={meal} />        ))}
    </div>
  )
}
