import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Review from '../Review/Review'
import { ReviewType } from '@/type/ReviewType'

interface Props {
    data: Array<ReviewType>;
    limit: number;
}

const ReviewSection: React.FC<Props> = ({data, limit}) => {
    return (
        <>
            <div className="review-block relative flex items-center justify-center">
                <div className="bg-img absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src={'/images/other/bg-review.png'}
                        width={2560}
                        height={1080}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container md:py-20 py-12">
                    <div className="list-review grid lg:grid-cols-3 gap-8">
                        {data.slice(0, limit).map((item, index) => (
                            <Review key={index} data={item} type='style-one' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection