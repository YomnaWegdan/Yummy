import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';
import Loading from './Loading';

export default function Ingredients() {
    const { data , isLoading } = useMeal("categories", getIngredients);
    console.log(data?.data)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
