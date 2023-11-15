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
                    <div className="heading flex items-end justify-between flex-wrap gap-2">
                        <div className="left">
                            <div className="text-subheading">Best Sellers</div>
                            <div className="text-heading mt-2">Shop By Categories</div>
                        </div>
                        <Link href={'/shop/shop-grid-fullwidth'} className='text-lg max-md:text-base border-b border-green border-b-2'>Shop All</Link>
                    </div>
                    <div className="list flex justify-between mt-8">
                        <div className="list-cate bg-white p-7 rounded-2xl flex flex-col gap-3 w-fit box-shadow">
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Carrot</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Blueberry</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Strawberry</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Water Melon</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Mango</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Apple</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>
                            <div className="cate-item flex items-center justify-between cursor-pointer hover:text-green">
                                <div className="left flex items-center gap-4 pr-6">
                                    <div className="cate-icon">
                                        <Icon.Carrot size={18} color="#141414" />
                                    </div>
                                    <div className="cate-name text-button duration-200 whitespace-nowrap">Mixed Juice</div>
                                </div>
                                <Icon.CaretRight size={16} color="#9FA09C" />
                            </div>

                        </div>

                        <div className="list-product grid grid-cols-4 gap-5 pl-6 w-full">
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