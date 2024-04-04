import React from 'react'
import { Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
 
 
 
const Rout = ({shop,  addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop}   addtocart={addtocart}/>} />
       

       
    </Routes>
    </>
  )
}

export default Rout