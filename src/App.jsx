import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import Default from './pages/Default'
import Productos from './pages/Productos'
import ProductoDetail from './pages/ProductoDetail'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <h1 className='text-5xl'>Routes</h1>
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/productos/:productID" element={<ProductoDetail/>}/>

          <Route path="*" element={<Default/>}/>

        
      </Routes>


    </div>
      
  )
}

export default App
