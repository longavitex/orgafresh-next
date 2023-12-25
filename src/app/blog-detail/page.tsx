'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import blogData from '@/data/Blog.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Footer from '@/components/Footer/Footer'

const BlogDetail = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    let blogId = searchParams.get('id')
    if (blogId === null) {
        blogId = '1'
    }

    const blogMain = blogData[Number(blogId) - 1]

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog-detail?id=${blogId}`);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <div className="blog-page ">
                <div className="bg-img">
                    <Image
                        src={blogMain.thumbImg}
                        width={4000}
                        height={3000}
                        alt={blogMain.thumbImg}
                        className='w-full object-cover h-[600px]'
                    />
                </div>
                <div className="container">
                    <div className="bg-white -mt-16 px-10 md:pb-20 pb-12 md:pt-16 pt-12 flex justify-between relative">
                        <div className="left w-2/3">
                            <div className="text-subheading">{blogMain.tag}</div>
                            <div className="text-heading mt-3">{blogMain.title}</div>
                            <div className="flex items-center gap-6 gap-y-2 flex-wrap text-caption text-grey mt-4">
                                <div className="left flex items-center gap-2">
                                    <Icon.CalendarBlank size={12} className='text-caption text-grey' />
                                    <div className="date">{blogMain.date}</div>
                                </div>
                                <div className="right flex items-center gap-2">
                                    <Icon.User size={12} className='text-caption text-grey' />
                                    <div className="author">{blogMain.author}</div>
                                </div>
                            </div>
                            <div className="desc mt-8">
                                <div className="text-title text-secondary">{blogMain.description}</div>
                                <div className="text-title text-secondary mt-6">I think of this as a sheet pan sandwich recipe. You roast a bunch of mushrooms and scallions in a hot oven as your main components. And you whip up a simple poblano yogurt while those are roasting. Pile everything high on top of hearty slices of well-toasted bread, and you're set.</div>
                            </div>
                        </div>
                        <div className="right w-1/4">
                            <form className='form-search relative w-full h-[42px]'>
                                <input className='py-2 px-4 w-full h-full border border-line rounded-lg' type="text" placeholder='Search' />
                                <button>
                                    <Icon.MagnifyingGlass className='text-button-lg absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
                                </button>
                            </form>
                            <div className="filter-category md:mt-10 mt-6">
                                <div className="text-button-lg">Categories</div>
                                <div className="list-cate mt-4">
                                    <div className="cate-item flex items-center justify-between cursor-pointer">
                                        <div>Smoothies</div>
                                        <div className="text-title text-secondary">12</div>
                                    </div>
                                    <div className="cate-item flex items-center justify-between cursor-pointer mt-2">
                                        <div>Fruit Vegetables</div>
                                        <div className="text-title text-secondary">12</div>
                                    </div>
                                    <div className="cate-item flex items-center justify-between cursor-pointer mt-2">
                                        <div>Cakes</div>
                                        <div className="text-title text-secondary">12</div>
                                    </div>
                                    <div className="cate-item flex items-center justify-between cursor-pointer mt-2">
                                        <div>Grains</div>
                                        <div className="text-title text-secondary">12</div>
                                    </div>
                                </div>
                            </div>
                            <div className="recent md:mt-10 mt-6">
                                <div className="text-button-lg">Recent Posts</div>
                                <div className="list-recent mt-1">
                                    {blogData.slice(10, 14).map(item => (
                                        <div className="item flex gap-3 mt-4 cursor-pointer" key={item.id} onClick={() => handleBlogClick(item.id)}>
                                            <Image
                                                src={item.thumbImg}
                                                width={500}
                                                height={400}
                                                alt={item.thumbImg}
                                                className='w-[100px] object-cover flex-shrink-0'
                                            />
                                            <div>
                                                <div className="text-title">{item.title}</div>
                                                <div className="text-secondary text-caption flex items-center gap-2">
                                                    <Icon.CalendarBlank className='' />
                                                    <div className="date">{item.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-tags md:mt-10 mt-6">
                                <div className="text-button-lg">Tags Cloud</div>
                                <div className="list-tags flex items-center flex-wrap gap-3 mt-4">
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Smoothies</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Vegetables</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Fruits</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Cakes</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Health</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Grains</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default BlogDetail