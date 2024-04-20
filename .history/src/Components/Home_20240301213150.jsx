import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery("movies", getMeals);
  console.log(data?.data?.results)
  function getMeals() {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }
  return (
    <div>
      <div className="row  ">
        {data?meals.map((movie) => (
          <div className="col-lg-3 col-md-6" key={movie.id}>
            <div className="movie border border-light border-1 ">
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie-img" 
              className=" img-fluid object-fit-cover p-1" 
              />
              <div>
              <h2 className="text-light">{movie.title}</h2>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
