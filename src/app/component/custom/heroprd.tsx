'use client'
import { IGetProductData } from '@/types'
import React, { useState } from 'react'
import Albums from './albums'
import {PlusIcon, MinusIcon} from '@/app/component/ui/svgs'

export default function Heroprd({data} : {data: IGetProductData}) {
  const weight = ['250','500','750','1']
  const boxing = ['کارتون','پلاستیک']
  let numDis= data.discount
  let numPrc = data.price
  const [count, setCount] = useState(1)
  let newCount = count
  return (
    <div className='w-full flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:px-10 gap-2 lg:gap-5 xl:gap-10'>
        <div className='w-3/4 md:w-5/12 flex flex-col gap-2 items-start'>
            <Albums data={data}></Albums>
        </div>
        <div className='w-3/4 md:w-7/12 flex flex-col gap-12 items-start'>        
            <div className='flex flex-col gap-6'>
              <h3 className='font-semibold text-2xl text-[#111827] dark:text-[#F3F4F6]'>{data.name}</h3>
              <span className='text-md font-normal text-gray-600 dark:text-gray-500'>کد: <>200000200{data.id}</></span>
            </div>
            <div className='flex flex-col gap-y-2 py-2'>
              <span className='text-lg font-medium'>انتخاب وزن :</span>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {weight.map((weight, index)=>(
                  <div key={index}>
                    <input className="peer sr-only" type="radio" value={"سلام"} name="weight" id={`weight${index}`} /> 
                    <label id={`weight${index}`} htmlFor={`weight${index}`} className='flex items-center group flex-row px-4 py-2 gap-2 bg-gray-200 dark:bg-white/5 peer-checked:bg-[#257E6C] cursor-pointer rounded-xl transition-all duration-200'>
                      <span className='group-peer-checked:text-white'>{weight}</span>
                      <span className='group-peer-checked:text-white text-sm'>{weight === '1' ? 'کیلوگرم' : 'گرم'}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-2/3 flex flex-col gap-2 py-2'>
              <span className='text-lg font-medium'>انتخاب بسته بندی :</span>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-center'>
                {boxing.map((box, index)=>(
                  <div key={index}>
                    <input className="peer sr-only" type="radio" value={"سلام"} name="box" id={`box${index}`} /> 
                    <label id={`box${index}`} htmlFor={`box${index}`} className='flex items-center justify-center group peer-checked:bg-[#257E6C] flex-row px-4 py-2 gap-2 bg-gray-200 dark:bg-white/5 cursor-pointer rounded-xl transition-all duration-200'>
                      <span className='group-peer-checked:text-white'>{box}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full flex flex-col gap-8 py-2'>
                <div className="flex flex-row justify-between items-center">
                  <span className='text-lg font-medium'>قیمت نهایی :</span>
                  <div className='flex flex-col gap-1 items-end'>
                    { numDis >0? 
                          <>
                            
                            <div className="flex flex-row-reverse items-center justify-end gap-1 text-md text-gray-500 dark:text-gray-400">
                              <span className='text-xs'>تومان</span>
                              <span className='line-through'>{newCount * numPrc}</span>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-1 text-[#257E6C] dark:text-green-500 text-2xl font-semibold">
                                <span className='text-xs text-gray-600 dark:text-gray-200'>تومان</span>
                                <span>{newCount * (numPrc - (numPrc * numDis / 100))}</span>
                            </div>
                          </> 
                          :
                          <>
                            <div className="flex flex-row-reverse items-center gap-1 text-[#257E6C] dark:text-green-500 text-2xl font-semibold">
                              <span className='text-xs text-gray-600 dark:text-gray-200'>تومان</span>
                              <span>{newCount * (numPrc - (numPrc * numDis / 100))}</span>
                            </div>              
                          </>
                        }
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-2 justify-between items-center">
                  <div className='w-full md:w-1/4 h-10 flex justify-between border border-black/20 dark:border-white/10 px-2 py-1 rounded-lg'>
                      <button className='flex items-center font-meduim px-2 py-1 cursor-pointer' onClick={()=>setCount(newCount = count+1)}>
                        <PlusIcon className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300"/>
                      </button>
                      <span className='flex items-center py-1'>{count}</span>
                      <button className='flex items-center font-meduim px-2 py-1 cursor-pointer' onClick={()=>setCount(newCount > 1 ? newCount = count-1 : newCount)}>
                        <MinusIcon className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300" />
                      </button>
                  </div>
                  <button className='w-full md:w-3/4 h-10 cursor-pointer flex justify-center px-2 py-2 bg-[#257E6C] hover:bg-[#257E6C]/90 text-white border dark:border-white/5 rounded-lg transition-all duration-300'>
                    افزودن به سبد خرید
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}
