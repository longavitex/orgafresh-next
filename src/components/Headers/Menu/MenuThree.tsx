import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuThree = () => {
    return (
        <>
            <div className='header-menu style-three box-shadow md:h-[50px] h-[40px] bg-brown max-sm:hidden'>
                <div className="container mx-auto h-full ">
                    <div className="header-main flex h-full relative">
                        <div className="shop-department lg:basis-1/3 basis-full xl:pr-12">
                            <div className="heading bg-orange text-white w-full h-full flex items-center pl-7 pr-7 gap-3 cursor-pointer">
                                <Icon.List size={20} />
                                <p className='text-lg font-normal'>Shop by Department</p>
                            </div>
                        </div>
                        <div className="shared-content flex justify-between w-full max-lg:justify-end">
                            <div className="menu-main h-full max-lg:hidden pl-10">
                                <ul className='flex items-center gap-10 h-full'>
                                    <li className='h-full relative'>
                                        <a href="#!" className='text-button text-white duration-300 h-full flex items-center justify-center gap-1'>
                                            Home
                                            <Icon.CaretDown size={12} color='white' />
                                        </a>
                                        <ul className='absolute sub-menu bg-white duration-300'>
                                            <li>
                                                <Link href="/" className='text-button duration-300'>
                                                    Home Smoothies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home2" className='text-button duration-300'>
                                                    Home Fruit Vegetables
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home3" className='text-button duration-300 active'>
                                                    Home Fast Food
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home4" className='text-button duration-300'>
                                                    Home Cake
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home5" className='text-button duration-300'>
                                                    Home Grain & nuts
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='h-full relative'>
                                        <a href="#!" className='text-button text-white duration-300 h-full flex items-center justify-center gap-1'>
                                            Shop
                                            <Icon.CaretDown size={12} color='white' />
                                        </a>
                                        <ul className='absolute sub-menu bg-white duration-300'>
                                            <li>
                                                <Link href="/shop/shop-grid-fullwidth" className='text-button duration-300'>
                                                    Shop Grid Fullwidth
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop/shop-grid-sidebar" className='text-button duration-300'>
                                                    Shop Grid Sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop/shop-list-sidebar" className='text-button duration-300'>
                                                    Shop List Sidebar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/about" className='text-button text-white duration-300 h-full flex items-center justify-center'>
                                            About
                                        </Link>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/blog" className='text-button text-white duration-300 h-full flex items-center justify-center'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/contact" className='text-button text-white duration-300 h-full flex items-center justify-center'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-content flex items-center text-right gap-1 text-white">
                                <span className='font-normal'>Hotline:</span>
                                <span>(+800) 345 678</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider h-[1000px]"></div>
        </>
    )
}

export default MenuThree