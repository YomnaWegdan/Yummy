import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

export default function Home() {
  const { data , isLoading } = useQuery("meals", getMeals);
  console.log(data?.data?.meals); // Ensure data is properly fetched

  function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }

  if (isLoading) return <Loading/>

  return (
    <div>
      <div className="row">
        {data.data.meals.map((meal) => ( // Fix typo here
          <div className="col-lg-3 col-md-6" key={meal.mealId}>
            <div className="img border border-light border-1 ">
              <img
                src={meal.strMealThumb}
                alt="meal-img"
                className="img-fluid object-fit-cover p-1"
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
