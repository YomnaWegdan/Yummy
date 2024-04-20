import React from 'react'
import { useMeal } from './Hooks/useMeals';

export default function Categories() {
    const { data , isLoading } = useMeal("categories", getMeals);

  return (
    <div>
      
    </div>
  )
}
