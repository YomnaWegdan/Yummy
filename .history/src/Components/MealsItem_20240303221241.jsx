import React from 'react'
import { Link } from 'react-router-dom'

export default function MealsItem({meal}) {
  return (
    <>
    <div className="col-lg-3 col-md-6" key={meal.idMeal}>
    <Link to={`/mealDetails/${meal.idMeal}`}>
      <div className="img border border-light border-1 ">
        <img
          src={meal.strMealThumb}
          alt="meal-img"
          className="img img-fluid object-fit-cover p-1"
        />
        <div className="img-overlay">
          <h3 className="position-absolute top-50 start-50 text-black translate-middle">{meal.strMeal}</h3>
        </div>
      </div>
    </Link>
  </div>
    </>
  )
}
