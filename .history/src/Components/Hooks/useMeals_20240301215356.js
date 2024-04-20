import axios from "axios";

function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }


  function useMeal(key , fun){

  }