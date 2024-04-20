import React from 'react'
import { getAreas, useMeal } from './Hooks/useMeals';
import Loading from './Loading';

export default function Areas() {
    const { data , isLoading } = useMeal("categories", getAreas);
    console.log(data?.data)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
