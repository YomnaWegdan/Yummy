import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function Home() {
    const {data } = useQuery('movies' , getMovies)
    console.log(data?.data?.id)
    function getMovies(){
        return axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=f597813c136fdbe4ff8e3e2976da14ad')
    }
  return (
    <div>
    <div className='row'>
    </div>
      
    </div>
  )
}
