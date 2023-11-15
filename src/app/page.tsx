import Image from 'next/image'
import React from 'react'
import MenuOne from '@/components/Headers/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import Category from '@/components/Home1/Category'
import Deal from '@/components/Home1/Deal'
import productData from '@/data/Product.json'
import BestProduct from '@/components/Home1/BestProduct'
import BestSeller from '@/components/Home1/BestSeller'

export default function Home() {
  return (
    <>
      <MenuOne />
      <SliderOne />
      <Category />
      <Deal data={productData} limit={7} />
      <BestProduct />
      <BestSeller data={productData} limit={12} />
    </>
  )
}
