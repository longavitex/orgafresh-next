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

const SpecialProduct: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="special-product-block relative flex items-center justify-center">
                <div className="bg-img absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src={'/images/other/bg-special-product.png'}
                        width={2560}
                        height={1080}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container md:py-16 py-10">
                    <div className="heading">
                        <div className="text-subheading">Sale off 30%</div>
                        <div className="text-heading mt-2">Special Products</div>
                    </div>
                    <div className="list-product special-product flex">
                        <div className='xl:basis-3/4 grid lg:grid-cols-3 sm:grid-cols-2 max-lg:w-full gap-5 flex-wrap mt-8'>
                            {data.slice(11, limit).map((prd, index) => (
                                <Product key={index} data={prd} type='row-1' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialProduct