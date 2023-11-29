import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ProductType>;
    limit: number;
}

const BestSeller: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="best-seller-block md:pt-20 pt-10 md:pb-20 pb-10">
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">Best Sellers</div>
                        <div className="text-heading mt-2">Shop By Categories</div>
                    </div>
                    <div className="list-cate flex items-center lg:justify-center md:gap-4 gap-3 mt-6 max-sm:mt-4 max-sm:pb-3">
                        <div className="active cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Peach
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Blueberry
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Strawberry
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Water Melon
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Mango
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Apple
                        </div>
                        <div className="cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Mixed Juice
                        </div>

                    </div>
                    <div className="list mt-8">
                        <div className="list-product grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 gap-y-5 w-full">
                            {data.slice(8, limit).map((prd, index) => (
                                <Product key={index} data={prd} type='col' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller