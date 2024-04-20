import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getMealsBySearch, getMealsSearchByFName } from './Hooks/useMeals';
import MealsItem from './MealsItem';
import Loading from './Loading';

export default function Search() {
    const [nameQuery, setNameQuery] = useState('');
    const [letterQuery, setLetterQuery] = useState('');

    // Use React Query to fetch meals by name
    const { data: nameData, isLoading: nameIsLoading, refetch: refetchSearchName } = useQuery(["mealsByName", nameQuery], () => getMealsBySearch(nameQuery));

    // Use React Query to fetch meals by first letter
    const { data: letterData, isLoading: letterIsLoading, refetch: refetchSearchLetter } = useQuery(["mealsByFirstLetter", letterQuery], () => getMealsSearchByFName(letterQuery));

    const handleNameInputChange = (e) => {
        setNameQuery(e.target.value);
    };

    const handleLetterInputChange = (e) => {
        setLetterQuery(e.target.value);
    };

    return (
        <div>
            <div className="row min-vh-100">
                <div className="col-lg-6 col-md-12 mt-5">
                    <input placeholder="Search By Name" className="form-control"
                        value={nameQuery} onChange={handleNameInputChange} />
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <input placeholder="Search By First Letter" className="form-control"
                        value={letterQuery} onChange={handleLetterInputChange} />
                </div>

                {/* Render meals by first letter */}
                {!letterIsLoading && letterData && letterData.meals && letterData.meals.map((meal) => (
                    <MealsItem key={meal.idMeal} meal={meal} />
                ))}

                {/* Render meals by name */}
                {!nameIsLoading && nameData && nameData.meals && nameData.meals.map((meal) => (
                    <MealsItem key={meal.idMeal} meal={meal} />
                ))}

                {(letterIsLoading || nameIsLoading) && <Loading />}

            </div>
        </div>
    );
}


// import React, { useState } from 'react';
// import { getMealsBySearch, getMealsSearchByFName, useMeal } from './Hooks/useMeals';
// import MealsItem from './MealsItem';
// import Loading from './Loading';
// import { useQuery } from 'react-query';

// export default function Search() {
//     const [nameQuery, setNameQuery] = useState('');
//     const [letterQuery, setLetterQuery] = useState('');

//     const { data: nameData, isLoading:nameIsLoading , refetch:refetchSearchName } = useQuery("mealsBySearch", () => getMealsBySearch(nameQuery));
//     const { data: letterData, isLoading:letterIsLoading  , refetch:refetchSearchLetter} = useQuery("mealsBySearchByFName", () => getMealsSearchByFName(letterQuery));

//     console.log(nameData)
//     console.log(letterData)
//     const handleNameInputChange = (e) => {
//         refetchSearchName()
//         setNameQuery(e.target.value);
//     };

//     const handleLetterInputChange = (e) => {
//         refetchSearchLetter()
//         setLetterQuery(e.target.value);
//     };

//         if (nameIsLoading ) return <Loading/>;


//     return (
//         <div>
//             <div className="row min-vh-100">
//                 <div className="col-lg-6 col-md-12 mt-5">
//                     <input placeholder="Search By Name" className="form-control" 
//                         value={nameQuery}  onChange={handleNameInputChange}/>
//                 </div>
//                 <div className="col-lg-6 col-md-12 mt-5">
//                     <input placeholder="Search By First Letter" className="form-control" 
//                         value={letterQuery}    onChange={handleLetterInputChange}/>
//                 </div>                         

//                 {letterQuery && !letterIsLoading && letterData && letterData.data && letterData.data.meals && letterData.data.meals.map((meal) => ( 
//                     <MealsItem key={meal.idMeal} meal={meal} />
//                 ))}

//                 {nameQuery && !nameIsLoading && nameData && nameData.data && nameData.data.meals && nameData.data.meals.map((meal) => ( 
//                     <MealsItem key={meal.idMeal} meal={meal} />
//                 ))}

//                 {(letterIsLoading || nameIsLoading) && <Loading />}

//             </div>
//         </div>
//     );
// }



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
