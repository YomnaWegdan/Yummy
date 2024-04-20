import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";
import { getMeals, useMeal } from "./Hooks/useMeals";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data , isLoading } = useMeal("meals", getMeals);
  console.log(data?.data?.meals); // Ensure data is properly fetched

 

  if (isLoading) return <Loading/>

  return (
    <div>
      <div className="row">
        {data.data.meals.map((meal) => ( // Fix typo here
          <div className="col-lg-3 col-md-6" key={meal.mealId}>
          <NavLink to={}></NavLink>
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
          </div>
        ))}
      </div>
    </div>
  );
}
