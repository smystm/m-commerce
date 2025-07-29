import React from 'react'
import Button from '../ui/button'

export default function Cateboxy() {
  
  const categories = [
      {
          id: 1,
          title: 'دسته یکم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 2,
          title: 'دسته دوم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 3,
          title: 'دسته سوم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 4,
          title: 'دسته چهارم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 5,
          title: 'دسته پنجم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 6,
          title: 'دسته ششم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 7,
          title: 'دسته هفتم',
          source: '/assets/img/category-Ajil.png'
      },
      {
          id: 8,
          title: 'دسته هشتم',
          source: '/assets/img/category-Ajil.png'
      }
  ]  


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 lg:gap-8 mt-6 lg:mt-8 2xl:mt-12'>
        {categories.map((category, index) => (
            <div key={index} className="group flex flex-col items-center rounded-3xl py-8 hover:scale-95 hover:cursor-pointer duration-300">
                <div className="w-80 h-22 flex flex-row-reverse bg-black/5 dark:bg-white/10 items-center justify-center gap-12 rounded-3xl shadow-lg">
                    <div className='flex justify-center items-center w-30 h-30 bg-black/3 dark:bg-white/4 border border-black/10 dark:border-white/10 shadow-sm rounded-full group-hover:rotate-360 duration-500'>
                        <img src={category.source} alt="category-Ajil" className='w-10' />
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <span className='font-normal text-lg text-[#111827] dark:text-[#F3F4F6]'>{category.title}</span>                      
                        <Button name="خرید" className="inline-flex justify-center gap-1.5 group-hover:gap-2.5 items-center px-2 py-1 rounded-lg bg-black/3 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/90 transition-all duration-300 hover:scale-95 active:scale-90 outline-none focus:ring-2 focus:ring-purple-500/50 hover:cursor-pointer" choose="none" send="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
