'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../ui/button'
import Ttlsec from '../ui/ttlsec'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IGetCategoryData } from '@/app/page'

export default function Cateboxy({data}:{data: IGetCategoryData[]} ) {

  return (
    <> 
        <Ttlsec ttl='انواع عسل' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است' isLnk={true} txtLnk='برو به فروشگاه' classLnk='text-purple-600 hover:text-purple-800'>
            <div className="flex p-2.5 bg-[#794B89] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 text-white"><path d="M12 22C5 21 2 12 2 12S5 3 12 2c7 1 10 10 10 10s-3 9-10 10z"/><path d="M12 2v20"/></svg>
            </div>  
        </Ttlsec>
        {/* <div className='xl:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 lg:gap-x-16 xl:gap-x-2 mt-3 md:mt-6'> */}
        <div className='flex flex-row w-full mt-4 rounded-xl px-8 sm:px-6 md:px-4 lg:px-8'>
            <Swiper
                modules={[Autoplay]}        
                spaceBetween={20}
                loop={true}
                dir="rtl" 
                autoplay={{
                    delay: 6000, 
                    disableOnInteraction: true
                }}
                speed={400} 
                breakpoints={{
                0:{
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                }}
                className="w-full"
            >
            {data.map((category, index) => 
            
            (
                <SwiperSlide key={index} className="transition-all duration-300 hover:cursor-pointer" dir='rtl'>
                    <div key={index} className="group flex flex-col items-center rounded-3xl py-8 hover:scale-95 hover:cursor-pointer duration-300">
                        <div className="w-38 sm:w-48 md:w-45 lg:w-45 xl:w-55 2xl:w-80 h-20 lg:h-22 flex 2xl:flex-row-reverse bg-white dark:bg-white/10 items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-4 2xl:gap-12 rounded-3xl shadow-lg">
                            <div className='flex justify-center items-center w-14 h-14 md:w-16 md:h-16 xl:w-18 xl:h-18 2xl:w-30 2xl:h-30 bg-white/30 dark:bg-white/4 border border-black/10 dark:border-white/10 shadow-sm rounded-full group-hover:rotate-360 duration-500'>
                                <img src={category.source} alt="category-Ajil" className='w-6 md:w-8 lg:w-10' />
                            </div>
                            <div className="flex flex-col gap-2 text-sm">
                                <span className='font-normal text-sm md:text-md xl:text-lg text-[#111827] dark:text-[#F3F4F6]'>{category.title}</span>                      
                                <Button name="خرید" className="inline-flex justify-center text-xs md:text-sm lg:text-md gap-1.5 group-hover:gap-2.5 items-center px-2 py-1 rounded-lg bg-green-700 text-white hover:bg-green-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/90 transition-all duration-300 hover:scale-95 active:scale-90 outline-none focus:ring-2 focus:ring-purple-500/50 hover:cursor-pointer" choose="none" send="none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
  )
}
