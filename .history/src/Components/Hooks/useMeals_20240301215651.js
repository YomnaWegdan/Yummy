import axios from "axios";
import { useQuery } from "react-query";

export function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
}

export function getMealDetails() {
    return axios.get(
      ``
    );
}


export function useMeal(key , func){
    return useQuery(key , func)

  }