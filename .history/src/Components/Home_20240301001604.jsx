import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery("movies", getMovies);
  console.log(data.data.results);
  function getMovies() {
    return axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f597813c136fdbe4ff8e3e2976da14ad"
    );
  }
  return (
    <div>
      <div className="row mt-5">
        {data?.data?.results.map((movie) => (
          <div className="col-lg-4 col-md-6" key={movie.id}>
            <div className="movie">
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="i"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
