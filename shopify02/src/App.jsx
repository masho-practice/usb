import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/men' element={<ShopCategory category='men'/>} />
          <Route path='/women' element={<ShopCategory category='Women'/>} />
          <Route path='/kids' element={<ShopCategory category='kids'/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
          </Route>       
        </Routes>
      </Router>
    </div>
  )
}

export default App