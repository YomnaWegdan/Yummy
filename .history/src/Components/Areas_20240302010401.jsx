import React from 'react'

export default function Areas() {
    const { data , isLoading } = useM("categories", getCategories);
    console.log(data?.data?.categories)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
