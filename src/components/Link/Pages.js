import React from 'react'
import MainPage from '../Page/MainPage'
import Products from '../Pruducts/Products'
import Product from '../Pruducts/Product'
import { Routes, Route, Switch } from 'react-router-dom'

const Pages = () => {

    return <>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='/product/:productid' element={<Product />} />
        </Routes>
    </>

}

export default Pages