import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import { Route } from'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Worker from './Components/Worker.jsx'
import User from './Components/User.jsx'
import Order from './Components/Order.jsx'
import Product from './Components/Product.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}> 
  <Route path='/Home' element={<Home/>}/>
  <Route path='/worker' element={<Worker/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path='/order' element={<Order/>}/> 
  <Route path='/product' element={<Product/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
