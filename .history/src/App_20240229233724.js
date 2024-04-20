import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<P><Home/>/></ProtectedRoute> },
    ]}
  ])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
