import React from 'react'

export default function Category() {
  
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
    <div className='grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6 md:gap-4 lg:gap-8 mt-6 lg:mt-8 2xl:mt-12'>
        {categories.map((category, index) => (
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
  )
}
