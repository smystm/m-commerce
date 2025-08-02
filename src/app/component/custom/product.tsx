'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react'
import { IGetProductData } from '@/app/page';

function PrdBoxing({data}: {data: IGetProductData[]}) {
  let numDis: number = 0;
  return (
    <div className='flex flex-row w-full mt-4 product rounded-xl px-16 sm:px-12 md:px-4 lg:px-0'>
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            spaceBetween={20}
            loop={true}
            dir="rtl" 
            autoplay={{
                delay: 6000, 
                disableOnInteraction: true
            }}
            speed={300} 
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1536: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            }}
             className=""
        >
        {data.map((product, index) => (
            numDis= parseInt(product.discount),
            <SwiperSlide key={index} className="transition-all duration-300 hover:cursor-pointer" dir='rtl'>
              <div className='py-6 relative hover:scale-95 transition-all duration-300'>
                <div className="w-48 bg-gradient-to-b from-[#0e804992] via-[#f7fffb02] to-[#2FAF7200] absolute z-10 left-[50%] translate-x-[-50%] top-20 flex justify-center overflow-hidden rounded-xl rounded-t-full transition-all duration-300">
                  <img className='w-full' src={product.image} alt="" />
                </div>
                <div className='flex relative overflow-hidden mt-40 flex-col items-center justify-start gap-6 px-8 py-3 transition-all duration-300 bg-white border rounded-2xl group hover:shodow-xl dark:bg-gray-800 md:py-6 border-black/20 dark:border-white/5'>
                  <div className='flex flex-col gap-2 py-2 mt-3'>
                    <span className='w-3/4 font-normal line-clamp-1 text-md md:text-lg xl:text-xl'>{product.name}</span>
                    <span className='text-sm font-light line-clamp-2 md:text-sm xl:text-md'>{product.description}</span>
                  </div>
                  <div className="flex flex-row justify-between w-full px-1 py-2">
                    <div className='flex items-center justify-center'>
                        <div className="flex-inline cart bg-[#2FAF72] p-2 rounded-xl hover:bg-green-700 transaion-all duration-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-4"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </div>
                    </div>
                    <div className="flex flex-col price h-2">
                        { numDis >0? 
                          <>
                            <div className="vip absolute bg-[#f63348] rounded-tl-[20px] rounded-br-[50px] top-0 left-0 text-white shadow-sm px-2 py-2">
                              <span className='text-xs'>{numDis}%</span>
                            </div>
                            <div className="flex items-center justify-end gap-1 text-xs text-gray-400 dark:text-gray-500 line-through">
                              <span className='text-xs'>تومان</span>
                              <span>{product.price}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-md">
                                <span className='text-xs'>تومان</span>
                                <span>{parseInt(product.price) - (parseInt(product.price) * numDis / 100) }</span>
                            </div>
                          </> 
                          :
                          <>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-md">
                              <span className='text-xs'>تومان</span>
                              <span>{parseInt(product.price) - (parseInt(product.price) * numDis / 100) }</span>
                            </div>              
                          </>
                        }
                        
                    </div>
                  </div>
                </div>
              </div>  
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

function ProdCart({data}: {data: IGetProductData[]}) {
  let numDis:number = 0;
  return(
    <div className='flex flex-row w-full product rounded-xl px-0 sm:px-8 md:px-4 lg:px-0'>
      <Swiper
            modules={[Grid, Autoplay, Pagination]}
            spaceBetween={20}
            loop={true}
            speed={300} 
            dir='ltr'
            breakpoints={{
                0:{
                    direction: 'vertical',
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                640: {
                    direction: 'vertical',
                    slidesPerView: 4,
                    spaceBetween: 10,

                },
                768: {
                    direction: 'horizontal',
                    slidesPerView: 2,
                    spaceBetween: 20,
                    grid: {
                        rows: 2,
                    },
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                },
            }}
            className="h-180 md:h-225 lg:h-[auto] w-full flex dir:ltr md:dir-rtl"
        >
          {data.map((product, index) => (        
            numDis= parseInt(product.discount),
            numDis > 0 ? 
              <SwiperSlide key={index} className="transition-all duration-300 hover:cursor-pointer" dir='rtl'>
                <div className='relative hover:scale-95 transition-all duration-300 mx-auto flex justify-center'>
                  <div className='flex max-w-100 sm:max-w-125 md:max-w-75 flex-row md:flex-col relative overflow-hidden items-center justify-start gap-6 md:px-8 px-4 py-1 transition-all duration-300 bg-white border rounded-2xl group hover:shodow-xl dark:bg-gray-800 md:py-6 border-black/20 dark:border-white/5'>
                    <div className="1">
                      <div className="w-24 md:w-42 bg-gradient-to-b from-[#0e804954] via-[#f7fffb02] to-[#0e804924] flex justify-center overflow-hidden rounded-lg rounded-br-4xl rounded-tl-4xl transition-all duration-300">
                        <img className='w-full' src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="2">
                      <div className='flex flex-col gap-2 py-2 mt-3'>
                        <span className='w-3/4 font-normal line-clamp-1 text-md md:text-lg xl:text-xl'>{product.name}</span>
                        <span className='text-sm font-light line-clamp-2 md:text-sm xl:text-md'>{product.description}</span>
                      </div>
                      <div className="flex flex-row justify-between w-full px-1 py-2">
                        <div className='flex items-center justify-center'>
                            <div className="flex-inline cart bg-[#2FAF72] p-2 rounded-xl hover:bg-green-700 transaion-all duration-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-4"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                            </div>
                        </div>
                        <div className="flex flex-col price h-2">
                            { numDis >0? 
                              <>
                                <div className="vip absolute bg-[#f63348] rounded-tl-[20px] rounded-br-[50px] top-0 left-0 text-white shadow-sm px-2 py-2">
                                  <span className='text-xs'>{numDis}%</span>
                                </div>
                                <div className="flex items-center justify-end gap-1 text-xs text-gray-400 dark:text-gray-500 line-through">
                                  <span className='text-xs'>تومان</span>
                                  <span>{product.price}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-md">
                                    <span className='text-xs'>تومان</span>
                                    <span>{parseInt(product.price) - (parseInt(product.price) * numDis / 100) }</span>
                                </div>
                              </> 
                              :
                              <>
                                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-md">
                                  <span className='text-xs'>تومان</span>
                                  <span>{parseInt(product.price) - (parseInt(product.price) * numDis / 100) }</span>
                                </div>              
                              </>
                            }
                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </SwiperSlide>    
            : null      
          ))}

        </Swiper>
    </div>
  )
}

export {PrdBoxing,ProdCart}