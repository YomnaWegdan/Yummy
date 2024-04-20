import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/> },

      {path:'mealDetails/id' , element:<Home/> },


    ]}
  ])
  return (
    <div className="App">
    <RouterProvider router={routs}/>

    </div>
  );
}

export default App;
