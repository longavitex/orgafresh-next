import React from 'react'
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import productData from '@/data/Product.json'
import ShopProduct from '@/components/Shop/ShopProduct'
import Footer from '@/components/Footer/Footer'

const ShopGridFullwidth = () => {
    return (
        <div className='home-two'>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Shop Grid Fullwidth" subTitle="Shop Grid" />
            <div className="container">
                <ShopProduct data={productData} productPerPage={20} />
            </div>
            <Footer borderTop={true} />
        </div>
    )
}

export default ShopGridFullwidth