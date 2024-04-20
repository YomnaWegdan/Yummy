import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import MealDetails from './Components/MealDetails';
import Search from './Components/Search';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/> },
      {path:'/search', element:<Search/>},
      {path:'/categories', element:<Search/>},



      {path:'/mealDetails/:id', element:<MealDetails/>}



    ]}
  ])
  return (
    <div className="App">
    <RouterProvider router={routs}/>

    </div>
  );
}

export default App;
