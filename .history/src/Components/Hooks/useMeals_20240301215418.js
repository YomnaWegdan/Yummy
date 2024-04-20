import axios from "axios";
import { useQuery } from "react-query";

function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }


  function useMeal(key , func){
    useQuery(key , func)

  }