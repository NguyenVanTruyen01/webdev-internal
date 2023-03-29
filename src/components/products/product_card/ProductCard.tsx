import React, { useEffect, useState } from 'react'
import './ProductCard.scss'
import Shoes from '../../../interface/Shoes'
import { useDispatch, useSelector } from 'react-redux'
import { CartRequests } from '../../../redux/requestAPI/cartRequests'

type CardProps = {
    shoes: Shoes,
}

const ProductCard = ({ shoes }: CardProps) => {

    const { cart } = useSelector((state: any) => state?.cartItems)

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        let product: Shoes = {
            ...shoes
        }
        product.quantity = 1;
        console.log("Product: ", product)
        CartRequests.addProduct(product, dispatch)
    }

    return (
        <div className='product_card'>
            <div className='product_img' style={{ background: `${shoes.color}` }}>
                <img src={shoes.image} alt="" />
            </div>
            <div className='product_name'>
                {shoes.name}
            </div>
            <div className='product_desc'>
                {shoes.description}
            </div>

            <div className='group_action'>
                <div className='product_price'>${shoes.price}</div>

                {
                    cart?.length === 0 || (cart?.length > 0 && !cart.find((item: Shoes) => item?.id === shoes?.id)) ?
                        <button className='btn_add' onClick={handleAddToCart}>Add to cart</button>
                        :
                        <div className='btn_active'>
                            <div className='btn_cover'>
                                <div className='icon_active'></div>
                            </div>
                        </div>



                }
            </div>


        </div >

    )
}

export default ProductCard
