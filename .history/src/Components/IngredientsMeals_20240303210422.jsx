import React from 'react'

export default function IngredientsMeals() {
    let {name} = useParams();
    const { data , isLoading } = useMeal("getAreaMeals", ()=>getAreaMeals(name));
    console.log(data)

    console.log(name)

    if (isLoading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}
