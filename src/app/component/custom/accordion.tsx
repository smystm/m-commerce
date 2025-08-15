'use client'
import React, { useState } from 'react'
import { IGetFaqs } from '@/types/index'

export default function Accordion({data}: {data: IGetFaqs[]}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let isOpen:(boolean | null) = null

  return (
    <div className='flex flex-col items-center gap-2 w-full transition-all duration-500 py-6 mt-3 md:mt-6'>
        {data.map((data, index)=> (
        isOpen = openIndex === index,
        <div className={`w-11/12 md:w-4/5 lg:w-3/5 bg-white dark:bg-gray-800 rounded-2xl ${isOpen? "shadow-lg" : ""} transition-all duration-400`} key={index}>
          <button className={`w-full text-left px-4 py-3 flex items-center justify-between ${isOpen ? "underline font-semibold" : "font-medium"} transition-all duration-300 `} onClick={()=> toggleAccordion(index)}>
            <span>{data.question}</span>
            <span
              className={`transition-all duration-300 text-xs text-gray-300 dark:text-gray-500 `}
              style={{ transform: `rotate(${isOpen ? 270 : 90}deg)` }}
            >
              ❯
            </span>
          </button>
          <div  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-50" : "max-h-0"}`}>
            <p className="px-4 py-3 text-gray-800 dark:text-gray-300 leading-10 max-w-4/5">
              {data.answer}
            </p>
          </div>
        </div> 
        ))}
    </div>
  )
}
