import React from 'react'
import MenuOne from '@/components/Headers/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import Category from '@/components/Home1/Category'
import Deal from '@/components/Home1/Deal'
import productData from '@/data/Product.json'
import BestProduct from '@/components/Home1/BestProduct'
import BestSeller from '@/components/Home1/BestSeller'
import SpecialProduct from '@/components/Home1/SpecialProduct'
import Blog from '@/components/Home1/BlogSection'
import blogData from '@/data/Blog.json'
import ReviewSection from '@/components/Home1/ReviewSection'
import reviewData from '@/data/Review.json'
import Footer from '@/components/Footer/Footer'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/components/Other/countdownTime'

const Home = () => {
  const serverTimeLeft: CountdownTimeType = countdownTime();

  return (
    <div className='home-one'>
      <MenuOne />
      <SliderOne />
      <Category />
      <Deal data={productData} limit={7} serverTimeLeft={serverTimeLeft} />
      <BestProduct />
      <BestSeller data={productData} limit={4} />
      <SpecialProduct data={productData} limit={20} />
      <Blog data={blogData} limit={3} />
      <ReviewSection data={reviewData} limit={3} />
      <Footer borderTop={false} />
    </div>
  )
}

export default Home