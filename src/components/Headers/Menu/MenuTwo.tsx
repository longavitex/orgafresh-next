'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import { useWishlist } from '@/context/WishlistContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useCart } from '@/context/CartContext';

const MenuTwo = () => {
  const pathname = usePathname()
  const { openModalCart } = useModalCartContext()
  const { cartState } = useCart()
  const { openModalWishlist } = useModalWishlistContext()
  const { wishlistState } = useWishlist()

  return (
    <>
      <div className='header-menu style-two box-shadow md:h-[80px] h-[60px]'>
        <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full relative">

            <div className="menu-main h-full max-lg:hidden">
              <ul className='flex items-center gap-10 h-full'>
                <li className='h-full relative'>
                  <Link href="#!" className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname.includes('/homepages/') ? 'active' : ''}`}>
                    Home
                    <Icon.CaretDown size={12} color='grey' />
                  </Link>
                  <ul className='absolute sub-menu bg-white duration-300'>
                    <li>
                      <Link href="/" className='text-button duration-300'>
                        Home Smoothies
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home2" className={`text-button duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                        Home Fruit Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home3" className='text-button duration-300'>
                        Home Cake
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home4" className='text-button duration-300'>
                        Home Grain & nuts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='h-full relative'>
                  <Link href="#!" className={`text-button duration-300 h-full flex items-center justify-center gap-1 first-letter ${pathname.includes('/shop/') ? 'active' : ''}`}>
                    Shop
                    <Icon.CaretDown size={12} color='grey' />
                  </Link>
                  <ul className='absolute sub-menu bg-white duration-300'>
                    <li>
                      <Link href="/shop/shop-grid-fullwidth" className={`text-button duration-300 ${pathname === '/shop/shop-grid-fullwidth' ? 'active' : ''}`}>
                        Shop Grid Fullwidth
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/shop-grid-sidebar" className={`text-button duration-300 ${pathname === '/shop/shop-grid-sidebar' ? 'active' : ''}`}>
                        Shop Grid Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/shop-list-sidebar" className={`text-button duration-300 ${pathname === '/shop/shop-list-sidebar' ? 'active' : ''}`}>
                        Shop List Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='h-full'>
                  <Link href="/about" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/about') ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/blog" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/blog') ? 'active' : ''}`}>
                    Blog
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/contact" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/contact') ? 'active' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={'/'} className='flex items-center justify-center h-full w-fit xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'>
              <Image
                src="/images/Logo.png"
                width={172}
                height={43}
                alt="Logo"
                className='max-md:w-[120px]'
              />
            </Link>
            <div className="right-content flex gap-8">
              <div className="login-block flex items-center justify-center max-md:hidden">
                <Link href={'/login'} className='text-caption text-secondary'>Login/Register</Link>
              </div>
              <div className="list-icon flex">
                <div className="max-[450px]:hidden search-icon flex items-center justify-center md:pr-5 pr-3 cursor-pointer">
                  <Icon.MagnifyingGlass size={24} color='black' />
                </div>
                <div className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pr-7 pr-4 relative cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color='black' />
                  <span className="quantity wishlist-quantity absolute md:right-5 md:top-5 right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistState.wishlistArray.length}
                  </span>
                </div>
                <div className="max-[450px]:hidden cart-icon flex items-center justify-center relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <Icon.Bag size={24} color='black' />
                  <span className="quantity cart-quantity absolute md:top-5 -right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
                <div className="menu-bumburger-icon flex items-center justify-center md:pl-7 pl-4 lg:hidden cursor-pointer">
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

export default MenuTwo