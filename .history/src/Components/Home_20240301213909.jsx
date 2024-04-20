import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery("meals", getMeals);
  console.log(data.data.meals); // Ensure data is properly fetched

  function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }

  return (
    <div>
      <div className="row">
        
      </div>
    </div>
  );
}
