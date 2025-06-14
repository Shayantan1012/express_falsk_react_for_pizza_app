import Home from './Pages/Home'
import React, { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/pageNotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/productDetails'
import CartDetails from './Pages/Cart/cartDeteails'
import Order from './Pages/Order/Order'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequireAuth from './Components/Auth/RequireAuth'
import { useSelector } from 'react-redux'
import AllProductDetails from './Pages/AllProducts'
import styles from './App.module.scss'
import About from './Pages/About'
import SignUp from './Pages/Auth/SignUP'

function App() {
const {cartData}=useSelector((state)=>state.cart);
const { isLoggedIn, role } = useSelector((state) => state.auth);
  let userId=cartData?.user
  useEffect(() => {
    if(isLoggedIn){
    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('intent', 'WELCOME'); // Default intent
    dfMessenger.setAttribute('chat-title', 'WEIGHTER-BOT');
    dfMessenger.setAttribute('agent-id', '55de1bc9-a80e-469a-a7d6-fe2dc2c05b14'); // Your Dialogflow agent ID
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('user-id', userId); // Attach dynamic user ID
    document.body.appendChild(dfMessenger); // Append to the DOM
    return () => {
      // Cleanup the component on unmount
      document.body.removeChild(dfMessenger);
    };
  }
}, [isLoggedIn,userId]);

const requireRole=useSelector(state=>state.auth)
  return (
<div >
<Routes class={styles.appContainer}>
<Route path='/auth/denied' element={<Denied/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/auth/signup' element={<SignUp/>}/>
<Route path='/auth/login' element={<Login/>}/> 
<Route path='/about' element={<About/>}/>
<Route element={<RequireAuth />}>
          <Route path='/order' element={<Order />} />
          <Route path='/order/success' element={<OrderSuccess />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<CartDetails />} />

          {(requireRole.role === 'ADMIN' )? 
            <Route path='/admin/addproduct' element={<AddProduct />} /> :null
}
        </Route>
        <Route path='/product/allProduct' element={<AllProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>

</Routes>
    </div>
  )
}
export default App
