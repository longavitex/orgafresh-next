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
                        className='w-full'
                    />
                    <div className="list-action flex items-center gap-2">
                        <div className="quick-view-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300">
                            <Icon.MagnifyingGlass size={18} />
                        </div>
                        <div className="add-wishlist-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300">
                            <Icon.Bag size={18} />
                        </div>
                        <div className="add-wishlist-btn w-[40px] h-[40px] flex items-center justify-center border border-line rounded-xl bg-white duration-300">
                            <Icon.Heart size={18} />
                        </div>
                    </div>
                </div>
                <div className="product-infor flex flex-col items-center justify-center py-5 bg-white">
                    <Rate currentRate={data.rate}></Rate>
                    <div className="product-name text-title mt-1">{data.name}</div>
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