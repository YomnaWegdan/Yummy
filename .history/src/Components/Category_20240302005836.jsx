import React from 'react'
import { useParams } from 'react-router-dom'
import { Meals } from './Home';

export default function Category() {
    let {name} = useParams();
    const { data , isLoading } = useMeal("meals", getMeals);

    console.log(name)
  return (
    <div>
    {data.data.meals.map((meal) => ( 
        <Meals key={meal.idMeal} meal={meal} />        ))}
    </div>
  )
}
