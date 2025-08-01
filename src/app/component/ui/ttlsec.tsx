import Link from 'next/link'
import React from 'react'

type props={
    ttl: string
    desc: string
    children: React.ReactNode
    isLnk: boolean
    hrefLnk?: string
    txtLnk?: string
    classLnk?: string
}

export default function Ttlsec({ttl, desc, children, isLnk, hrefLnk, txtLnk, classLnk}: props) {
  return (
    <div className={`overflow-hidden w-full px-10 flex flex-col md:flex-row md:justify-between md:items-center mx-auto`}>
        <div className="flex gap-4 md:w-3/4">
            <div className="flex items-center">
                {children}
            </div>
            <div className="flex flex-col gap-1 justify-center w-full">
                <h2 className='font-bold text-2xl lg:text-3xl text-[#111827] dark:text-[#F3F4F6] line-clamp-1 md:w-1/2 xl:w-2/5'>{ttl}</h2>
                <span className='font-light text-md lg:text-lg text-gray-600 dark:text-gray-300 line-clamp-1 xl:w-3/5'>{desc}</span>
            </div>
        </div>
        { isLnk? 
        <div className="flex flex-row justify-end items-end md:w-1/4">
            <Link className={`flex gap-4 items-center py-4 hover:underline ${classLnk} transition-all duration-300`} href={hrefLnk??'#'}>
                <span className=''>{txtLnk}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
        </div>
        : null }
    </div>
  )
}
