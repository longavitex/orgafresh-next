'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Rate from '@/components/Other/Rate'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext'
import { useRouter } from 'next/navigation'

interface ProductProps {
    data: ProductType
    type: string
}

const Product: React.FC<ProductProps> = ({ data, type }) => {
    const percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext();
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
    const { openModalWishlist } = useModalWishlistContext();
    const { openQuickview } = useModalQuickviewContext()
    const router = useRouter()

    const handleClickCart = () => {
        if (!cartState.cartArray.find(item => item.id === data.id)) {
            addToCart({ ...data })
            updateCart(data.id, 1)
        } else {
            updateCart(data.id, 1)
        }
        openModalCart(); //open modal cart
    };

    const handleClickWishlist = () => {
        if (wishlistState.wishlistArray.some(item => item.id === data.id)) {
            removeFromWishlist(data.id)
        } else {
            addToWishlist(data); // Truyền dữ liệu sản phẩm vào hàm addToWishlist
        }
        openModalWishlist(); //open modal cart
    };

    const handleQuickviewOpen = () => {
        openQuickview(data)
    }

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product-detail?id=${productId}`);
    };

    return (
        <>
            {type === "col" ? (
                <div className="product-item col-type h-full">
                    <div onClick={() => handleDetailProduct(data.id)} className="product-main bg-white rounded-2xl border border-line block h-full overflow-hidden duration-500 cursor-pointer">
                        <div className="product-thumb relative">
                            {data.sale && (
                                <div className="product-sale text-xs text-white bg-orange md:px-3 px-2 py-0.5 inline-block rounded-full">
                                    -{percentSale}%
                                </div>
                            )}
                            <Image
                                src={data.image}
                                width={500}
                                height={500}
                                alt={data.name}
                                className='product-img w-full h-full object-cover duration-300'
                            />
                            <div className="list-action flex flex-col items-center gap-2 max-lg:hidden">
                                <div
                                    className="quick-view-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleQuickviewOpen()
                                    }}
                                >
                                    <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Quick View</div>
                                    <Icon.MagnifyingGlass size={18} weight='bold' />
                                </div>
                                <div
                                    className="add-cart-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative"
                                    onClick={(e) => {
                                        handleClickCart()
                                        e.stopPropagation()
                                    }}
                                >
                                    <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Cart</div>
                                    <Icon.Bag size={18} weight='bold' />
                                </div>
                                <div
                                    className=
                                    {`add-wishlist-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative ${wishlistState.wishlistArray.some(item => item.id === data.id) ? 'added-wishlist' : ''}`}
                                    onClick={(e) => {
                                        handleClickWishlist()
                                        e.stopPropagation()
                                    }}
                                >
                                    <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Wishlist</div>
                                    {
                                        wishlistState.wishlistArray.some(item => item.id === data.id) ?
                                            <Icon.Heart size={18} weight='fill' className='text-orange' /> :
                                            <Icon.Heart size={18} weight='bold' />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="product-infor flex flex-col items-center justify-center md:py-5 py-3 bg-white">
                            <Rate currentRate={data.rate}></Rate>
                            <div className="product-name font-semibold md:text-base text-sm capitalize mt-1 px-3 text-center duration-300">{data.name}</div>
                            <div className="product-price-block flex items-center gap-3 mt-1">
                                <div className="product-price text-button">${data.price}.0</div>
                                {data.sale && (
                                    <div className="product-origin-price text-button text-grey"><del>${data.originPrice}.0</del></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {type === 'row-1' ? (
                        <>
                            <div className="product-item row-type">
                                <div onClick={() => handleDetailProduct(data.id)} className="product-main h-full flex items-center gap-4 bg-white rounded-2xl duration-500 overflow-hidden cursor-pointer">
                                    <div className="product-thumb relative">
                                        {data.sale && (
                                            <div className="product-sale text-xs text-white bg-orange px-3 py-0.5 inline-block rounded-full">
                                                -{percentSale}%
                                            </div>
                                        )}
                                        <Image
                                            src={data.image}
                                            width={158}
                                            height={158}
                                            alt={data.name}
                                            className='product-img object-cover duration-300'
                                        />
                                    </div>
                                    <div className="product-infor pr-5 bg-white">
                                        <Rate currentRate={data.rate}></Rate>
                                        <div className="product-name font-semibold text-base capitalize mt-1 duration-300">{data.name}</div>
                                        <div className="product-price-block flex items-center gap-3 mt-1">
                                            <div className="product-price text-button">${data.price}.0</div>
                                            {data.sale && (
                                                <div className="product-origin-price text-button text-grey"><del>${data.originPrice}.0</del></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {type === 'row-2' ? (
                                <>
                                    <div className="product-item row-type">
                                        <div onClick={() => handleDetailProduct(data.id)} className="product-main h-full flex items-center gap-4 bg-white rounded-2xl duration-500 overflow-hidden cursor-pointer">
                                            <div className="product-thumb relative">
                                                {data.sale && (
                                                    <div className="product-sale text-xs text-white bg-orange px-3 py-0.5 inline-block rounded-full">
                                                        -{percentSale}%
                                                    </div>
                                                )}
                                                <Image
                                                    src={data.image}
                                                    width={158}
                                                    height={158}
                                                    alt={data.name}
                                                    className='product-img object-cover duration-300'
                                                />
                                            </div>
                                            <div className="product-infor pr-5 bg-white">
                                                <Rate currentRate={data.rate}></Rate>
                                                <div className="product-name font-semibold text-base capitalize mt-1 duration-300">{data.name}</div>
                                                <div className="product-price-block flex items-center gap-3 mt-1">
                                                    <div className="product-price text-button">${data.price}.0</div>
                                                    {data.sale && (
                                                        <div className="product-origin-price text-button text-grey"><del>${data.originPrice}.0</del></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {type === 'list' && (
                                        <>
                                            <div className="product-item list-type">
                                                <div className="product-main h-full flex items-center justify-between cursor-pointer">
                                                    <div
                                                        className="left flex items-center lg:gap-14 sm:gap-8 gap-4 w-full"
                                                        onClick={() => handleDetailProduct(data.id)}
                                                    >
                                                        <div className="product-thumb xl:w-[40%] lg:w-2/3 max-sm:w-1/2 relative block border border-line overflow-hidden">
                                                            {data.sale && (
                                                                <div className="product-sale text-xs text-white bg-orange px-3 py-0.5 inline-block rounded-full">
                                                                    -{percentSale}%
                                                                </div>
                                                            )}
                                                            <Image
                                                                src={data.image}
                                                                width={1000}
                                                                height={1000}
                                                                alt={data.name}
                                                                className='product-img w-full block aspect-square object-cover duration-300'
                                                            />
                                                        </div>
                                                        <div className="product-infor md:pr-10 max-sm:w-1/2">
                                                            <div className="product-name text-cate capitalize pb-3 duration-300">{data.name}</div>
                                                            <Rate currentRate={data.rate}></Rate>
                                                            <div className="product-price-block flex items-center gap-3 mt-2">
                                                                <div className="product-price text-button">${data.price}.0</div>
                                                                {data.sale && (
                                                                    <div className="product-origin-price text-button text-grey"><del>${data.originPrice}.0</del></div>
                                                                )}
                                                            </div>
                                                            <div className="text-title text-grey mt-3 max-lg:hidden">{data.description}</div>
                                                        </div>
                                                    </div>
                                                    <div className="right list-action flex flex-col items-center gap-2">
                                                        <div className="quick-view-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative">
                                                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Quick View</div>
                                                            <Icon.MagnifyingGlass size={18} weight='bold' />
                                                        </div>
                                                        <div
                                                            className="add-cart-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative"
                                                            onClick={handleClickCart}
                                                        >
                                                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Cart</div>
                                                            <Icon.Bag size={18} weight='bold' />
                                                        </div>
                                                        <div className="add-wishlist-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative">
                                                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Wishlist</div>
                                                            <Icon.Heart size={18} weight='bold' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )
            }
        </>
    )
}

export default Product