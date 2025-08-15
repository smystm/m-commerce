'use client'
import React from 'react'
import { IGetProductData } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

export default function Albums({data} : {data: IGetProductData}) {   
  const albums:[string,string,string,string,string,string,string,string]=['/assets/img/asale.png','/assets/img/asale.png','/assets/img/badam.png','/assets/img/asale.png','/assets/img/asale.png','/assets/img/asale.png','/assets/img/asale.png','/assets/img/asale.png'];
  const [source, setSource] = useState(`${data.image_url}`);
    
  return (
    <div className='flex flex-col albums w-full gap-2'>
        <div className="w-full bg-white/5 border border-black/10 dark:border-white/10 dark:bg-white/2 rounded-2xl overflow-hidden transition-all duration-300">
            <img className='w-full' src={source} alt="SEO" />
        </div>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            loop={false}
            dir="rtl" 
            speed={300} 
            breakpoints={{
            0: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 6,
                spaceBetween: 15,
            }
            }}
             className="w-full"
        >
        {albums.map((pic, index)=>(
        <SwiperSlide key={index} className="transition-all duration-300 hover:cursor-pointer">
            <button className='w-full relative overflow-hidden cursor-pointer transition-all duration-300' onClick={()=> setSource(pic)}>
                <div className="p-0 bg-white/10 dark:bg-white/4 border border-black/10 dark:border-white/10 flex justify-center items-center overflow-hidden rounded-xl transition-all duration-300">
                  <img className='w-full' src={pic} alt="seo" />
                </div>
            </button>
        </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}
