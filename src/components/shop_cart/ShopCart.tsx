import React, { useEffect, useState } from 'react'
import './ShopCart.scss'
import nike from '../../assets/nike.png'
import CartItem from './cart-item/CartItem'
import Shoes from '../../interface/Shoes'
import { useSelector } from 'react-redux'

const ShopCart = (props: any) => {

    const { cart } = useSelector((state: any) => state?.cartItems)
    const [totalPrice, setTotalPrice] = useState<any>(0);

    const caculateTotalPrice = async () => {
        let total = 0;

        for (let index = 0; index < cart.length; index++) {
            total += cart[index].price * cart[index].quantity;
        }

        await setTotalPrice(total.toFixed(2));
        console.log(total);
    }

    useEffect(() => {
        caculateTotalPrice();
    }, [cart])

    return (
        <div className='shop_cart'>

            <div className='cart_header'>
                <img src={nike} alt="" className='icon_nike' />
                <div className='header_title'>Your cart
                    <span className='total_price'>${totalPrice}</span>
                </div>
            </div>

            <div className='group_items'>

                {
                    cart.length > 0 ? cart.flatMap(
                        (item: Shoes, index: number) => {
                            return <CartItem
                                key={index}
                                shoes={item}
                            ></CartItem>
                        }
                    ) :
                        <div className='cart_empty'>Your cart is emty</div>
                }


            </div>

        </div >
    )
}

export default ShopCart
