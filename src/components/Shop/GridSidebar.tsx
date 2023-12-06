'use client'

import React, { useState } from 'react'
import HandlePagination from '../Other/HandlePagination';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ProductType>;
    productPerPage: number
    dataTaste: string | null
}

const GridSidebar: React.FC<Props> = ({ data, productPerPage, dataTaste }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    // Filter product data by dataTaste
    let filteredData = data;
    if (dataTaste !== null) {
        filteredData = data.filter(product => product.type === dataTaste);
    }

    // Find page number base on filteredData
    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    // Get product data for current page
    let currentProducts: ProductType[];

    if (filteredData.length > 0) {
        currentProducts = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentProducts = []
    }

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };


    return (
        <>
            <div className="shop-product grid-sidebar flex gap-[60px] md:pt-10 md:pb-20 pt-6 pb-8">
                <div className="left sidebar w-[22%]">
                    <div className="category-filter">
                        <div className="text-cate">Product categories</div>
                        <div className="list-cate mt-2.5">
                            <div className="cate-item cursor-pointer block w-fit hover:underline">Smoothies</div>
                            <div className="cate-item cursor-pointer block w-fit hover:underline mt-2">Fresh Fruits</div>
                            <div className="cate-item cursor-pointer block w-fit hover:underline mt-2">Fresh Vegetables</div>
                            <div className="cate-item cursor-pointer block w-fit hover:underline mt-2">Cakes</div>
                            <div className="cate-item cursor-pointer block w-fit hover:underline mt-2">Grain & Nuts</div>
                        </div>
                    </div>
                    <div className="price-filter mt-10">
                        <div className="text-cate">Filter by price</div>
                        <div className="line bg-line h-1.5 w-full relative mt-5">
                            <div className="progress bg-orange absolute left-0 top-0 h-full w-1/2"></div>
                        </div>
                        <div className="price-block flex items-center mt-3">
                            <div className="text-grey pr-1.5">Price:</div>
                            <div className="min">$
                                <span className='price-min'>50</span>
                            </div>
                            <div className="line px-1.5">-</div>
                            <div className="max">$
                                <span className='price-max'>500</span>
                            </div>
                        </div>
                    </div>
                    <div className="taste-filter mt-10">
                        <div className="text-cate">Filter by taste</div>
                        <div className="list-cate flex items-center gap-2 flex-wrap mt-3">
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'mango' ? 'active' : ''}`}>Mango</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'apple' ? 'active' : ''}`}>Apple</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'orange' ? 'active' : ''}`}>Orange</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'strawberry' ? 'active' : ''}`}>strawberry</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'blueberry' ? 'active' : ''}`}>blueberry</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'watermelon' ? 'active' : ''}`}>watermelon</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'mixed-juice' ? 'active' : ''}`}>mixed juice</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'lemon' ? 'active' : ''}`}>lemon</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'peach' ? 'active' : ''}`}>peach</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'banana' ? 'active' : ''}`}>banana</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'cinnamon' ? 'active' : ''}`}>cinnamon</div>
                            <div className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'cumin' ? 'active' : ''}`}>cumin</div>
                        </div>
                    </div>
                </div>
                <div className="right">
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

                    <div className="list-product grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-[30px] md:gap-y-[30px] gap-y-4 gap-3 md:mt-10 mt-6">
                        {currentProducts.map((item) => (
                            <Product key={item.id} data={item} type='col' />
                        ))}
                    </div>

                    {pageCount > 1 && (
                        <div className="list-pagination flex items-center justify-center md:mt-10 mt-6">
                            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default GridSidebar