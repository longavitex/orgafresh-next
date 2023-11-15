'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one lg:h-[680px] h-auto w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider-1-1.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content 2xl:basis-2/5 lg:basis-1/2 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-slider">Take your health to new heights with a tall glass of juice.</div>
                                            <div className="text-cate md:mt-5 mt-3">Make your BreakfastHealthy and Easy</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6">Shop Now</Link>
                                        </div>
                                        <div className="sub-img absolute w-1/2 2xl:-right-[60px] lg:right-4 max-lg:hidden top-1/2 -translate-y-1/2">
                                            <Image
                                                src={'/images/slider/sub-img-1.png'}
                                                width={1000}
                                                height={400}
                                                alt='bg-slider'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider-1-2.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center justify-end relative">
                                        <div className="sub-img absolute w-1/2 2xl:-left-[60px] 2xl:-top-[60px] lg:left-4 max-lg:hidden">
                                            <Image
                                                src={'/images/slider/sub-img-1-2.png'}
                                                width={1000}
                                                height={400}
                                                alt='bg-slider'
                                            />
                                        </div>
                                        <div className="text-content text-center 2xl:basis-2/5 lg:basis-1/2 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Sale Off 50%</div>
                                            <div className="text-slider">Smoothie Fruits
                                                Organic Health Recipe</div>
                                            <div className="text-title text-secondary md:mt-5 mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider-1-3.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content text-center 2xl:basis-2/5 lg:basis-1/2 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Sale Off 50%</div>
                                            <div className="text-slider">Smoothie Fruits
                                                Organic Health Recipe</div>
                                            <div className="text-title text-secondary md:mt-5 mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderOne