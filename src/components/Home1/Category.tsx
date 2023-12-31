"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Category = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/shop/shop-grid-sidebar?taste=${category}`);
    };

    return (
        <>
            <div className="category-block style-one bg-surface md:pt-14 md:pb-12 pt-9 pb-8">
                <div className="container">
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 2xl:gap-14 lg:gap-8 md:gap-x-20 md:gap-y-8 gap-x-[10px] gap-y-5">
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('lemon')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-0.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Lemon</div>
                        </div>
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('peach')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-1.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Peach</div>
                        </div>
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('blueberry')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-2.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Blueberry</div>
                        </div>
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('strawberry')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-3.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Strawberry</div>
                        </div>
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('watermelon')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-4.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Water Melon</div>
                        </div>
                        <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('mixed-juice')}>
                            <div className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-5.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </div>
                            <div className="cate-name text-center text-cate duration-300 md:mt-5 mt-2">Mixed Juice</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category