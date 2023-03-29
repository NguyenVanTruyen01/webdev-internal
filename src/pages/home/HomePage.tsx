import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import Products from '../../components/products/Products'
import ShopCart from '../../components/shop_cart/ShopCart'
import { useDispatch, useSelector } from 'react-redux'
import { ProductRequests } from '../../redux/requestAPI/productsRequests'
import data from '../../data/shoes.json'

const HomePage = () => {

    const shoes = data.shoes;
    const dispatch = useDispatch();

    useEffect(() => {
        ProductRequests.getProducts(shoes, dispatch)
    }, [dispatch])

    return (
        <div className='homepage'>

            <div className='contents'>
                <Products ></Products>
                <ShopCart ></ShopCart>
            </div>
        </div>
    )
}

export default HomePage
