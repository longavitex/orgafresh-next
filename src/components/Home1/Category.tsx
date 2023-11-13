import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Category = () => {
    return (
        <>
            <div className="category-block style-one bg-surface pt-14 pb-12">
                <div className="container">
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 2xl:gap-14 lg:gap-8 md:gap-x-20 md:gap-y-8 gap-x-4 gap-y-6">
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-0.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Orange</Link>
                            </div>
                        </div>
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-1.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Carrot</Link>
                            </div>
                        </div>
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-2.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Blueberry</Link>
                            </div>
                        </div>
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-3.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Strawberry</Link>
                            </div>
                        </div>
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-4.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Water Melon</Link>
                            </div>
                        </div>
                        <div className="cate-item">
                            <Link href={'/shop/shop-grid-fullwidth'} className="cate-img block 2xl:rounded-[64px] md:rounded-[32px] rounded-[16px] border-transparent border duration-300 overflow-hidden">
                                <Image
                                    src="/images/category/Mask-Group-5.jpg"
                                    width={188}
                                    height={188}
                                    alt="Logo"
                                    className='w-full duration-300'
                                />
                            </Link>
                            <div className="cate-name text-center text-cate md:mt-5 mt-2">
                                <Link href={'/shop/shop-grid-fullwidth'} className='duration-300'>Mixed Juice</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category