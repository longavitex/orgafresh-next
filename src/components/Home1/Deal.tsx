import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface DealProps {
    data: Array<ProductType>;
    limit: number;
}

const Deal: React.FC<DealProps> = ({ data, limit }) => {
    return (
        <>
            <div className="deal-block pt-20 pb-20">
                <div className="container">
                    <div className="heading flex items-center justify-center gap-9">
                        <div className="text-heading">Deal Of The Week:</div>
                        <div className="list-time flex items-center gap-3">
                            <div className="time bg-orange w-[42px] h-[38px] flex items-center justify-center text-white text-cate rounded-md day">20</div>
                            <span className='text-cate text-black'>:</span>
                            <div className="time bg-orange w-[42px] h-[38px] flex items-center justify-center text-white text-cate rounded-md hour">14</div>
                            <span className='text-cate text-black'>:</span>
                            <div className="time bg-orange w-[42px] h-[38px] flex items-center justify-center text-white text-cate rounded-md minute">04</div>
                            <span className='text-cate text-black'>:</span>
                            <div className="time bg-orange w-[42px] h-[38px] flex items-center justify-center text-white text-cate rounded-md second">11</div>
                        </div>
                    </div>
                    <div className="list-product mt-8 pt-5 pb-8 px-5 border-2 border-orange rounded-lg">
                        {data.slice(0, limit).map((p, index) => (
                            <div key={index} className="product-block">
                                <Product data={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal