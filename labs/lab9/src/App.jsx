import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductList from './ProductList.jsx'
import ProductListWithReducer from './ProductListWithReducer.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    // <div className='counter'>
    //   <button onClick={() => setCount(count+1)}>+1</button> 

    //   <div style={{
    //     width: '50px', 
    //     height: '50px', 
    //     display: 'flex', 
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    //     border: '1px solid black',
    //   }}>
    //     {count}
    //   </div>

    //   <button onClick={() => setCount(count-1)}>-1</button>

        

    // </div>
    <div>
      <h1>Product List</h1>
      <ProductList />
      <h1>Product List with Reducer</h1>
      <ProductListWithReducer />
    </div>

   
    
  )
}

export default App
