import React, { useState } from 'react';
import { getMealsBySearch, getMealsSearchByFName, useMeal } from './Hooks/useMeals';
import MealsItem from './MealsItem';
import Loading from './Loading';
import { useQuery } from 'react-query';

export default function Search() {
    const [nameQuery, setNameQuery] = useState(``);
    const [letterQuery, setLetterQuery] = useState('');

    const { data: nameData, isLoading:nameIsLoading , refetch:reftchSearchName } = useQuery("mealsBySearch", () => getMealsBySearch(nameQuery));
    const { data: letterData, isLoading:letterIsLoading } = useQuery("mealsBySearchByFName", () => getMealsSearchByFName(letterQuery));

    console.log(nameData)
    console.log(nameIsLoading)
    console.log(letterData)
    console.log(letterIsLoading)
    const handleNameInputChange = (e) => {
        setNameQuery(e.target.value);
    };

    const handleLetterInputChange = (e) => {
        setLetterQuery(e.target.value);
    };

        if (nameIsLoading ) return <Loading/>;


    return (
        <div>
            <div className="row min-vh-100">
                <div className="col-lg-6 col-md-12 mt-5">
                    <input placeholder="Search By Name" className="form-control" 
                        value={nameQuery}  onChange={handleNameInputChange}/>
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <input placeholder="Search By First Letter" className="form-control" 
                        value={letterQuery}    onChange={handleLetterInputChange}/>
                </div>                         

                {letterQuery && !letterIsLoading && letterData && letterData.data && letterData.data.meals && letterData.data.meals.map((meal) => ( 
                    <MealsItem key={meal.idMeal} meal={meal} />
                ))}

                {nameQuery && !nameIsLoading && nameData && nameData.data && nameData.data.meals && nameData.data.meals.map((meal) => ( 
                    <MealsItem key={meal.idMeal} meal={meal} />
                ))}

                {(letterIsLoading || nameIsLoading) && <Loading />}

            </div>
        </div>
    );
}



// import React, { useState } from "react";
// import { getMealsBySearch, getMealsSearchByFName, useMeal } from "./Hooks/useMeals";
// import MealsItem from "./MealsItem";
// import Loading from "./Loading";
// import { Meals } from "./Home";

// export default function Search() {
//     const [nameQuery, setNameQuery] = useState('');
//     const [letterQuery, setLetterQuery] = useState('');

//     const { data: nameData, isLoading: nameIsLoading } = useMeal("mealsBySearch", () => getMealsBySearch(nameQuery));
//     const { data: letterData, isLoading: letterIsLoading } = useMeal("mealsBySearchByFName", () => getMealsSearchByFName(letterQuery));

//     const handleNameInputChange = (e) => {
//         setNameQuery(e.target.value);
//     };

//     const handleLetterInputChange = (e) => {
//         setLetterQuery(e.target.value);
//     };

//     if (nameIsLoading || letterIsLoading) return <Loading/>;

//     return (
//         <div>
//             <div className="row min-vh-100">
//                 <div className="col-lg-6 col-md-12 mt-5">
//                     <input placeholder="Search By Name" className="form-control" 
//                         value={nameQuery} onChange={handleNameInputChange}/>
//                 </div>
//                 <div className="col-lg-6 col-md-12 mt-5">
//                     <input placeholder="Search By First Letter" className="form-control" 
//                         value={letterQuery} onChange={handleLetterInputChange}/>
//                 </div>

//                 {nameData.data.meals.map((meal) => ( 
//                     <Meals key={meal.idMeal} meal={meal} />
//                 ))}

//                 {letterData.data.meals.map((meal) => ( 
//                     <Meals key={meal.idMeal} meal={meal} />
//                 ))}
//             </div>
//         </div>
//     );
// }
