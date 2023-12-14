'use client'

import React from 'react'
import Product from '../Product/Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    limit: number;
}

const Deal: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="deal-block md:pt-20 pt-12 md:pb-20 pb-12">
                <div className="container">
                    <div className="main-content">
                        <div className="heading flex items-center justify-center flex-wrap gap-y-4 gap-9">
                            <div className="text-heading">Deal Of The Week:</div>
                            <div className="list-time flex items-center gap-3">
                                <div className="time bg-orange md:w-[42px] md:h-[40px] w-[36px] h-[34px] flex items-center justify-center text-white text-cate rounded-md day">20</div>
                                <span className='text-cate text-black'>:</span>
                                <div className="time bg-orange md:w-[42px] md:h-[40px] w-[36px] h-[34px] flex items-center justify-center text-white text-cate rounded-md hour">14</div>
                                <span className='text-cate text-black'>:</span>
                                <div className="time bg-orange md:w-[42px] md:h-[40px] w-[36px] h-[34px] flex items-center justify-center text-white text-cate rounded-md minute">04</div>
                                <span className='text-cate text-black'>:</span>
                                <div className="time bg-orange md:w-[42px] md:h-[40px] w-[36px] h-[34px] flex items-center justify-center text-white text-cate rounded-md second">11</div>
                            </div>
                        </div>
                        <div className="list-product deal md:mt-8 mt-6 border-2 border-orange rounded-lg">
                            <Swiper
                                spaceBetween={8}
                                slidesPerView={2}
                                navigation
                                loop={true}
                                modules={[Navigation, Autoplay]}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                className='style-outline-border h-full relative md:pt-5 md:pb-8 md:px-5 pt-3 pb-5 px-2'
                            >
                                {data.slice(0, limit).map((prd, index) => (
                                    <SwiperSlide key={index}>
                                        <Product data={prd} type='col' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal