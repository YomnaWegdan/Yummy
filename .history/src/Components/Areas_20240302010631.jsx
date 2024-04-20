import React from 'react'
import { getAreas, useMeal } from './Hooks/useMeals';
import Loading from './Loading';

export default function Areas() {
    const { data , isLoading } = useMeal("categories", getAreas);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>
  return (
    <div>
      <div className='row'>
      {data?.data?.meals.map((area)=>
        <div class="col-xl-3 col-lg-6 text-white">
            <div id='imgArea' class="img imgArea text-center">
                <i class="fa fa-solid fa-house-laptop fa-4x text-white"></i>
                <h3 class=' mt-2 '>${(data[i].strArea)}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
