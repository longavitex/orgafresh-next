'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import productData from '@/data/Product.json'

const Cart = () => {
    const { cartState, updateCart, addToCart, removeFromCart } = useCart();
    const router = useRouter()
    const [productQuantity, setProductQuantity] = useState<Record<string, number>>({});

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: newQuantity,
        }));
    };

    const handleDecreaseQuantity = (productId: string) => {
        const currentQuantity = productQuantity[productId] || 0;
        const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
        handleQuantityChange(productId, newQuantity);
    };

    const handleIncreaseQuantity = (productId: string) => {
        const currentQuantity = productQuantity[productId] || 0;
        const newQuantity = currentQuantity + 1;
        handleQuantityChange(productId, newQuantity);
    };

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product-detail?id=${productId}`);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="About Us" subTitle="About Us" />
            <div className="cart-product md:py-20 py-12">
                <div className="container">
                    <div className="content-main">
                        <div>
                            <div className="heading flex items-center pb-4 border-b border-line">
                                <div className="text-cate basis-5/12 text-center">Product name</div>
                                <div className="text-cate basis-1/6 text-center">Price</div>
                                <div className="text-cate basis-1/6 text-center">Quantity</div>
                                <div className="text-cate basis-1/6 text-center">Total</div>
                                <div className="text-cate basis-1/12 text-center"></div>
                            </div>
                            <div className="list-product md:pb-8 pb-5 border-b border-line">
                                {cartState.cartArray.map((product) => (
                                    <div
                                        key={product.id}
                                        className="item md:mt-8 mt-5"
                                    >
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-6 basis-5/12 cursor-pointer"
                                                onClick={() => handleDetailProduct(product.id)}
                                            >
                                                <div className="bg-img md:w-32 w-24 md:h-32 h-24 border border-line rounded-lg overflow-hidden">
                                                    <Image
                                                        src={product.image}
                                                        width={500}
                                                        height={500}
                                                        alt={product.name}
                                                        className='w-full h-full object-cover'
                                                    />
                                                </div>
                                                <div>
                                                    <div className="text-button-lg capitalize">{product.name}</div>
                                                    <div className="text-title text-grey capitalize mt-2">{product.type}</div>
                                                </div>
                                            </div>
                                            <div className="text-button-lg basis-1/6 text-center">${product.price}.0</div>
                                            <div className="basis-1/6 flex items-center justify-center">
                                                <div className="quantity-block md:p-3 p-2 flex items-center justify-between rounded-lg border border-line w-[120px] h-[50px]">
                                                    <Icon.Minus
                                                        onClick={() => handleDecreaseQuantity(product.id)}
                                                        className={`text-xl max-md:text-base cursor-pointer ${productQuantity[product.id] === 1 ? 'disabled' : ''}`}
                                                    />
                                                    <div className="body1 font-semibold">{productQuantity[product.id] || 1}</div>
                                                    <Icon.Plus
                                                        onClick={() => handleIncreaseQuantity(product.id)}
                                                        className='text-xl max-md:text-base cursor-pointer'
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-button-lg basis-1/6 text-center">${product.price * (productQuantity[product.id] || 1)}.0</div>
                                            <div className="text-button-lg basis-1/12 flex items-center justify-end">
                                                <Icon.XCircle weight='fill' className='text-orange text-button-lg duration-300 cursor-pointer hover:text-black' onClick={() => removeFromCart(product.id)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="action flex justify-between flex-wrap gap-5 md:mt-10 mt-6">
                        <Link href={'/'} className="button-main bg-[#ECECEC] text-black uppercase hover:bg-orange hover:text-white h-fit">Continute shopping</Link>
                        <div className="total-block bg-[#ECECEC] px-8 py-6 rounded-2xl w-[360px]">
                            <div className="text-button  uppercase pb-2 border-b border-line">Cart total</div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="text-caption">Total</div>
                                <div className="text-button">$500.0</div>
                            </div>
                            <Link href={'/checkout'} className="button-main mt-4 w-full text-center">PROCEED TO CHECKOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default Cart