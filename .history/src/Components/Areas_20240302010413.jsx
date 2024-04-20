import React from 'react'
import { getAreas, useMeal } from './Hooks/useMeals';

export default function Areas() {
    const { data , isLoading } = useMeal("categories", getAreas);
    console.log(data?.data?.areas)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
