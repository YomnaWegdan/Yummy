import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery("movies", getMovies);
  function getMovies() {
    return axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f597813c136fdbe4ff8e3e2976da14ad"
    );
  }
  return (
    <div>
      <div className="row  g-4 mt-5">
        {data?.data?.results.map((movie) => (
          <div className="col-lg-3 col-md-6" key={movie.id}>
            <div className="movie border border-light border-1 ">
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie-img" 
              className=" img-fluid object-fit-cover p-1" 
              />
              <div>
              {movie.title} ?<h2 className=" text-light">{movie.title}</h2>: <h2>No Title</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
