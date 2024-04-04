import React, { useState } from 'react'
import Nav from './component/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './component/rout'
import Homeproduct from './component/home_product'
 

const App = () => {
 
  const [cart, setCart] = useState([])
  
  const [shop, setShop] = useState(Homeproduct)
  
  const addtocart = (product) =>
  {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is alleardy added in cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Added To cart")
    }
  }

  
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout setCart={setCart} cart={cart} shop={shop}   addtocart={addtocart}/>
    </BrowserRouter>
    </>
  )
}

export default App