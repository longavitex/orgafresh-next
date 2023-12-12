import React from 'react'
import { CartProvider } from '@/context/CartContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}

export default GlobalProvider