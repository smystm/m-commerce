'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode,Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import React from 'react'

type props = {
  dirSlider: string
}

export default function Marqbox({dirSlider}:props) {
    const products = [
        {
          id: '01',
          name: 'پسته',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
        {
          id: '02',
          name: 'بادام',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
        {
          id: '03',
          name: 'بمب',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
        {
          id: '04',
          name: 'کلت',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
        {
          id: '05',
          name: 'باقالوا',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
        {
          id: '06',
          name: 'بستنی',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          image: "/assets/img/badam.png",
          
        },
    ];
  return (
    <div className='marqbox w-full flex flex-row mt-3 md:mt-6'>
        <Swiper
            modules={[FreeMode, Autoplay, Scrollbar, A11y]}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            loop={true}
            dir={dirSlider} 
            autoplay={{
                delay: 0, 
                disableOnInteraction: false
            }}
            freeMode={{
                enabled: true,
                momentum: true
            }}
            allowTouchMove={true} 
            speed={9000} 
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1536: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
             className="myCustomSwiper"
        >
        {products.map((product, index) => (
            <SwiperSlide key={index} className="hover:cursor-pointer transition-all duration-300" dir='rtl'>
              <div className='py-4'>
                <div className='flex flex-row items-center gap-6 justify-start bg-white dark:bg-gray-800 py-3 md:py-4 rounded-xl px-8 border border-black/20 dark:border-white/5 hover:shadow-lg transition-all duration-300'>
                  <div className="flex overflow-hidden rounded-xl border border-black/20 dark:border-white/5">
                    <img className='w-24 sm:w-36 md:w-24 lg:w-24' src={product.image} alt="" />
                  </div>
                  <div>
                    <span className='font-medium text-md md:text-lg xl:text-xl'>{product.name}</span>
                    <span className='line-clamp-1 font-normal text-md md:text-sm xl:text-lg'>{product.description}</span>
                  </div>
                </div>
              </div>  
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

