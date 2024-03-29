'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/shop-grid-sidebar?category=${category}`);
    };

    return (
        <>
            <div className="category-block style-three md:pt-20 pt-12">
                <div className="container">
                    <div className="list-cate grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate4-1.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">New products</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Fresh Fruice</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate4-2.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">Sale of 30%</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Organic Oats</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer max-lg:hidden"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate4-3.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">Special recipe</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Fruits Dried</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner