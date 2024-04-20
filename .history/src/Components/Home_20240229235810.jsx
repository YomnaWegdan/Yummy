import React from 'react'
import { useQuery } from 'react-query'

export default function Home() {
    const {data } = useQuery('movies' , get)
    function getMovies(){

    }
  return (
    <div>
      
    </div>
  )
}
