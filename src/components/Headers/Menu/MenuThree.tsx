import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuThree = () => {
  return (
    <>
      <div className='header-menu style-four bg-brown box-shadow md:h-[80px] h-[60px]'>
        <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full relative">
            
            <div className="menu-main h-full max-lg:hidden">
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
                      <Link href="/homepages/home4" className='text-button duration-300 active'>
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
            <Link href={'/'} className='flex items-center justify-center h-full w-fit xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'>
              <Image
                src="/images/Logo-white.png"
                width={172}
                height={43}
                alt="Logo"
                className='max-md:w-[120px]'
              />
            </Link>
            <div className="right-content flex gap-14">
              <div className="hotline flex items-center max-md:hidden">
                <p className='text-white'>Hotline: (+800) 345 678</p>
              </div>
              <div className="list-icon flex">
                <div className="max-[450px]:hidden search-icon flex items-center justify-center md:pr-5 pr-3 cursor-pointer">
                  <Icon.MagnifyingGlass size={24} color='white'/>
                </div>
                <div className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pr-7 pr-4 relative cursor-pointer">
                  <Icon.Heart size={24} color='white' />
                  <span className="quantity wishlist-quantity absolute md:right-5 md:top-5 right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">0</span>
                </div>
                <div className="max-[450px]:hidden cart-icon flex items-center justify-center relative cursor-pointer">
                  <Icon.Bag size={24} color='white' />
                  <span className="quantity cart-quantity absolute md:top-5 -right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">0</span>
                </div>
                <div className="menu-bumburger-icon flex items-center justify-center md:pl-7 pl-4 lg:hidden cursor-pointer">
                  <Icon.List size={24} color='white' />
                </div>
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