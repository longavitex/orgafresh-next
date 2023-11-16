import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface DealProps {
    data: Array<ProductType>;
    limit: number;
}

const BestSeller: React.FC<DealProps> = ({ data, limit }) => {
    return (
        <>
            <div className="best-seller-block pt-20 pb-20">
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">Best Sellers</div>
                        <div className="text-heading mt-2">Shop By Categories</div>
                    </div>
                    <div className="list-cate flex items-center lg:justify-center gap-4 mt-6">
                        <div className="active cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Carrot
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Blueberry
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Strawberry
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Water Melon
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Mango
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Apple
                        </div>
                        <div className="cate-item text-button px-4 py-3 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white">
                            Mixed Juice
                        </div>

                    </div>
                    <div className="list mt-8">
                        <div className="list-product grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full">
                            {data.slice(8, limit).map((p, index) => (
                                <Product key={index} data={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller