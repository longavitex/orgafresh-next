'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Product from './Product';
import { ProductType } from '@/type/ProductType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import Rate from '../Other/Rate';
import { useCart } from '@/context/CartContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';

SwiperCore.use([Navigation, Thumbs]);

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const ProductDetail: React.FC<Props> = ({ data, productId }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const productMain = data[Number(productId) - 1]

    const handleSwiper = (swiper: SwiperCore) => {
        setThumbsSwiper(swiper);
    };

    const handleAddToWishlist = () => {
        if (!wishlistState.wishlistArray.find(item => item.id === productMain.id)) {
            addToWishlist(productMain);
        }
        openModalWishlist()
    };

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain.id, productMain.quantityPurchase + 1);
    };

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain.id, productMain.quantityPurchase - 1);
        }
    };

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === productMain.id)) {
            addToCart({ ...productMain });
            updateCart(productMain.id, productMain.quantityPurchase)
        } else {
            updateCart(productMain.id, productMain.quantityPurchase)
        }
        openModalCart()
    };


    return (
        <>
            <div className="product-detail md:pt-20 pt-12">
                <div className="container flex max-md:flex-col gap-y-6">
                    <div className="left md:w-1/2 sm:w-[70%] lg:pr-[35px] md:pr-[20px]">
                        <div className="list-img w-full">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs]}
                                className="mySwiper border border-line rounded-2xl overflow-hidden"
                            >
                                {productMain.listImage.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            key={index}
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt='prd-img'
                                            className='w-full object-cover'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={handleSwiper}
                                spaceBetween={0}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs]}
                                className="mySwiper2 mt-3"
                            >
                                {productMain.listImage.map((item, index) => (
                                    <SwiperSlide key={index} className='rounded-xl'>
                                        <Image
                                            key={index}
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt='prd-img'
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="right md:w-1/2 w-full lg:pl-[35px] md:pl-[20px]">
                        <div className="product-infor">
                            <div className="heading pb-6 border-b border-line">
                                <div className="text-heading capitalize pb-3">{productMain.name}</div>
                                <div className="flex items-center gap-1">
                                    <Rate currentRate={productMain.rate} />
                                    <div className="text-title text-grey">(6 reviews)</div>
                                </div>
                                <div className="price flex items-end gap-3 mt-3">
                                    <div className="text-button-lg">${productMain.price}.0</div>
                                    <div className="product-origin-price text-button text-grey"><del>${productMain.originPrice}.0</del></div>
                                </div>
                            </div>
                            <div className="desc text-secondary mt-6">{productMain.description}</div>
                            <div className="more-infor mt-7">
                                <div className="flex items-center gap-1 capitalize">
                                    <div className="text-secondary">Categories:</div>
                                    <p>{productMain.category}</p>
                                </div>
                                <div className="flex items-center gap-1 capitalize mt-1">
                                    <div className="text-secondary">Type:</div>
                                    <p>{productMain.type}</p>
                                </div>
                            </div>
                            <div className="list-action flex items-center flex-wrap gap-5 mt-5 lg:pb-10 pb-6 border-b border-line">
                                <div className="text-title text-secondary">Quantity:</div>
                                <div className="quantity-block md:p-3 p-1 flex items-center justify-between rounded-lg border border-line w-[120px] h-[50px]">
                                    <Icon.Minus
                                        size={16}
                                        className={`cursor-pointer ${productMain.quantityPurchase === 1 ? 'disabled' : ''}`}
                                        onClick={handleDecreaseQuantity}
                                    />
                                    <div className="body1 font-semibold">{productMain.quantityPurchase}</div>
                                    <Icon.Plus
                                        size={16}
                                        className='cursor-pointer'
                                        onClick={handleIncreaseQuantity}
                                    />
                                </div>
                                <div className="button-main bg-orange cursor-pointer h-[50px] flex items-center gap-2" onClick={handleAddToCart}>
                                    <span>
                                        <Icon.Bag size={18} weight='bold' />
                                    </span>
                                    Add To Cart
                                </div>
                                <div
                                    className="add-wishlist-btn w-[50px] h-[50px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative"
                                    onClick={handleAddToWishlist}
                                >
                                    <Icon.Heart size={20} weight='bold' />
                                </div>
                            </div>
                            <div className="menu-tab-block lg:mt-10 mt-6">
                                <div className="menu-tab flex items-center lg:gap-8 gap-6 pb-3 border-b border-line">
                                    <div className="tab-item text-button cursor-pointer active">Description</div>
                                    <div className="tab-item text-button cursor-pointer">Additional information</div>
                                    <div className="tab-item text-button cursor-pointer">Reviews (5)</div>
                                </div>
                                <div className="text-caption text-secondary mt-4">Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem. Cras suscipit, sapien in pellentesque hendrerit, dolor quam ornare nisl, vitae tempus nibh urna eget sem. Duis non interdum arcu, sit amet pellentesque odio. In sit amet aliquet augue.
                                    Sed lobortis elit nec lacus congue tristique. Sed nunc orci, imperdiet et accumsan ac, tempor ut ante. Fusce ac magna maximus, malesuada tellus sed, sodales ligula. Sed a justo vel erat mollis vulputate. Donec dolor justo, porta sit amet ultricies ut, pulvinar a metus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="related-product md:pt-20 md:pb-8 pt-12">
                <div className="container">
                    <div className="main-content">
                        <div className="heading">
                            <div className="text-heading text-center">Related Products</div>
                        </div>
                        <div className="list-product style-outline relative md:mt-10 mt-6">
                            <Swiper
                                spaceBetween={8}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}
                                loop={true}
                                modules={[Navigation, Autoplay]}
                                autoplay={{ delay: 4000 }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1400: {
                                        slidesPerView: 5,
                                        spaceBetween: 24,
                                    },
                                }}
                                className='pb-12'
                            >
                                {
                                    data.slice(Number(productId), Number(productId) + 5).length < 5 ? (
                                        <>
                                            {
                                                data.slice(1, 6).map((prd, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Product data={prd} type='col' />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <>
                                            {
                                                data.slice(Number(productId), Number(productId) + 5).map((prd, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Product data={prd} type='col' />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail