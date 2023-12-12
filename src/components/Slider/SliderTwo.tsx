'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderTwo = () => {
    return (
        <>
            <div className="slider-block style-one xl:h-[680px] lg:h-[560px] md:h-[440px] h-[300px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 5000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider2-1.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[50%] w-2/3 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading animate__animated animate__fadeInUp animate__delay-0-6s">Sale Off 50%</div>
                                            <div className="text-slider mt-3 animate__animated animate__fadeInUp animate__delay-0-8s">Fresh and Flavorful Smoothies</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 animate__animated animate__fadeInUp animate__delay-1s">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider2-2.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[50%] w-2/3 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading animate__animated animate__fadeInUp animate__delay-0-6s">Sale Off 50%</div>
                                            <div className="text-slider mt-3 animate__animated animate__fadeInUp animate__delay-0-8s">Exotic Twists for Your Palate</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 animate__animated animate__fadeInUp animate__delay-1s">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider2-3.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className='object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[40%] w-2/3  max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading animate__animated animate__fadeInUp animate__delay-0-6s">Sale Off 50%</div>
                                            <div className="text-slider mt-3 animate__animated animate__fadeInUp animate__delay-0-8s">Revitalize Your Day with Health</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 animate__animated animate__fadeInUp animate__delay-1s">Shop Now</Link>
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

export default SliderTwo