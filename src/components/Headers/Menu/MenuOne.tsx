'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useWishlist } from '@/context/WishlistContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useCart } from '@/context/CartContext';

const MenuOne = () => {
  const { openModalCart } = useModalCartContext()
  const { cartState } = useCart()
  const { openModalWishlist } = useModalWishlistContext()
  const { wishlistState } = useWishlist()
  const [fixedHeader, setFixedHeader] = useState(false)
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener('scroll', handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  const handleMenuMobile = () => {
    setOpenMenuMobile((toggleOpen) => !toggleOpen)
  }

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index)
  }

  return (
    <>
      <div className={`header-menu style-one box-shadow md:h-[80px] h-[60px] ${fixedHeader ? 'fixed' : 'relative'}`}>
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
            <div className="menu-main xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 h-full max-lg:hidden">
              <ul className='flex items-center gap-10 h-full'>
                <li className='h-full relative'>
                  <Link href="#!" className='text-button duration-300 h-full flex items-center justify-center gap-1 active'>
                    Home
                    <Icon.CaretDown size={12} color='grey' />
                  </Link>
                  <ul className='absolute sub-menu bg-white duration-300'>
                    <li>
                      <Link href="/" className='text-button duration-300 active'>
                        Home Smoothies
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home2" className='text-button duration-300'>
                        Home Fruit Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home3" className='text-button duration-300'>
                        Home Grain & nuts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='h-full relative'>
                  <Link href="#!" className='text-button duration-300 h-full flex items-center justify-center gap-1'>
                    Shop
                    <Icon.CaretDown size={12} color='grey' />
                  </Link>
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
                  <Link href="/about" className='text-button duration-300 h-full flex items-center justify-center'>
                    About
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/blog" className='text-button duration-300 h-full flex items-center justify-center'>
                    Blog
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/contact" className='text-button duration-300 h-full flex items-center justify-center'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-content flex gap-6">
              <div className="login-block flex items-center justify-center max-md:hidden">
                <Link href={'/login'} className='text-caption text-secondary hover:text-black duration-300'>Login/Register</Link>
              </div>
              <div className="list-icon flex">
                <div className="max-[450px]:hidden search-icon flex items-center justify-center md:pl-7 md:pr-7 md:border-x pl-2.5 pr-2.5 border-line cursor-pointer">
                  <Icon.MagnifyingGlass size={24} color='black' />
                </div>
                <div
                  className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pl-7 md:pr-7 md:border-r pl-2.5 pr-2.5 border-line relative cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color='black' />
                  <span className="quantity wishlist-quantity absolute md:right-5 md:top-5 right-1 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistState.wishlistArray.length}
                  </span>
                </div>
                <div
                  className="max-[450px]:mr-1 cart-icon flex items-center justify-center md:pl-7 md:pr-7 pl-2.5 pr-2.5 relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <Icon.Bag size={24} color='black' />
                  <span className="quantity cart-quantity absolute md:right-5 md:top-5 right-1 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
                <div className="menu-bumburger-icon flex items-center justify-center md:pl-7 md:pr-3 pl-2.5 lg:hidden cursor-pointer" onClick={handleMenuMobile}>
                  <Icon.List size={24} color='black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
        <div className="menu-container bg-white h-full">
          <div className="container h-full">
            <div className="menu-main h-full overflow-hidden">
              <div className="heading py-2 relative flex items-center justify-center">
                <div
                  className="close-menu-mobile-btn absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                  onClick={handleMenuMobile}
                >
                  <Icon.X size={14} />
                </div>
                <Link href={'/'} className='logo text-center'>
                  <Image
                    src="/images/Logo.png"
                    width={172}
                    height={43}
                    alt="Logo"
                    className='max-md:w-[120px]'
                  />
                </Link>
              </div>
              <div className="form-search relative mt-2">
                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                <input type="text" placeholder='Search something...' className=' h-12 rounded-lg border border-line text-sm w-full pl-12 pr-4' />
              </div>
              <div className="list-nav mt-6">
                <ul>
                  <li
                    className={`${openSubNavMobile === 1 ? 'open' : ''}`}
                    onClick={() => handleOpenSubNavMobile(1)}
                  >
                    <div className={`text-button-lg flex items-center justify-between`}>Home
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </div>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-2"
                        onClick={() => handleOpenSubNavMobile(1)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                        <ul>
                          <li>
                            <Link href="/" className={`nav-item-mobile link duration-300 active`}>
                              Home Smoothies
                            </Link>
                          </li>
                          <li>
                            <Link href="/homepages/home2" className={`nav-item-mobile link duration-300`}>
                              Home Fruits Vegetables
                            </Link>
                          </li>
                          <li>
                            <Link href="/homepages/home3" className={`nav-item-mobile link duration-300`}>
                              Home Grains & nuts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                    onClick={() => handleOpenSubNavMobile(2)}
                  >
                    <div className={`text-button-lg flex items-center justify-between mt-3`}>Shop
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </div>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-2"
                        onClick={() => handleOpenSubNavMobile(2)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                        <ul>
                          <li>
                            <Link href="/shop/shop-grid-fullwidth" className={`nav-item-mobile link duration-300`}>
                              Home Smoothies
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/shop-grid-sidebar" className={`nav-item-mobile link duration-300`}>
                              Home Fruits Vegetables
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/shop-list-sidebar" className={`nav-item-mobile link duration-300`}>
                              Home Grains & nuts
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href={'/about'} className={`text-button-lg flex items-center justify-between mt-3`}>About
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/blog'} className={`text-button-lg flex items-center justify-between mt-3`}>Blog
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contact'} className={`text-button-lg flex items-center justify-between mt-3`}>Contact
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOne