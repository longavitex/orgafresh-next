'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'

const Cart = () => {
    const { cartState } = useCart();
    console.log(cartState);
    console.log(cartState.cartArray);
    

    return (
        <>
            <div>Shopping cart</div>
            <div className="list-product">
                {cartState.cartArray.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </div>
        </>
    )
}

export default Cart