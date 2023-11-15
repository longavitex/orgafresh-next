import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BestProduct = () => {
    return (
        <>
            <div className="best-product-block relative flex items-center justify-center h-[660px] max-lg:h-[600px] max-md:h-[560px] max-[400px]:h-[450px]">
                <div className="bg-img absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src={'/images/other/best-product-bg.png'}
                        width={2560}
                        height={906}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">Best Products</div>
                        <div className="text-heading mt-2">Organic Carrot Smothie</div>
                        <div className="text-title text-secondary mt-2">Everyday Fresh & Clean with OurProducts</div>
                    </div>
                    <div className="content-main flex items-center justify-center ml-12 mt-10 max-md:ml-0">
                        <div className="list-cate flex flex-col items-end justify-between h-full -mr-4 max-lg:-mr-12 max-md:-mr-1">
                            <div className="cate-item flex items-center gap-3 pb-6">
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-name text-cate">Apple</div>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/apple.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                </Link>
                                <Image
                                    src={'/images/other/line1.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] max-md:hidden'
                                />
                            </div>
                            <div className="cate-item flex items-center gap-3 pt-10 pb-12">
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-name text-cate">Peach</div>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/peach.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                </Link>
                                <Image
                                    src={'/images/other/line2.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] max-md:hidden'
                                />
                            </div>
                            <div className="cate-item flex items-center gap-3">
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-name text-cate">Cinnamon</div>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/cinnamon.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                </Link>
                                <Image
                                    src={'/images/other/line3.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] mb-14 max-md:hidden'
                                />
                            </div>
                        </div>
                        <div className="main-img">
                            <Image
                                src={'/images/other/best-product-smoothies.png'}
                                width={2560}
                                height={906}
                                alt='bg-img'
                                className='w-[auto]'
                            />
                        </div>
                        <div className="list-cate -ml-4 max-md:ml-0">
                            <div className="cate-item flex items-center gap-3 pb-6">
                                <Image
                                    src={'/images/other/line1.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] rotate-y-180 max-md:hidden'
                                />
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/lemon.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                    <div className="cate-name text-cate">Lemon</div>
                                </Link>
                            </div>
                            <div className="cate-item flex items-center gap-3 pt-10 pb-12">
                                <Image
                                    src={'/images/other/line2.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] rotate-y-180 max-md:hidden'
                                />
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/orange.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                    <div className="cate-name text-cate">Orange</div>
                                </Link>
                            </div>
                            <div className="cate-item flex items-center gap-3">
                                <Image
                                    src={'/images/other/line3.svg'}
                                    width={200}
                                    height={200}
                                    alt='line'
                                    className='w-[auto] h-[auto] rotate-y-180 mb-14 max-md:hidden'
                                />
                                <Link href={'#!'} className='flex items-center gap-3'>
                                    <div className="cate-img">
                                        <Image
                                            src={'/images/other/cumin.png'}
                                            width={70}
                                            height={70}
                                            alt='cate'
                                        />
                                    </div>
                                    <div className="cate-name text-cate">Cumin</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestProduct