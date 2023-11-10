import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuOne = () => {
  return (
    <>
      <div className='header-menu style-one box-shadow md:h-[80px] h-[60px]'>
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
                  <a href="#!" className='text-button duration-300 h-full flex items-center justify-center gap-1'>
                    Home
                    <Icon.CaretDown size={12} color='grey' />
                  </a>
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
                  <a href="#!" className='text-button duration-300 h-full flex items-center justify-center gap-1'>
                    Shop
                    <Icon.CaretDown size={12} color='grey' />
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
                <Link href={'/login'} className='text-caption text-secondary'>Login/Register</Link>
              </div>
              <div className="list-icon flex">
                <div className="max-[450px]:hidden search-icon flex items-center justify-center md:pl-7 md:pr-7 md:border-x pl-2.5 pr-2.5 border-line cursor-pointer">
                  <Icon.MagnifyingGlass size={24} color='black' />
                </div>
                <div className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pl-7 md:pr-7 md:border-r pl-2.5 pr-2.5 border-line relative cursor-pointer">
                  <Icon.Heart size={24} color='black' />
                  <span className="quantity wishlist-quantity absolute md:right-5 md:top-5 right-1 top-2.5 text-xs text-white bg-orange px-1.5 pt-0.5 pb-0.5 rounded-full">0</span>
                </div>
                <div className="max-[450px]:hidden cart-icon flex items-center justify-center md:pl-7 md:pr-7 pl-2.5 pr-2.5 relative cursor-pointer">
                  <Icon.Bag size={24} color='black' />
                  <span className="quantity cart-quantity absolute md:right-5 md:top-5 right-1 top-2.5 text-xs text-white bg-orange px-1.5 pt-0.5 pb-0.5 rounded-full">0</span>
                </div>
                <div className="menu-bumburger-icon flex items-center justify-center md:pl-7 md:pr-3 pl-2.5 lg:hidden cursor-pointer">
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

export default MenuOne