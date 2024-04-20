import React from 'react'
import { getIngredients, useMeal } from './Hooks/useMeals';

export default function Ingredients() {
    const { data , isLoading } = useMeal("categories", getIngredients);
    console.log(data?.data?.categories)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
