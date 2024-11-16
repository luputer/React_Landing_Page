import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Component/product'



const Router = createBrowserRouter([
    {
        path: '/',
        element : <Home />
    },
    {
        path: '/product',
        element : <Product/>
    },
    
    
])



export default Router