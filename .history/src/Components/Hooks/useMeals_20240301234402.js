import axios from "axios";
import { useQuery } from "react-query";

export function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
}

export function getMealDetails(mealId) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
}
//   https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}

export function getMealsBySearch(input) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
}

export function getMealsBySearch(input) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
}


`https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`

export function useMeal(key , func){
    return useQuery(key , func)

  }