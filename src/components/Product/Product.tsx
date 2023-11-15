import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Rate from '@/other/Rate'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface ProductProps {
    data: ProductType
}

const Product: React.FC<ProductProps> = ({ data }) => {
    const percentSale = 100 - ((data.price / data.originPrice) * 100)

    return (
        <div className="product-item">
            <Link href={'#!'} className="product-main bg-white rounded-2xl box-shadow block overflow-hidden">
                <div className="product-thumb relative">
                    {data.sale && (
                        <div className="product-sale text-xs text-white bg-orange px-3 py-0.5 inline-block rounded-full">
                            -{percentSale}%
                        </div>
                    )}
                    <Image
                        src={data.image}
                        width={500}
                        height={500}
                        alt={data.name}
                        className='product-img w-full h-full object-cover duration-300'
                    />
                    <div className="list-action flex flex-col items-center gap-2 max-lg:hidden">
                        <div className="quick-view-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative">
                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Quick View</div>
                            <Icon.MagnifyingGlass size={18} weight='bold' />
                        </div>
                        <div className="add-cart-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative">
                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Cart</div>
                            <Icon.Bag size={18} weight='bold' />
                        </div>
                        <div className="add-wishlist-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative">
                            <div className="tag-action bg-black text-white text-xs p-1 rounded-sm">Add To Wishlist</div>
                            <Icon.Heart size={18} weight='bold' />
                        </div>
                    </div>
                </div>
                <div className="product-infor flex flex-col items-center justify-center py-5 bg-white">
                    <Rate currentRate={data.rate}></Rate>
                    <div className="product-name font-semibold text-base mt-1 duration-300">{data.name}</div>
                    <div className="product-price-block flex items-center gap-3 mt-1">
                        <div className="product-price text-button">${data.price}.0</div>
                        {data.sale && (
                            <div className="product-origin-price text-button text-grey"><del>${data.originPrice}.0</del></div>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product