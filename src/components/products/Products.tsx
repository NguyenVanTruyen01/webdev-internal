import React, { useState } from 'react'
import './Products.scss'
import nike from '../../assets/nike.png'
import ProductCard from './product_card/ProductCard'
import Shoes from '../../interface/Shoes'
import { useSelector } from 'react-redux'

const Products = (props: any) => {

    const { products } = useSelector((state: any) => state?.products)

    return (
        <div className='products'>
            <div className='products_header'>
                <img src={nike} alt="" className='icon_nike' />
                <div className='header_title'>Our Products</div>
            </div>

            <div className='products_contents' >

                {
                    products ? products.flatMap(
                        (shoes: Shoes, index: number) => {
                            return <ProductCard
                                key={index}
                                shoes={shoes}
                            ></ProductCard>
                        }
                    )
                        :
                        <div className='products_empty'>Products is emty</div>
                }
            </div>

        </div>
    )
}

export default Products
