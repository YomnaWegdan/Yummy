import React from 'react'
import { getAreas, useMeal } from './Hooks/useMeals';
import Loading from './Loading';
import { FaLaptopHouse } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Areas() {
    const { data , isLoading } = useMeal("categories", getAreas);
    console.log(data?.data?.meals)

    if (isLoading) return <Loading/>
  return (
    <div>
      <div className='row'>
      {data?.data?.meals.map((area)=>
        <div class="col-xl-3 col-lg-6 text-white mt-5">
        <Link to={`/categories/${area.strArea}`} >

            <div  className="img imgArea text-center">
                <FaLaptopHouse className='fs-90'/>
                <h3 className=' mt-2 '>{(area.strArea)}</h3>
            </div></Link>
          </div>
        )}
      </div>
    </div>
  )
}
