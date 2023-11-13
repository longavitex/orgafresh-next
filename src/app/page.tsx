import Image from 'next/image'
import React from 'react'
import MenuOne from '@/components/Headers/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import Category from '@/components/Home1/Category'
import Deal from '@/components/Home1/Deal'

export default function Home() {
  return (
    <>
      <MenuOne />
      <SliderOne />
      <Category />
      <Deal />
    </>
  )
}
