'use client'

import React, { useState } from 'react'
import HandlePagination from '../Other/HandlePagination';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ProductType>;
    productPerPage: number
}

const ShopProduct: React.FC<Props> = ({ data, productPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    const currentProducts = data.slice(offset, offset + productsPerPage);

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(data.length / productsPerPage);

    return (
        <>
            <div className="shop-product md:pt-10 md:pb-20 pt-6 pb-8">
                <div className="shop-heading flex items-center justify-between flex-wrap gap-5 gap-y-4">
                    <div className="select-block relative">
                        <select className='text-title py-2 md:pl-4 pl-3 md:pr-10 pr-8 rounded-lg border border-line' name="select-filter" id="selectFilter">
                            <option value="Best Selling">Best Selling</option>
                            <option value="Best Reviews">Best Reviews</option>
                            <option value="Best Discount">Best Discount</option>
                        </select>
                        <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                    </div>
                    <div className="right flex items-center gap-5">
                        <div className="text-caption">Showing 1–12 of 40 results</div>
                        <div className="change-layout flex items-center gap-3">
                            <div className="btn-grid flex items-center justify-center w-8 h-8 rounded border border-line">
                                <Icon.List size={18} color='#A0A0A0' weight='bold' />
                            </div>
                            <div className="btn-list flex items-center justify-center w-8 h-8 rounded border border-line">
                                <Icon.List size={18} color='#A0A0A0' weight='bold' className='rotate-90' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="list-product grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[30px] md:gap-y-[30px] gap-y-4 gap-3 md:mt-10 mt-6">
                    {currentProducts.map((item) => (
                        <Product key={item.id} data={item} type='col' />
                    ))}
                </div>

                <div className="list-pagination flex items-center justify-center md:mt-10 mt-6">
                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                </div>
            </div>
        </>
    )
}

export default ShopProduct