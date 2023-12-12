'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'

const Cart = () => {
    const { cartState } = useCart();

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