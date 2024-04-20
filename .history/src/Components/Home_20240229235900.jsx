import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function Home() {
    const {data } = useQuery('movies' , getMovies)
    function getMovies(){
        return axios.get('https://api.themoviedb.org/3/movie/550?api_key=19f84e11932abbc79e6d83f')

    }
  return (
    <div>
      
    </div>
  )
}
