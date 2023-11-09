import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one h-[680px] w-full">
                <div className="slider-main h-full w-full relative">
                    <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                        <Image
                            src="/images/slider/bg-slider-1.png"
                            width={0}
                            height={0}
                            alt='bg-slider'
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            className='object-cover'
                        />
                    </div>
                    <div className="slider-content w-full h-full">
                        <div className="container w-full h-full flex items-center relative">
                            <div className="text-content basis-2/5">
                                <div className="text-slider">Take your health to new heights with a tall glass of juice.</div>
                                <div className="text-cate mt-5">Make your BreakfastHealthy and Easy</div>
                                <div className="button-main mt-8">Shop Now</div>
                            </div>
                            <div className="sub-img absolute w-1/2 -right-[100px] top-1/2 -translate-y-1/2">
                                <Image
                                    src={'/images/slider/sub-img-1.png'}
                                    width={1000}
                                    height={1000}
                                    alt='bg-slider'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderOne