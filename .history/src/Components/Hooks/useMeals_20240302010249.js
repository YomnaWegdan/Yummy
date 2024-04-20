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

export function getMealsBySearch(input) {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
}

export function getMealsSearchByFName(input) {
    return axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
        );
}

//   www.themealdb.com/api/json/v1/1/categories.php

export function getCategories() {
  return axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
}

export function getCategory(categoryName) {
  return axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
}

//   https://www.themealdb.com/api/json/v1/1/list.php?a=list

export function useMeal(key , func){
    return useQuery(key , func)

  }