import React from 'react'
import { useMeal } from './Hooks/useMeals';

export default function Areas() {
    const { data , isLoading } = useMeal("categories", getCategories);
    console.log(data?.data?.categories)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}