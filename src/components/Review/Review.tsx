import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ReviewType } from '@/type/ReviewType'
import Rate from '@/components/Other/Rate'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface ReviewProps {
    data: ReviewType
    type: string
}

const Review: React.FC<ReviewProps> = ({ data, type }) => {
    return (
        <>
            {type === "style-one" ? (
                <div className="review-item">
                    <div className="review-main block h-full p-8 rounded-3xl bg-white relative">
                        <i className="icon-quote text-2xl text-green absolute -top-3"></i>
                        <div className="user flex items-center gap-4">
                            <div className="bg-img md:w-[60px] md:h-[60px] w-[48px] h-[48px]">
                                <Image
                                    src={data.avatar}
                                    width={60}
                                    height={60}
                                    alt='avatar'
                                    className='rounded-full w-full h-full'
                                />
                            </div>
                            <div className="user-infor">
                                <div className="text-button-lg">{data.name}</div>
                                <div className="text-grey md:mt-1 mt-0">{data.address}</div>
                            </div>
                        </div>
                        <div className="review-infor lg:mt-5 mt-4">
                            <div className="review-desc lg:text-2xl text-base">{data.description}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="review-item">

                </div>
            )
            }
        </>
    )
}

export default Review