import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const TopNavThree = () => {
    return (
        <>
            <div className='top-nav style-two md:h-[80px] h-[60px] bg-white'>
                <div className="container mx-auto h-full">
                    <div className="header-main flex justify-between h-full relative">
                        <Link href={'/'} className='flex items-center justify-center h-full w-fit'>
                            <Image
                                src="/images/Logo.png"
                                width={172}
                                height={43}
                                alt="Logo"
                                className='max-md:w-[120px]'
                            />
                        </Link>
                        <div className="header-search flex items-center basis-1/2 max-lg:hidden px-2">
                            <input className='w-full h-[46px] px-5 border border-line border-r-0 rounded-l-full' type="text" placeholder='Enter your keyword...' /> 
                            <button className='bg-orange text-white h-[46px] px-6 rounded-r-full text-button'>Search</button>
                        </div>
                        <div className="right-content flex gap-5">
                            <div className="login-block flex items-center justify-center max-md:hidden">
                                <Link href={'/login'} className='text-caption'>Login/Register</Link>
                            </div>
                            <div className="list-icon flex">
                                <div className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pr-6 pr-4 relative cursor-pointer">
                                    <Icon.Heart size={24} color='black' />
                                    <span className="quantity wishlist-quantity absolute md:right-4 md:top-5 right-2 top-2.5 text-xs text-white bg-orange px-1.5 pt-0.5 pb-0.5 rounded-full">0</span>
                                </div>
                                <div className="max-[450px]:hidden cart-icon flex items-center justify-center relative cursor-pointer">
                                    <Icon.Bag size={24} color='black' />
                                    <span className="quantity cart-quantity absolute -right-2 md:top-5 top-2.5 text-xs text-white bg-orange px-1.5 pt-0.5 pb-0.5 rounded-full">0</span>
                                </div>
                                <div className="menu-bumburger-icon flex items-center justify-center md:pl-6 pl-4 lg:hidden cursor-pointer">
                                    <Icon.List size={24} color='black' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavThree