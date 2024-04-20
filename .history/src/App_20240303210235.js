import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import MealDetails from './Components/MealDetails';
import Search from './Components/Search';
import Categories from './Components/Categories';
import Category from './Components/Category';
import Areas from './Components/Areas';
import AreaMeals from './Components/AreaMeals';
import Ingredients from './Components/Ingredients';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/> },
      {path:'/search', element:<Search/>},
      {path:'/categories', element:<Categories/>},
      {path:'/area', element:<Areas/>},
      {path:'/ingredients', element:<Ingredients/>},
      



      

      {path:'/mealDetails/:id', element:<MealDetails/>},
      {path:'/categories/:name', element:<Category/>},
      {path:'/area/:name', element:<AreaMeals/>}





    ]}
  ])
  return (
    <div className="App">
    <RouterProvider router={routs}/>

    </div>
  );
}

export default App;
