import React from 'react'

type props={
    className?:string
    ttl?:string
    children:React.ReactNode
    isTtl?: boolean
}
export default function Section({className, ttl, children, isTtl}:props) {
  return (
    <section className={`overflow-hidden mx-auto ${className}`}>
        {isTtl?
        <h2 className='font-bold text-2xl lg:text-3xl text-[#111827] dark:text-[#F3F4F6]'>
          {ttl}
        </h2>
        : null}
        {children}
    </section>
  )
}
