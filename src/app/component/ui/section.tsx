import React from 'react'

type props={
    className?:string
    ttl?:string
    children:React.ReactNode
}
export default function Section({className, ttl, children}:props) {
  return (
    <section className={`overflow-hidden mx-auto ${className}`}>
        <h2 className='font-bold text-2xl lg:text-3xl text-[#111827] dark:text-[#F3F4F6]'>
            {ttl}
        </h2>
        {children}
    </section>
  )
}
