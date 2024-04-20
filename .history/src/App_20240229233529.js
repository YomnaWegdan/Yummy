import logo from './logo.svg';
import './App.css';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
      {path:'/cart', element: <ProtectedRoute><Cart/></ProtectedRoute>},
    ]}
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
