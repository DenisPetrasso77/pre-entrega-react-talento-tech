import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { CartProvider } from './context/CartContext/CartProvider'
import { Nav } from './components/Nav/Nav' // si lo estás usando
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
