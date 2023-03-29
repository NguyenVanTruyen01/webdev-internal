import React, { useState } from 'react'
import './CartItem.scss'
import trash from '../../../assets/trash.png'
import { useDispatch, useSelector } from 'react-redux'
import Shoes from '../../../interface/Shoes'
import { DeleteData, EditData } from '../../../redux/globalHandle/globalHandle'
import { CartRequests } from '../../../redux/requestAPI/cartRequests'

type CartItemProps = {
    shoes: Shoes
}

const CartItem = ({ shoes }: CartItemProps) => {

    const { cart } = useSelector((state: any) => state?.cartItems)
    let product: Shoes = { ...cart.find((item: Shoes) => item.id === shoes.id) }
    const dispatch = useDispatch()

    const handleDeleteProductOfCart = () => {
        const newCart = DeleteData(cart, shoes.id);
        CartRequests.removeProduct(newCart, dispatch)
    }

    const reduceQuantity = () => {
        product.quantity = (product.quantity ?? 0) - 1;
        if (product.quantity < 1) {
            handleDeleteProductOfCart();
        }
        else {
            const newCart = EditData(cart, product.id, product);
            console.log("New Cart", newCart)
            CartRequests.updateProducts(newCart, dispatch)
        }
    }

    const increaseQuantity = () => {
        product.quantity = (product.quantity ?? 0) + 1;
        console.log(product)

        const newCart = EditData(cart, product.id, product);
        console.log("New Cart", newCart)
        CartRequests.updateProducts(newCart, dispatch)
    }

    return (
        <div className='cart_item'>

            <div className='item_img cart-list-enter-active ' style={{ background: `${shoes.color}` }}>
                <img src={shoes.image} alt="" />
            </div>

            <div className='item_contents'>

                <div className='item_name'>
                    {
                        shoes.name
                    }
                </div>

                <div className='item_price' >
                    ${shoes.price}
                </div>

                <div className='item_action'>
                    <div className='action_count'>
                        <div className='btn btn_reduce' onClick={reduceQuantity}>-</div>
                        <div className='quantity'>{shoes?.quantity}</div>
                        <div className='btn btn_increase' onClick={increaseQuantity}>+</div>
                    </div>

                    <div className='btn_remove' onClick={handleDeleteProductOfCart}>
                        <img src={trash} alt="btn trash" />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default CartItem
