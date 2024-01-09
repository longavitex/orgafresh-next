'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Category = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        // Redirect to shop with selected category
        router.push(`/shop/shop-grid-sidebar?category=${category}`);
    };

    return (
        <>
            <div className="category-block style-two md:pt-20 pt-12">
                <div className="container">
                    <div className="content-main">
                        <div className="heading flex items-center justify-between gap-4 flex-wrap">
                            <div className="text-heading">Shop By Categories</div>
                        </div>
                        <div className="list-category md:mt-10 mt-7">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={2}
                                speed={300}
                                navigation
                                loop={true}
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 3000,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                    },
                                }}
                                className='h-full relative border border-line'
                            >
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('vegetables')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/vegetables.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='vegetables'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">Vegetables</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('fruits')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/fruits.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='fruits'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">fresh fruits</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('grains')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/grains.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='grains'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">grains & nuts</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('meats')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/meats.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='meats'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">fresh meats</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('smoothies')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/smoothies.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='smoothies'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">smoothies</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cate-item p-6 border-r border-line flex items-center justify-center cursor-pointer duration-300 hover:box-shadow" onClick={() => handleCategoryClick('cakes')}>
                                        <div className="main">
                                            <div className="bg-img">
                                                <Image
                                                    src={'/images/category/nuts.png'}
                                                    width={1000}
                                                    height={1000}
                                                    alt='nuts'
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="text-cate text-center">nuts</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category