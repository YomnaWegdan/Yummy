import React from 'react'

export default function Ingredients() {
    const { data , isLoading } = useMeal("categories", getCategories);
    console.log(data?.data?.categories)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
