import React from 'react'
import { getCategories, useMeal } from './Hooks/useMeals';

export default function Categories() {
    const { data , isLoading } = useMeal("categories", getCategories);
    console.log(data?.data?.categories        )

  return (
    <div>
      
    </div>
  )
}
