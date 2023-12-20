import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { ModalCartProvider } from '@/context/ModalCartContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <ModalCartProvider>
                {children}
            </ModalCartProvider>
        </CartProvider>
    )
}

export default GlobalProvider