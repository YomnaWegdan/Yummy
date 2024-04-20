import React from 'react'
import { getCategories, useMeal } from './Hooks/useMeals';

export default function Categories() {
    const { data , isLoading } = useMeal("categories", getCategories);

  return (
    <div>
      
    </div>
  )
}
