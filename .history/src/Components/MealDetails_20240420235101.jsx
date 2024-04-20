import React from 'react'
import { useParams } from 'react-router-dom'
import { getMealDetails, useMeal } from './Hooks/useMeals'
import Loading from './Loading';

export default function MealDetails() {
    const {id} = useParams()
    console.log("ID:", id);
    const {data , isLoading , isError ,error} =useMeal('mealDetails', () => getMealDetails(id));;

    console.log(data?.data?.meals[0].strArea)
    if(isLoading) return <Loading/>
    if(isError) return <h3>{error.message}</h3>
    console.log(data)



    function generateIngredientsList(meal) {
        const ingredientsList = [];
    
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
    
            // Check if the property exists in the object
            if (meal.hasOwnProperty(ingredientKey)) {
                const ingredient = meal[ingredientKey];
                const measure = meal[measureKey];
    
                // Check if either ingredient or measure is not an empty string
                if ((ingredient && ingredient.trim() !== '') || (measure && measure.trim() !== '')) {
                    ingredientsList.push(<li className="alert alert-info m-2 p-1">{measure} {ingredient}</li>);
                }
            }
        }
    
        return ingredientsList;
    }
    
    


  return (
    <div >
    <div className='row align-items-center justify-content-between min-vh-100'>
        <div className='col-lg-4 col-md-12 h-100 text-light'>
            <h2>{data.data.meals[0].strMeal}</h2>
            <img src={data.data.meals[0].strMealThumb} alt={data.data.meals[0].strMeal} className='w-100 rounded-2'/>
        </div>
        <div className='col-lg-8 col-md-12 h-100'>
        <div className='card-details bg-light p-5  shadow-lg  '>
            <div> 
                <h2>Instructions</h2>
                <p>{data.data.meals[0].strInstructions}</p>
            </div>
        <div className=' text-start'>
        <h3>Area : {data.data.meals[0].strArea}</h3>
                <h3>Category : {data.data.meals[0].strCategory}</h3>
                    <h3>Recipes : </h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                    { generateIngredientsList(data.data.meals[0])}
                       
                    </ul>
                <div class='d-flex'>
                    <h3>Tags : {data.data.meals[0].strTags}                    </h3>
                </div>
                <div class='mt-2'>
                    <button class='btn btn-success mx-2' ><a class='text-white text-decoration-none' href={data.data.meals[0].strSource}>Source</a></button> 
                    <button class='btn btn-danger'><a class='text-white text-decoration-none' href={data.data.meals[0].strYoutube}>Youtube</a></button> 
                </div>
                </div></div>


        </div>

    </div>
      
    </div>
  )
}
