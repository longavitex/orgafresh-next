import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'

interface ProductProps {
    data: ProductType
}

const Product: React.FC<ProductProps> = ({ data }) => {
    return (
        <div className="product-item">
            <div className="product-main">
                <Image
                    src={data.image}
                    width={40}
                    height={40}
                    alt={data.name}
                />
                <div className="text-title">{data.name}</div>
            </div>
        </div>
    )
}

export default Product