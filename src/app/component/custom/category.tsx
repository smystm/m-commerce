import React from 'react'
import Ttlsec from '../ui/ttlsec'
import { IGetCategoryData } from '@/app/page'

export default function Category({data}: {data: IGetCategoryData[]}) {
  return (
    <>
        <Ttlsec ttl='دسته بندی ها' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است' isLnk={false}>
            <div className="flex p-2.5 bg-[#4AB9CA] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-7 text-white"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>  
        </Ttlsec>
        <div className='2xl:w-full grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6 md:gap-4 lg:gap-8 mt-3 md:mt-6'>
            {data.map((category, index) => (
                <div key={index} className="group flex flex-col items-center rounded-3xl py-8 hover:scale-95 hover:cursor-pointer duration-300">
                    <div className="w-40 h-40 flex flex-col items-center justify-center gap-4 rounded-3xl">
                        <div className='flex justify-center items-center w-30 h-30 bg-black/4 dark:bg-white/4 border border-black/10 dark:border-white/10 shadow-lg rounded-full group-hover:rotate-360 duration-500'>
                            <img src={category.source} alt="category-Ajil" className='w-10' />
                        </div>
                        <span className='font-normal text-lg text-[#111827] dark:text-[#F3F4F6]'>{category.title}</span>
                    </div>
                </div>
            ))}
        </div>  
    </>
  )
}
