import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Products from './Components/Products/Products';
import { useEffect, useState } from 'react';
function App() {
   const [count, setCount] = useState(0)
    const setCartCount=()=>{
        setCount(count+1)
    }
   
  return (
    <div className="App">
      <h1 className='text-info'>Wellcome to fake store</h1>
      <Menubar count={count}> </Menubar>
      <Products setCartCount={setCartCount}></Products>
    </div>
  );
}
//  37 mit
export default App;
